import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const dist = resolve("dist");
const source = await readFile(join(dist, "index.html"), "utf8");
const origin = "https://tonymiguelsilva.github.io";

const pages = [
  {
    path: "/projetos/farol",
    title: "Projeto Farol — Databricks Lakehouse | Tony Miguel",
    description: "Torre de controle de projetos no Databricks com arquitetura Lakehouse, métricas governadas, dashboards AI/BI, Genie e aplicações analíticas.",
    type: "article",
    image: "farol",
    imageAlt: "Arquitetura do Projeto Farol no Databricks",
  },
  {
    path: "/projetos/arquitetura-local-dw",
    title: "Arquitetura Local de Data Warehouse | Tony Miguel",
    description: "Data Warehouse local com Python, Airflow, PostgreSQL, dbt e camadas Bronze, Silver e Gold para consumo analítico.",
    type: "article",
  },
  {
    path: "/projetos/cloud-gcp",
    title: "Cloud Data Engineering — GCP | Tony Miguel",
    description: "Pipeline de Engenharia de Dados na GCP com ingestão incremental, GCS, BigQuery, Airflow, dbt e testes de qualidade.",
    type: "article",
  },
  {
    path: "/projetos/dataclyra",
    title: "DataClyra — Analytics Platform | Tony Miguel",
    description: "Plataforma web de analytics com dashboards, filtros, qualidade, linhagem de dados e assistente analítico demonstrativo.",
    type: "article",
  },
];

const assets = await readdir(join(dist, "assets"));
const farolCover = assets.find((file) => /^cover-.*\.jpg$/.test(file));

function replaceMeta(html, selector, content) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`(<meta ${escapedSelector} content=")[^"]*("\\s*/>)`), `$1${content}$2`);
}

function renderPage(page) {
  const url = `${origin}${page.path}`;
  const image = page.image === "farol" && farolCover
    ? `${origin}/assets/${farolCover}`
    : `${origin}/og-image.jpg`;

  let html = source.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  html = replaceMeta(html, 'name="description"', page.description);
  html = replaceMeta(html, 'property="og:title"', page.title);
  html = replaceMeta(html, 'property="og:description"', page.description);
  html = replaceMeta(html, 'property="og:type"', page.type);
  html = replaceMeta(html, 'property="og:url"', url);
  html = replaceMeta(html, 'property="og:image"', image);
  html = replaceMeta(html, 'property="og:image:alt"', page.imageAlt ?? "Tony Miguel da Silva — Analytics & Data Engineer");
  html = replaceMeta(html, 'name="twitter:title"', page.title);
  html = replaceMeta(html, 'name="twitter:description"', page.description);
  html = replaceMeta(html, 'name="twitter:image"', image);
  return html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
}

for (const page of pages) {
  const directory = join(dist, page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), renderPage(page), "utf8");
}

await copyFile(join(dist, "index.html"), join(dist, "404.html"));

const urls = ["/", ...pages.map((page) => page.path)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(dist, "sitemap.xml"), sitemap, "utf8");
await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
