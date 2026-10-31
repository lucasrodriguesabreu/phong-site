import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  HardDrive,
  Headphones,
  Lock,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  Users,
  Wrench,
} from 'lucide-react'

export const heroMetrics = [
  { v: '10+', l: 'anos de atuação no mercado' },
  { v: '24/7', l: 'monitoramento e suporte disponível' },
  { v: 'SLA', l: 'acordado e com resposta clara' },
  { v: '99,9%', l: 'disponibilidade em operações críticas' },
]

export const services = [
  {
    id: 'help-desk',
    icon: Headphones,
    title: 'Help desk e suporte de TI para empresas',
    problem: 'Quando a empresa não tem time de TI próprio, pequenos problemas viram perda de produtividade, atrasos e fricção entre áreas.',
    solution: 'A Phong assume o suporte técnico em regime de outsourcing com atendimento estruturado, triagem, diagnóstico e resolução com prazo e canais definidos.',
    result: 'Seu time trabalha sem parar, com menos interrupções e com respostas mais rápidas em incidentes do dia a dia.',
    highlights: ['Atendimento por telefone, WhatsApp e e-mail', 'Prioridade por criticidade', 'Gestão de chamados e SLA'],
  },
  {
    id: 'infraestrutura',
    icon: HardDrive,
    title: 'Gestão de infraestrutura e redes',
    problem: 'Servidores, redes e sistemas desatualizados geram lentidão, falhas e risco de indisponibilidade.',
    solution: 'Monitoramos a infraestrutura, ajustamos a arquitetura, prevenimos falhas e organizamos a operação com foco em estabilidade e custo.',
    result: 'A operação fica mais previsível, segura e preparada para crescer sem dor de cabeça.',
    highlights: ['Monitoramento proativo', 'Documentação e governança', 'Redução de falhas e indisponibilidade'],
  },
  {
    id: 'seguranca',
    icon: Lock,
    title: 'Segurança da informação e backup',
    problem: 'Sem políticas claras e backups testados, a empresa fica exposta a perda de dados, ransomware e acidentes internos.',
    solution: 'Implementamos controles e processos de segurança, proteção de acesso, backup e recuperação com testes regulares e revisão de riscos.',
    result: 'Você reduz vulnerabilidades, melhora a resiliência e aumenta a confiança da operação.',
    highlights: ['Backup e recuperação', 'Acesso e permissões', 'Risco e conformidade'],
  },
  {
    id: 'licencas',
    icon: BriefcaseBusiness,
    title: 'Licenciamento e gestão de ativos de tecnologia',
    problem: 'Licenças desorganizadas geram custos invisíveis, riscos de compliance e dificuldades de planejamento de tecnologia.',
    solution: 'Mapeamos o ambiente, centralizamos o inventário e otimizamos a compra e utilização de software e ferramentas.',
    result: 'A empresa reduz desperdício, melhora o controle e toma decisões com base em dados reais.',
    highlights: ['Inventário de software', 'Negociação e otimização', 'Controle de ativos e custos'],
  },
]

export const trustStats = [
  { value: '10+', label: 'anos de mercado' },
  { value: '3.500+', label: 'chamados resolvidos' },
  { value: '< 30 min', label: 'tempo médio de resposta' },
  { value: '24/7', label: 'monitoramento e suporte' },
]

export const testimonials = [
  {
    quote: 'A Phong trouxe organização para a nossa operação de TI. O suporte ficou mais rápido e a equipe passou a ter previsibilidade para crescer sem depender de improvisos.',
    name: 'Diretora administrativa',
    company: 'Empresa de serviços',
  },
  {
    quote: 'Antes tínhamos muitos incidentes e pouca visibilidade. Hoje temos processo, SLA e um time que entende a operação da empresa.',
    name: 'CEO',
    company: 'Negócio de varejo',
  },
]

export const partners = ['Microsoft', 'Fortinet', 'Cisco', 'Dell', 'VMware', 'Sophos']

export const cases = [
  {
    badge: 'Suporte operacional',
    title: 'Empresa com TI instável e sem time interno',
    problem: 'A operação crescia, mas a estrutura de tecnologia era reativa, com chamados sem organização e altos tempos de resposta.',
    solution: 'A Phong estruturou o suporte com canais, prioridades, monitoramento e rotina clara de atendimento.',
    metrics: [
      { v: '60%', l: 'redução de incidências críticas' },
      { v: '24h', l: 'organização do processo de atendimento' },
      { v: 'SLA', l: 'definido por criticidade' },
    ],
  },
  {
    badge: 'Infraestrutura + segurança',
    title: 'Ambiente com riscos e baixa visibilidade',
    problem: 'A empresa não conseguia mapear rotinas, backups e permissões, o que deixava a operação vulnerável e sem governança.',
    solution: 'Realizamos diagnóstico, reorganizamos o ambiente e implementamos processos de monitoramento, backup e segurança.',
    metrics: [
      { v: 'mais', l: 'visibilidade do ambiente' },
      { v: '0', l: 'dependência de atendimento improvisado' },
      { v: 'proativo', l: 'monitoramento e prevenção' },
    ],
  },
]

export const steps = [
  { icon: Smartphone, t: 'Diagnóstico', d: 'Entendemos o cenário atual, riscos, dores e objetivos da operação.' },
  { icon: Sparkles, t: 'Proposta', d: 'Definimos escopo, SLA, modelo de suporte e prioridades com clareza.' },
  { icon: Wrench, t: 'Implantação', d: 'Ajustamos processos, acessos, monitoramento e evolução do ambiente.' },
  { icon: ShieldCheck, t: 'Suporte contínuo', d: 'Acompanhamos a operação com gestão, relatórios e melhoria constante.' },
]

export const blogTopics = [
  'Checklist: 10 riscos de TI que pequenas empresas ignoram',
  'LGPD e segurança da informação: o que empresas deveriam revisar agora',
  'Backup realista: como garantir recuperação em caso de ransomware',
  'Outsourcing de TI vs. equipe interna: quando faz sentido migrar',
  'SLA de suporte: como medir tempo de resposta e resolução',
  'Infraestrutura estável: sinais de que sua empresa precisa de ajuda especializada',
  'Custo de tecnologia: como reduzir desperdício sem perder performance',
  'Quando migrar para nuvem e quais benefícios reais ela entrega',
  'Gestão de licenças: como evitar gastos sem controle',
  'Como criar uma política de segurança para empresas de 20 a 200 funcionários',
]

export const cityPages = [
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Curitiba',
  'Porto Alegre',
  'Campinas',
  'Florianópolis',
  'Salvador',
]

export const featureHighlights = [
  { icon: Users, text: 'Atendimento para empresas com 20 a 200 funcionários' },
  { icon: Clock3, text: 'Tempo de resposta e SLA definidos por criticidade' },
  { icon: BadgeCheck, text: 'Processos claros e contrato com manutenção operacional' },
  { icon: Activity, text: 'Suporte preventivo e melhoria contínua de infraestrutura' },
]

export const stack = [
  { c: 'Suporte e operação', i: ['Help desk', 'Monitoramento', 'Gestão de incidentes', 'SLA'] },
  { c: 'Infraestrutura', i: ['Servidores', 'Rede', 'Virtualização', 'Cloud'] },
  { c: 'Segurança', i: ['Backup', 'Antivírus', 'Controle de acesso', 'LGPD'] },
  { c: 'Planejamento', i: ['Diagnóstico', 'Roadmap', 'Licenciamento', 'Governança'] },
]

export const quickActions = [
  'Diagnóstico inicial sem compromisso',
  'Suporte com SLA',
  'Time especializado sem custos fixos de contratação',
]

export const arrowIcon = ArrowRight
export const checkIcon = CheckCircle2
export const primaryCheck = CheckCircle2
export const accentIcon = TimerReset
export const buildingIcon = Building2
