import {
  Activity,
  Bot,
  Cloud,
  Code2,
  Compass,
  Database,
  FlaskConical,
  GitBranch,
  Layers,
  Lock,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

export const quickActions = [
  'Time sênior integrado ao seu',
  'Sem fidelidade abusiva',
  'Demo a cada sprint',
]

export const heroMetrics = [
  { v: '3 frentes', l: 'Squads, IA aplicada e infraestrutura em um só parceiro' },
  { v: '3 nuvens', l: 'AWS, Azure e GCP com Terraform e GitOps' },
  { v: '2–4 sem', l: 'Assessment para mapear gargalos de arquitetura, segurança e FinOps' },
  { v: 'Sprint', l: 'Entrega e demonstração contínua, sem caixa-preta' },
]

export const fronts = [
  {
    id: 'squads',
    icon: Users,
    title: 'Squads e engenheiros alocados',
    problem: 'Contratar, reter e gerir um time sênior é lento e caro, e o roadmap não espera.',
    solution: 'Devs, SRE e Tech Lead integrados aos seus rituais, com escala sob demanda e gestão por objetivos.',
    result: 'Capacidade de entrega ampliada rapidamente, com custo menor que montar o time internamente.',
  },
  {
    id: 'ia',
    icon: Bot,
    title: 'IA aplicada ao negócio',
    problem: 'Pilotos de IA que nunca chegam à produção e agentes sem governança.',
    solution: 'Discovery de casos de uso, agentes e automações integrados aos seus sistemas, com revisão humana e rastreabilidade.',
    result: 'IA em produção com objetivo mensurável, não experimento eterno.',
  },
  {
    id: 'infra',
    icon: Server,
    title: 'Infraestrutura, cloud e segurança',
    problem: 'Ambientes frágeis, releases com janela de manutenção, custo de nuvem sem controle e risco de indisponibilidade.',
    solution: 'Cloud como código, CI/CD, observabilidade, FinOps, backup e disaster recovery operados por especialistas.',
    result: 'Plataforma estável, auditável e preparada para crescer.',
  },
]

export const services = [
  {
    id: 'infra-cloud',
    icon: Cloud,
    tag: 'Infraestrutura',
    title: 'Cloud, plataforma e SRE',
    items: [
      { icon: Server, t: 'Infrastructure as Code', d: 'Terraform modular em AWS, Azure e GCP, com state remoto, policy-as-code e ambientes reproduzíveis em minutos.' },
      { icon: GitBranch, t: 'GitOps e CI/CD', d: 'GitHub Actions, Azure DevOps, ArgoCD e Helm sobre Kubernetes. Deploys auditáveis e rollback em um commit.' },
      { icon: Activity, t: 'Observabilidade, FinOps e DR', d: 'SLOs com Prometheus e Grafana, otimização de custos em nuvem e planos de disaster recovery testados com RTO/RPO definidos.' },
      { icon: Lock, t: 'Segurança e backup', d: 'DevSecOps, gestão de segredos e acessos, backup com restauração testada e revisão contínua de riscos.' },
    ],
  },
  {
    id: 'ia-dados',
    icon: Bot,
    tag: 'IA e automação',
    title: 'IA, dados e automação de processos',
    items: [
      { icon: Search, t: 'Discovery de IA', d: 'Mapeamos onde IA gera retorno real no seu negócio e priorizamos por impacto e esforço.' },
      { icon: Bot, t: 'Agentes e assistentes', d: 'Agentes conectados aos seus sistemas e dados, com governança, revisão humana quando necessário e trilha de auditoria.' },
      { icon: Zap, t: 'Hiperautomação', d: 'Processos e regras de negócio orquestrados por filas, APIs e motores de regras, com menos operação manual.' },
      { icon: Database, t: 'Dados e integrações', d: 'Pipelines e integrações via API com idempotência e rastreabilidade para alimentar decisões e modelos.' },
    ],
  },
  {
    id: 'engenharia',
    icon: Code2,
    tag: 'Engenharia',
    title: 'Software e produtos digitais',
    items: [
      { icon: Code2, t: 'Full stack e APIs', d: 'Java, Spring Boot, Node.js, Go, Python, React e TypeScript, com contratos de API versionados, testes automatizados e documentação OpenAPI.' },
      { icon: Workflow, t: 'Modernização de legados', d: 'Strangler pattern para monólitos e integrações com serviços externos, sem parar a operação.' },
      { icon: Layers, t: 'Produtos digitais', d: 'Do MVP à escala, com entregas por sprint e demonstração contínua.' },
    ],
  },
]

export const models = [
  {
    n: '01',
    t: 'Engenheiros alocados',
    d: 'Profissionais sêniores integrados ao seu time, sob a sua gestão.',
    when: 'Você já tem o roadmap e precisa de capacidade rápida.',
    b: ['Perfis de dev, SRE e dados', 'Escala sob demanda', 'Sem custo fixo de contratação'],
  },
  {
    n: '02',
    t: 'Squad especializado',
    d: 'Dev, SRE e Tech Lead trabalhando juntos, integrados aos seus rituais.',
    when: 'Você precisa de um time completo, com liderança técnica.',
    b: ['Dev + SRE + Tech Lead', 'Gestão por OKRs', 'Demo a cada sprint'],
    highlight: true,
  },
  {
    n: '03',
    t: 'Projeto de escopo fechado',
    d: 'Entregas por sprints com escopo definido e banco de horas priorizável.',
    when: 'Você quer previsibilidade de prazo e custo.',
    b: ['Roadmap por sprint', 'Horas priorizáveis', 'Demo a cada ciclo'],
  },
  {
    n: '04',
    t: 'Assessment e diagnóstico',
    d: 'Quick win de 2 a 4 semanas para mapear gargalos de arquitetura, segurança, IA e FinOps.',
    when: 'Você quer um ponto de partida claro antes de decidir.',
    b: ['Relatório executivo', 'Plano priorizado', 'Estimativa de economia'],
  },
]

export const lab = {
  intro: 'Antes de comprometer um time inteiro, validamos a ideia. O Phong Lab transforma hipóteses de negócio e tecnologias emergentes em protótipos, PoCs e MVPs que você pode testar em semanas.',
  items: [
    { icon: FlaskConical, t: 'PoCs de IA', d: 'Provamos com dados reais se um caso de uso de IA funciona antes de investir em escala.' },
    { icon: Rocket, t: 'MVPs rápidos', d: 'Primeira versão funcional para validar com usuários, com arquitetura que pode evoluir.' },
    { icon: Compass, t: 'Exploração de tecnologia', d: 'Avaliamos novas ferramentas, modelos e arquiteturas para o seu contexto, com recomendação objetiva.' },
  ],
  steps: ['Hipótese', 'Protótipo', 'Teste com dados reais', 'Decisão: escalar ou parar'],
}

export const steps = [
  { icon: Search, t: 'Diagnóstico', d: 'Briefing, mapeamento de arquitetura, segurança, custos e oportunidades de IA.', exit: 'Saída: plano priorizado e estimativa.' },
  { icon: FlaskConical, t: 'Piloto', d: 'Primeira entrega em produção, ou PoC no Lab, com escopo e métrica combinados.', exit: 'Saída: se o resultado não vier, o piloto para.' },
  { icon: Layers, t: 'Escala', d: 'Sprints com demonstração contínua e ampliação do time conforme a demanda.', exit: 'Saída: entrega validada a cada ciclo.' },
  { icon: ShieldCheck, t: 'Operação', d: 'SRE, SLOs, monitoramento e melhoria contínua da plataforma.', exit: 'Saída: indicadores acompanhados.' },
]

export const cases = [
  {
    badge: 'Software + infraestrutura',
    title: 'Onboarding digital e validação automatizada de clientes',
    problem: 'O cadastro dependia de etapas manuais e consultas a vários sistemas, podendo levar até 4 horas úteis e dificultando a escala em picos de demanda.',
    solution: 'Microsserviços integrados a APIs externas para validação cadastral, análise de crédito e antecedentes, com orquestração automatizada, observabilidade e alta disponibilidade.',
    metrics: [
      { v: '5 min', l: 'Tempo de cadastro (antes até 4h)' },
      { v: '-98%', l: 'Tempo de conclusão do onboarding' },
      { v: '100%', l: 'Fluxo digital com validações integradas' },
    ],
  },
  {
    badge: 'Infraestrutura + APIs',
    title: 'Rede híbrida em Azure e microsserviços de alta disponibilidade',
    problem: 'Data center on-premises com conectividade frágil à nuvem e APIs acopladas em um monólito; cada release exigia janela de manutenção.',
    solution: 'Hub-and-spoke em Azure com VPN/ExpressRoute, DNS privado e firewall centralizado via Terraform. Refatoração para microsserviços em AKS com blue/green, health checks e autoscaling.',
    metrics: [
      { v: '0', l: 'Minutos de downtime em releases' },
      { v: '99,95%', l: 'Disponibilidade das APIs' },
      { v: 'Multi-AZ', l: 'Resiliência de rede e compute' },
    ],
  },
]

export const stack = [
  { c: 'Cloud e containers', i: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes (EKS/AKS/GKE)', 'Helm'] },
  { c: 'DevOps e IaC', i: ['Terraform', 'ArgoCD', 'GitHub Actions', 'Azure DevOps'] },
  { c: 'Observabilidade e segurança', i: ['Prometheus', 'Grafana', 'External Secrets', 'DevSecOps', 'Backup e DR'] },
  { c: 'IA e dados', i: ['LLMs e agentes', 'RAG', 'Automação de processos', 'Python', 'Pipelines de dados'] },
  { c: 'Backend e APIs', i: ['Java', 'Spring Boot', 'Node.js', 'Go', 'Python', 'REST', 'Microsserviços'] },
  { c: 'Frontend', i: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
]

export const needOptions = [
  'Squad ou engenheiros alocados',
  'IA e automação',
  'Infraestrutura, cloud e segurança',
  'Projeto de software',
  'Ainda não sei',
]
