export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tags: string[]
  url?: string
}

export interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  highlight?: boolean
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export const personal = {
  name: 'Guilherme Bertanha',
  title: 'Engenheiro Mecatrônico',
  tagline: 'Hardware, firmware e IA — do sensor à decisão.',
  about:
    'Estudante de Engenharia Mecatrônica na UFU com foco em sistemas embarcados, robótica e inteligência artificial. Presidente do EDROM, engenheiro de P&D na Terasite Tecnologia e desenvolvedor de agentes autônomos com Claude e OpenAI.',
  location: 'Uberlândia, MG, Brasil',
  email: 'guilhermebertanha0@gmail.com',
  github: 'https://github.com/guibertanha',
  linkedin: 'https://linkedin.com/in/guilhermebertanhaconstante',
}

export const experiences: Experience[] = [
  {
    company: 'EDROM — Equipe de Robótica da UFU',
    role: 'Presidente & Engenheiro de Software',
    period: '2023 — presente',
    location: 'Uberlândia, MG',
    description: [
      'Liderança multidisciplinar de equipe de robótica humanoide para a RoboCup / CBR 2025.',
      'Desenvolvimento de controle de servos, visão computacional e integração de sensores para o robô Áurea.',
      'Arquitetura do sistema em ROS2 Humble com simulação no Webots e deploy via Docker.',
    ],
    tags: ['C++', 'ROS2', 'Python', 'Docker', 'Webots', 'Visão Computacional'],
    url: 'https://github.com/edromufu',
  },
  {
    company: 'Terasite Tecnologia',
    role: 'Engenheiro de P&D — Firmware Embarcado',
    period: '2024 — presente',
    location: 'Uberlândia, MG',
    description: [
      'Desenvolvimento do firmware do gateway IoT industrial Frotall (FRITG01LTE) para máquinas pesadas.',
      'Implementação de comunicação mesh BLE com segurança HMAC, criptografia AES dinâmica e autenticação por token.',
      'Conectividade multi-protocolo: LTE/GPRS, Wi-Fi, ESP-NOW, CAN bus e OTA updates.',
      'Validação de antenas RF com bancada de testes automatizada, pipeline de análise em Python e relatórios HTML automáticos.',
    ],
    tags: ['C++', 'ESP32', 'FreeRTOS', 'BLE', 'CAN Bus', 'LTE', 'Python', 'ESP-NOW'],
  },
  {
    company: 'Projetos Autônomos',
    role: 'Desenvolvedor de Agentes de IA',
    period: '2024 — presente',
    location: 'Remote',
    description: [
      'Criação de agentes autônomos e ferramentas de automação utilizando Claude API e OpenAI.',
      'Integração de LLMs com sistemas de hardware e pipelines de dados industriais.',
    ],
    tags: ['Claude API', 'OpenAI', 'Python', 'TypeScript', 'Automação'],
  },
]

export const projects: Project[] = [
  {
    name: 'Frotall Firmware (FRITG01LTE)',
    description:
      'Gateway IoT industrial para máquinas pesadas. Mesh BLE, CAN bus, LTE/GPRS, AES dinâmico, horômetro virtual, OTA via rede mesh. Mais de 30 releases em produção.',
    tags: ['C++', 'ESP32', 'FreeRTOS', 'BLE', 'CAN Bus', 'LTE'],
    highlight: true,
  },
  {
    name: 'EDROM — Robô Áurea',
    description:
      'Sistema completo de robô humanoide para a RoboCup/CBR 2025. Controle cinemático de servos, visão computacional, localização e máquina de estados comportamental em ROS2.',
    tags: ['C++', 'ROS2', 'Python', 'Docker', 'Webots'],
    repo: 'https://github.com/edromufu/edrom_main',
    highlight: true,
  },
  {
    name: 'Validação de Antenas RF — Terasite',
    description:
      'Firmware de bancada para teste de 5 antenas externas do gateway IoT. State machine com 3 perfis (BURN, WALK, CLOCK), ciclos TCP/ping, scoring normalizado e relatório HTML automático.',
    tags: ['C++', 'Python', 'HTML', 'Análise de Dados'],
    repo: 'https://github.com/guibertanha/estagio-terasite',
  },
  {
    name: 'RF Field Analysis',
    description:
      'Pipeline de análise exploratória de dados de campo para validação de antenas Wi-Fi em condições reais — vibração, interferência EM e flutuação de tensão em máquinas pesadas.',
    tags: ['Python', 'Jupyter', 'Pandas', 'EDA'],
    repo: 'https://github.com/guibertanha/rf-field-analysis',
  },
  {
    name: 'firmware-e-poeira',
    description:
      'Jogo de simulação browser desenvolvido em React 19 com TypeScript, Zustand para estado global e Framer Motion para animações.',
    tags: ['React 19', 'TypeScript', 'Zustand', 'Framer Motion'],
    repo: 'https://github.com/guibertanha/firmware-e-poeira',
  },
  {
    name: 'Data Science Study',
    description:
      'Pipeline de ciência de dados cobrindo limpeza de dados, análise exploratória e modelos preditivos de regressão.',
    tags: ['Python', 'Jupyter', 'Scikit-learn', 'EDA'],
    repo: 'https://github.com/guibertanha/data-science-study',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Embarcado & IoT',
    skills: ['C++', 'C', 'ESP32', 'Arduino', 'FreeRTOS', 'BLE', 'ESP-NOW', 'CAN Bus', 'LTE/GPRS'],
  },
  {
    label: 'Robótica',
    skills: ['ROS2 Humble', 'Docker', 'Webots', 'Visão Computacional', 'Cinemática'],
  },
  {
    label: 'Software & Dados',
    skills: ['Python', 'MATLAB', 'Jupyter', 'Pandas', 'Scikit-learn', 'Git', 'Linux'],
  },
  {
    label: 'Web & Interfaces',
    skills: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Zustand', 'Framer Motion'],
  },
  {
    label: 'IA & Automação',
    skills: ['Claude API', 'OpenAI API', 'Agentes Autônomos'],
  },
  {
    label: 'CAD & Ferramentas',
    skills: ['SolidWorks', 'PlatformIO', 'Git', 'VSCode'],
  },
]
