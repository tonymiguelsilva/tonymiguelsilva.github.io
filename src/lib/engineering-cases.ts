import localCoverUrl from '@/assets/projects/local-dw-architecture.jpg';
import cloudCoverUrl from '@/assets/projects/gcp-data-lake-cover.jpg';
import dataCoverUrl from '@/assets/projects/dataclyra-visao-geral.png';

const localCover = { url: localCoverUrl };
const cloudCover = { url: cloudCoverUrl };
const dataCover = { url: dataCoverUrl };

export type CaseSection = { label: string; title: string; paragraphs?: string[]; items?: { title: string; text: string }[]; flow?: string[]; note?: string };
export type EngineeringCase = { title: string; category: string; summary: string; image: string; imageAlt: string; repository: string; platform?: string; stack: string[]; sections: CaseSection[] };
export const localQuality = { tests: 14, pass: 14, warn: 0, error: 0 };
export const cloudValidation = { orders: 5000, orderItems: 15078, clients: 500, products: 100, tests: 20, pass: 20, warn: 0, error: 0, skip: 0, reconciledAmount: 110682385.35, difference: 0, models: 12, sources: 6 };

export const localCase: EngineeringCase = {
 title: 'Arquitetura Local de Data Warehouse', category: 'Engenharia de Dados / Data Warehouse / Analytics',
 summary: 'Arquitetura local de Data Warehouse com ingestão via API REST, orquestração com Airflow, armazenamento PostgreSQL e transformação com dbt nas camadas Bronze, Silver e Gold.',
 image: localCover.url, imageAlt: 'Diagrama original da arquitetura local de Data Warehouse', repository: 'https://github.com/tonymiguelsilva/projeto-arquitetura-local-dw',
 stack: ['Python', 'FastAPI', 'Apache Airflow', 'PostgreSQL', 'dbt Core', 'Docker', 'DBeaver', 'Power BI', 'Git'],
 sections: [
  { label: 'Visão geral', title: 'Uma arquitetura completa, em ambiente local.', paragraphs: ['O projeto aplica uma arquitetura de Data Warehouse local com Docker, Apache Airflow, PostgreSQL, dbt e uma API REST. A ingestão, a transformação e a validação formam uma base organizada para o consumo analítico.'] },
  { label: 'Arquitetura', title: 'Da API à camada analítica.', flow: ['API REST', 'Apache Airflow', 'PostgreSQL', 'dbt', 'Bronze', 'Silver', 'Gold', 'Power BI'], note: 'O dbt separa os ambientes de desenvolvimento e produção por targets. O Airflow executa as transformações no ambiente PROD.' },
  { label: 'Pipeline', title: 'Ingerir. Transformar. Validar.', flow: ['Extração', 'PostgreSQL', 'dbt run', 'dbt test'], paragraphs: ['A DAG dw_pipeline ingere clientes, produtos e vendas pela API REST e carrega os dados no PostgreSQL. Após a ingestão, o Airflow executa o dbt para transformação e validação.', 'A DAG possui retries, tratamento de falhas e notificações por e-mail.'] },
  { label: 'Modelagem', title: 'Três camadas, responsabilidades claras.', items: [
   { title: 'Bronze · preparação', text: 'stg_clientes, stg_produtos e stg_vendas.' },
   { title: 'Silver · modelo dimensional', text: 'dim_clientes, dim_produtos e fato_vendas.' },
   { title: 'Gold · consumo analítico', text: 'clientes_ativos, produtos_ativos, resumo_clientes, resumo_vendas, vendas_por_cliente e vendas_por_produto.' },
  ] },
  { label: 'Ambientes', title: 'Desenvolvimento e produção separados.', paragraphs: ['Os targets do dbt mantêm desenvolvimento e produção separados. A pipeline do Airflow executa o target prod; isso descreve a organização do ambiente local, não uma plataforma pública.'] },
  { label: 'Qualidade dos dados', title: 'Validação documentada no PROD.', items: [
   { title: `${localQuality.tests} testes executados`, text: `PASS=${localQuality.pass} · WARN=${localQuality.warn} · ERROR=${localQuality.error}` },
   { title: 'not_null e unique', text: 'Validações de preenchimento e unicidade para conferir a consistência dos dados transformados.' },
  ] },
  { label: 'Consumo analítico', title: 'Uma base central para explorar os dados.', items: [
   { title: 'PostgreSQL', text: 'Data Warehouse central que armazena as camadas do projeto.' },
   { title: 'DBeaver', text: 'Exploração dos dados e administração do banco.' },
   { title: 'Power BI', text: 'Conectado à camada dbt_prod_gold para consumo analítico.' },
  ] },
  { label: 'Execução', title: 'Do ambiente local à DAG.', items: [
   { title: 'Pré-requisitos', text: 'Docker Desktop, Git e Astro CLI.' },
   { title: 'Inicialização', text: 'Iniciar os serviços com astro dev start e executar a DAG dw_pipeline no Airflow.' },
   { title: 'Transformação e testes', text: 'Executar dbt run --target prod e dbt test --target prod para transformar e validar os dados.' },
  ] },
 ],
};

export const cloudCase: EngineeringCase = {
 title: 'Cloud Data Engineering — GCP', category: 'Engenharia de Dados em Nuvem',
 summary: 'Pipeline end-to-end de Engenharia de Dados em nuvem, da extração incremental em PostgreSQL à modelagem analítica no BigQuery, com GCS, Airflow, dbt e testes de qualidade.',
 image: cloudCover.url, imageAlt: 'Capa original do pipeline Cloud Data Engineering na GCP', repository: 'https://github.com/tonymiguelsilva/projeto-cloud-gcp-data-engineering',
 stack: ['Python', 'PostgreSQL 16', 'Google Cloud Storage', 'BigQuery', 'dbt Core', 'Apache Airflow', 'Docker', 'GCP', 'Open-Meteo', 'Parquet', 'Git', 'GitHub'],
 sections: [
  { label: 'Problema e objetivo', title: 'Do transacional ao analítico, na nuvem.', paragraphs: ['O projeto simula um ambiente corporativo de ingestão, transformação, qualidade e disponibilização de dados em nuvem. O fluxo parte de um banco transacional PostgreSQL e chega a um Data Warehouse analítico no BigQuery.'] },
  { label: 'Arquitetura', title: 'Extração incremental. Modelagem analítica.', flow: ['PostgreSQL OLTP', 'Python · extração incremental', 'Google Cloud Storage · Parquet', 'BigQuery Bronze', 'dbt Silver', 'dbt Gold', 'Consumo analítico / BI'], note: 'Apache Airflow orquestra as etapas, da extração às validações e notificações.' },
  { label: 'Pipeline e camadas', title: 'Da origem ao modelo dimensional.', items: [
   { title: 'Extração e armazenamento', text: 'Python, psycopg2, pandas e PyArrow realizam a extração incremental com watermark baseado em updated_at. Os arquivos Parquet brutos são armazenados no Google Cloud Storage.' },
   { title: 'Bronze', text: 'Dados próximos da origem: clientes, produtos, pedidos e itens_pedido.' },
   { title: 'Silver', text: 'Padronização, tratamento, tipagem e regras de transformação com dbt.' },
   { title: 'Gold', text: 'Modelo dimensional: fato_vendas, fato_metas, dim_clientes, dim_produtos, dim_calendario e kpi_mensal.' },
  ] },
  { label: 'Destaques técnicos', title: 'Escala e validação documentadas.', items: [
   { title: cloudValidation.orders.toLocaleString('pt-BR') + ' pedidos', text: cloudValidation.orderItems.toLocaleString('pt-BR') + ' itens de pedido.' },
   { title: cloudValidation.clients + ' clientes', text: cloudValidation.products + ' produtos.' },
   { title: cloudValidation.tests + ' testes aprovados', text: `${cloudValidation.pass} PASS · ${cloudValidation.warn} WARN · ${cloudValidation.error} ERROR · ${cloudValidation.skip} SKIP` },
   { title: cloudValidation.models + ' modelos dbt', text: `${cloudValidation.tests} testes e ${cloudValidation.sources} sources documentados.` },
  ], note: 'Volumes e resultados de validação técnica do projeto; não representam resultados financeiros de uma empresa real.' },
  { label: 'Data Quality e reconciliação', title: 'Integridade em cada etapa.', paragraphs: ['Testes not_null, unique e relationships se somam a testes customizados de quantidade positiva e reconciliação financeira. As validações conferem pedidos sem itens, itens órfãos, produtos inexistentes, pedidos com valor zero e integridade referencial.'], items: [
   { title: cloudValidation.reconciledAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), text: 'Valor reconciliado entre pedidos e itens na validação técnica.' },
   { title: cloudValidation.difference.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), text: 'Diferença na reconciliação financeira.' },
  ] },
  { label: 'Otimização e dados complementares', title: 'Organizar o acesso. Ampliar a análise.', items: [
   { title: 'Particionamento e clustering', text: 'gold.fato_vendas utiliza particionamento mensal por data_pedido e clustering por cliente_id e produto_id.' },
   { title: 'Open-Meteo', text: 'Ingestão de dados meteorológicos por API externa.' },
   { title: 'Metas na Gold', text: 'Dados de metas permitem comparar realizado, meta e desempenho mensal.' },
  ] },
  { label: 'Orquestração e observabilidade', title: 'pipeline_cloud, do início ao fim.', paragraphs: ['O Airflow coordena extração incremental, upload para GCS, carga Bronze, dados externos, metas, transformações dbt, validações e notificações de sucesso ou falha. O pipeline principal é pipeline_cloud.'] },
  { label: 'Execução', title: 'Um ambiente reproduzível, com configuração própria.', paragraphs: ['O desenvolvimento utiliza Docker e Astro CLI. A execução requer credenciais e serviços GCP configurados pelo próprio usuário. As instruções completas estão no repositório; nenhuma credencial ou informação sensível é exibida neste case.'] },
 ],
};

export const dataclyraCase: EngineeringCase = {
 title: 'DataClyra — Analytics Platform', category: 'Analytics / Produtos Analíticos / Engenharia de Dados',
 summary: 'Plataforma web de analytics para explorar indicadores comerciais e operacionais com dashboards, filtros, qualidade, linhagem de dados e recursos demonstrativos de apoio à análise.',
 image: dataCover.url, imageAlt: 'Captura real da visão geral da DataClyra com indicadores demonstrativos', repository: 'https://github.com/tonymiguelsilva/projeto-portal-analytics', platform: 'https://dataclyra-analytics.onrender.com/',
 stack: ['React 19', 'TypeScript', 'Vite', 'Recharts', 'Lucide React', 'Python 3', 'FastAPI', 'Pydantic', 'Uvicorn', 'CSV', 'Docker', 'ESLint', 'unittest'],
 sections: [
  { label: 'Visão geral', title: 'Métricas em uma experiência integrada.', paragraphs: ['A DataClyra é uma plataforma web responsiva para explorar indicadores comerciais e operacionais. Demonstra métricas de negócio com regras de cálculo explícitas, filtros consistentes e escopo regional por perfil Demo.', 'Visualizações, filtros, governança de dados e recursos de apoio à análise se conectam em um produto analítico demonstrativo, sem dados empresariais reais.'] },
  { label: 'Funcionalidades', title: 'Do indicador à exploração do recorte.', items: [
   { title: 'Painéis analíticos', text: 'Visão geral, comercial e operacional com KPIs, séries temporais e visualizações por dimensão.' },
   { title: 'Filtros globais', text: 'Período, região, canal e categoria mantêm um recorte consistente.' },
   { title: 'Exportação e consulta', text: 'Exportação em CSV dos registros do recorte ativo e consulta pontual de pedido pelo identificador.' },
   { title: 'Catálogo e linhagem', text: 'Campos, definições de métricas e página de linhagem dos dados.' },
   { title: 'Qualidade e status', text: 'Central de Qualidade dos Dados e status técnico do sistema para perfis técnicos.' },
   { title: 'Apoio à análise', text: 'Insights automatizados e assistente IA demonstrativo com respostas determinísticas, respeitando os filtros ativos.' },
   { title: 'Sessão Demo', text: 'Perfis demonstrativos com escopo regional, sem autenticação de produção.' },
   { title: 'Experiência visual', text: 'Tema claro e escuro com interface responsiva.' },
  ] },
  { label: 'Arquitetura', title: 'Uma interface. Serviços analíticos. Dados locais.', flow: ['Navegador', 'Interface React', 'Serviços analíticos FastAPI', 'CSV local demonstrativo'], paragraphs: ['Em desenvolvimento, Vite encaminha /api e /health para o FastAPI. Em produção, o FastAPI entrega a interface compilada e atende às rotas de API.'] },
  { label: 'Tecnologia e qualidade', title: 'Uma stack de produto, de ponta a ponta.', items: [
   { title: 'Frontend', text: 'React 19, TypeScript, Vite, Recharts e Lucide React.' },
   { title: 'Backend', text: 'Python 3, FastAPI, Pydantic e Uvicorn.' },
   { title: 'Dados e empacotamento', text: 'CSV demonstrativo local e Docker com build multiestágio.' },
   { title: 'Qualidade de software', text: 'ESLint, TypeScript e unittest da biblioteca padrão.' },
  ] },
  { label: 'Governança e limites', title: 'Demonstrativo por definição.', items: [
   { title: 'Dados fictícios', text: 'Usa exclusivamente data/demo/orders.csv, sem dados pessoais ou sensíveis.' },
   { title: 'Sem integração operacional', text: 'Não há atualização automática, persistência histórica ou integração operacional com um warehouse. A integração BigQuery não está implementada neste ambiente.' },
   { title: 'Assistente determinístico', text: 'Não chama modelos externos nem exige API paga. As respostas são demonstrativas e respeitam os filtros ativos.' },
   { title: 'Limites da sessão Demo', text: 'A sessão é demonstrativa e não constitui mecanismo de autenticação para produção.' },
  ] },
  { label: 'Execução e publicação', title: 'Localmente ou como serviço Docker único.', paragraphs: ['O projeto pode ser executado localmente com Node.js, Python e, opcionalmente, Docker. A configuração documentada prevê publicação como um serviço Docker único no Render.', 'O acesso à plataforma preserva o endereço já cadastrado no portfólio; ele não representa garantia de disponibilidade permanente.'] },
 ],
};
