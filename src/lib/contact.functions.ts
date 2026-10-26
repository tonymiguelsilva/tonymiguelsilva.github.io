import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Sends a portfolio contact message to Tony's mailbox through the Gmail
// connector gateway. Server-only: the connector keys are read inside the
// handler, and the recipient is hardcoded so visitors cannot mail anyone else.

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const RECIPIENT = "tonymiguel71@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome").max(80, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(160, "E-mail muito longo"),
  message: z.string().trim().min(10, "Escreva ao menos 10 caracteres").max(2000, "Mensagem muito longa"),
  // Honeypot: real people never fill this hidden field; bots do.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.input<typeof contactSchema>;

const b64 = (value: string) =>
  btoa(Array.from(new TextEncoder().encode(value), (b) => String.fromCharCode(b)).join(""));

const header = (value: string) => (/^[\x00-\x7F]*$/.test(value) ? value : `=?UTF-8?B?${b64(value)}?=`);

function createRawEmail(subject: string, body: string, replyTo: string): string {
  const email = [
    `To: ${RECIPIENT}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${header(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    body,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!apiKey || !connectionKey) {
      console.error("Contact send skipped: connector credentials are not available");
      return { ok: false as const, error: "O envio ainda não está configurado. Use o e-mail direto." };
    }

    const body = [
      `Nova mensagem pelo portfólio`,
      ``,
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      ``,
      `Mensagem:`,
      data.message,
    ].join("\r\n");

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Connection-Api-Key": connectionKey,
      },
      body: JSON.stringify({ raw: createRawEmail(`Portfólio · mensagem de ${data.name}`, body, data.email) }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Contact send failed [${response.status}]: ${errorBody}`);
      return { ok: false as const, error: "Não foi possível enviar agora. Tente pelo e-mail direto." };
    }

    return { ok: true as const };
  });
