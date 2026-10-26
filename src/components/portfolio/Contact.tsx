import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactMessage } from "@/lib/contact.functions";

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const result = await send({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        },
      });
      if (result.ok) {
        setSent(true);
        form.reset();
        toast.success("Mensagem enviada! Já vou te responder por e-mail.");
      } else {
        toast.error(result.error ?? "Não foi possível enviar agora.");
      }
    } catch {
      toast.error("Confira os campos e tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contato" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
          08 — contato
        </p>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.05]">
          Vamos <span className="text-gradient">trocar uma ideia</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Curtiu algum projeto? Quer trocar uma ideia sobre dados, BI ou
          engenharia analítica? Me manda uma mensagem.
        </p>

        <form
          onSubmit={handleSubmit}
          className="text-left bg-card/60 border border-border rounded-2xl p-6 md:p-8 space-y-5 max-w-xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Nome
              </Label>
              <Input id="name" name="name" required maxLength={80} placeholder="Como te chamo?" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                E-mail
              </Label>
              <Input id="email" name="email" type="email" required maxLength={160} placeholder="voce@empresa.com" autoComplete="email" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              placeholder="Sobre o que você quer conversar?"
            />
          </div>

          <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <p className="text-xs text-muted-foreground">
              {sent ? "Mensagem recebida — obrigado!" : "Respondo por e-mail, sem pressa."}
            </p>
            <Button type="submit" disabled={sending} className="gap-2 bg-gradient-accent text-accent-foreground border-0 shadow-glow hover:scale-[1.02] transition-transform px-7 h-auto py-3.5 rounded-full">
              {sending ? <Loader2 aria-hidden="true" className="size-4 animate-spin" /> : <Send aria-hidden="true" className="size-4" />}
              {sending ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </div>
        </form>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:tonymiguel71@gmail.com"
            className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            tonymiguel71@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tony-miguel-silva-power-bi"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/tonymiguelsilva"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Tony Miguel da Silva — Portão, RS · Brasil
        </div>
      </div>
    </section>
  );
}
