import { Code2, Cloud, Workflow, Server, GitBranch, Activity, Clock, ShieldCheck, Zap } from 'lucide-react'

export const heroMetrics = [
  { v: '-80%', l: 'Tempo de SLA em esteiras automatizadas' },
  { v: '0 min', l: 'Downtime em releases com blue/green' },
  { v: '99,95%', l: 'Disponibilidade alvo das plataformas' },
]

export const pillars = [
  {
    tag: '50% · Software',
    title: 'Desenvolvimento de Software & Produtos Digitais',
    color: 'bg-primary',
    items: [
      { icon: Code2, t: 'Full Stack & APIs', d: 'Java, Spring Boot, Node.js, Go, Python, React e TypeScript com contratos de API versionados, testes automatizados e documentação OpenAPI.' },
      { icon: Workflow, t: 'Modernização de Legados & Integrações', d: 'Strangler pattern para monólitos, integrações com IdWall, Gov.BR, Serasa e meios de pagamento com idempotência e rastreabilidade.' },
      { icon: Zap, t: 'Hiperautomação de Regras de Negócio', d: 'Esteiras de crédito e processos orquestradas por motores de regras, filas e validações via API — menos operação manual, mais SLA.' },
    ],
  },
  {
    tag: '50% · Plataforma',
    title: 'Infraestrutura, Cloud & SRE',
    color: 'bg-sky',
    items: [
      { icon: Server, t: 'Infrastructure as Code', d: 'Terraform modular em Azure, AWS e GCP, com state remoto, policy-as-code e ambientes reproduzíveis em minutos.' },
      { icon: GitBranch, t: 'GitOps & CI/CD Avançado', d: 'GitHub Actions, Azure DevOps, AWS CodeSuite, ArgoCD e Helm sobre AKS/GKE. Deploys auditáveis, rollback em um commit.' },
      { icon: Activity, t: 'Observabilidade, FinOps & DR', d: 'SLOs com Prometheus e Grafana, otimização de custos em nuvem e planos de Disaster Recovery testados com RTO/RPO definidos.' },
    ],
  },
]

export const cases = [
    {
    badge: 'Híbrido · Software + Infra',
    title: 'Onboarding Digital e Validação Automatizada de Clientes',
    problem: 'O cadastro de novos clientes dependia de etapas manuais, consultas a múltiplos sistemas e validações descentralizadas, podendo levar até 4 horas úteis para ser concluído. O processo gerava atritos na jornada digital, aumentava o esforço operacional e dificultava a escalabilidade em períodos de alta demanda.',
    solution: 'Modernização do onboarding com uma arquitetura de microsserviços integrada a APIs externas para validação cadastral, análise de crédito e verificação de antecedentes. A jornada foi simplificada para poucos cliques, com orquestração automatizada das etapas, processamento eficiente e infraestrutura preparada para escalabilidade, observabilidade e alta disponibilidade.',
    metrics: [
      { v: '5 min', l: 'Tempo de cadastro por cliente (antes até 4h)' },
      { v: '-98%', l: 'Tempo de conclusão do onboarding' },
      { v: '100%', l: 'Fluxo digital com validações integradas' },
    ],
  },
  {
    badge: 'Infra/Rede + APIs',
    title: 'Rede Híbrida em Azure & Microsserviços de Alta Disponibilidade',
    problem: 'Data center on-premises com conectividade frágil à nuvem e APIs acopladas em um monólito; cada release exigia janela de manutenção.',
    solution: 'Hub-and-spoke em Azure com VPN/ExpressRoute, DNS privado e firewall centralizado em Terraform. Refatoração para microsserviços em AKS com blue/green, health checks e autoscaling.',
    metrics: [
      { v: '0', l: 'Minutos de downtime em releases' },
      { v: '99,95%', l: 'Disponibilidade das APIs' },
      { v: 'Multi-AZ', l: 'Resiliência de rede e compute' },
    ],
  },
]

export const models = [
  { n: '01', t: 'Projetos de Escopo Fechado', d: 'Entregas por sprints com escopo definido e banco de horas priorizável. Previsibilidade de prazo e custo.', b: ['Roadmap por sprint', 'Horas priorizáveis', 'Demo a cada ciclo'] },
  { n: '02', t: 'Squads Especializadas', d: 'Outsourcing híbrido com Devs, SRE e Tech Lead integrados ao seu time e aos seus rituais.', b: ['Dev + SRE + Tech Lead', 'Escala sob demanda', 'Gestão por OKRs'] },
  { n: '03', t: 'Assessment & Diagnóstico', d: 'Quick win de 2 a 4 semanas para mapear gargalos de arquitetura, segurança e FinOps.', b: ['Relatório executivo', 'Plano priorizado', 'Estimativa de economia'], highlight: true },
]

export const steps = [
  { icon: Clock, t: 'Discovery', d: 'Briefing e mapeamento' },
  { icon: ShieldCheck, t: 'Diagnóstico', d: 'Arquitetura, segurança, custos' },
  { icon: Code2, t: 'Execução', d: 'Sprints com demo contínua' },
  { icon: Cloud, t: 'Operação', d: 'SRE, SLOs e melhoria contínua' },
]

export const stack = [
  { c: 'Backend & APIs', i: ['Java', 'Spring Boot', 'Node.js', 'Go', 'Python', 'REST', 'Microsserviços'] },
  { c: 'Frontend', i: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { c: 'Cloud & Containers', i: ['Azure', 'GCP', 'AWS', 'Docker', 'Kubernetes (AKS/EKS/GKE)', 'Helm'] },
  { c: 'DevOps & IaC', i: ['Terraform', 'ArgoCD', 'GitHub Actions', 'Azure DevOps'] },
  { c: 'Observabilidade & Segurança', i: ['Prometheus', 'Grafana', 'External Secrets', 'DevSecOps'] },
]
