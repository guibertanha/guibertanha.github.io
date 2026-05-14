# Prompt para Claude Design — Portfolio Guilherme Bertanha

## Contexto

Crie o design visual completo de um site de portfólio profissional para **Guilherme Bertanha**, estudante de Engenharia Mecatrônica na UFU, com foco em sistemas embarcados, robótica e IA. O projeto já tem a estrutura React + TypeScript + Tailwind CSS montada — você precisa criar o CSS/estilo e os componentes visuais.

---

## Referência de Design

Site de referência: https://pedroh-peres.github.io

**Estilo desejado:**
- Dark mode por padrão (sem toggle light/dark)
- Minimalista, foco em tipografia e espaçamento
- Layout de coluna central estreita (max ~700-800px), centralizada
- Sensação de "terminal/engenheiro" mas elegante — não gamificado
- Sem imagens, sem fotos — só texto e ícones SVG simples
- Scroll suave entre seções, sem transições de página
- Fonte principal: Inter (já carregada no HTML)
- Fonte mono para tags/código: JetBrains Mono (já carregada)

**Paleta de cores:**
- Background: `#0a0a0f` (quase preto, levemente azulado)
- Surface/card: `#111118`
- Border: `#1e1e2e`
- Texto primário: `#e2e8f0`
- Texto secundário: `#64748b`
- Accent: `#6366f1` (indigo) — ou verde `#10b981` se preferir algo mais "embedded/terminal"
- Tags: background `#1e1e2e`, texto accent em mono

---

## Estrutura do Site (Single Page)

### 1. `<nav>` — Navegação fixa no topo
- Largura total da tela, fundo semi-transparente com blur (`backdrop-blur`)
- Lado esquerdo: nome "Guilherme Bertanha" (link para #about)
- Lado direito: links Experiência | Projetos | Skills | Contato
- Altura ~56px, borda inferior sutil (`border-bottom: 1px solid #1e1e2e`)
- Em mobile: hamburger menu ou links horizontais menores

### 2. `<section id="about">` — Hero
- Grande padding-top (100px) para compensar a nav fixa
- Nome em destaque: `font-size: 48-56px`, `font-weight: 500`, sem serifas
- Abaixo do nome: título "Engenheiro Mecatrônico" em cor accent, menor
- Tagline em itálico ou peso leve: *"Hardware, firmware e IA — do sensor à decisão."*
- Parágrafo de bio com texto secundário
- Linha de links sociais: [GitHub] [LinkedIn] [Email] — como botões/chips discretos com ícone SVG inline
- Divisor sutil antes da próxima seção

### 3. `<section id="experience">` — Experiência
- Título de seção pequeno, maiúsculo, espaçado: `EXPERIÊNCIA`
- Para cada experiência, um card/linha:
  - Header: cargo (negrito) + empresa (accent, com link se disponível) + período (mono, direita)
  - Lista de bullets com as descrições
  - Tags horizontais no final (mono, pill style, accent border)
- Separador entre cards
- **Dados:**
  1. **Presidente & Engenheiro de Software** @ EDROM — Equipe de Robótica da UFU (2023 — presente)
     - Liderança multidisciplinar de equipe de robótica humanoide para a RoboCup / CBR 2025.
     - Desenvolvimento de controle de servos, visão computacional e integração de sensores para o robô Áurea.
     - Arquitetura do sistema em ROS2 Humble com simulação no Webots e deploy via Docker.
     - Tags: C++, ROS2, Python, Docker, Webots, Visão Computacional
  2. **Engenheiro de P&D — Firmware Embarcado** @ Terasite Tecnologia (2024 — presente)
     - Desenvolvimento do firmware do gateway IoT industrial Frotall (FRITG01LTE) para máquinas pesadas.
     - Implementação de comunicação mesh BLE com segurança HMAC, criptografia AES dinâmica e autenticação por token.
     - Conectividade multi-protocolo: LTE/GPRS, Wi-Fi, ESP-NOW, CAN bus e OTA updates.
     - Validação de antenas RF com bancada automatizada, pipeline Python e relatórios HTML automáticos.
     - Tags: C++, ESP32, FreeRTOS, BLE, CAN Bus, LTE, Python, ESP-NOW
  3. **Desenvolvedor de Agentes de IA** @ Projetos Autônomos (2024 — presente)
     - Criação de agentes autônomos e ferramentas de automação utilizando Claude API e OpenAI.
     - Integração de LLMs com sistemas de hardware e pipelines de dados industriais.
     - Tags: Claude API, OpenAI, Python, TypeScript, Automação

### 4. `<section id="projects">` — Projetos
- Título de seção: `PROJETOS`
- Grid de cards (2 colunas em desktop, 1 em mobile)
- Cards com borda, fundo levemente diferente do background
- Cards "highlight" (2 projetos em destaque) podem ter borda accent colorida
- Cada card: nome em negrito, descrição em texto secundário, tags, link GitHub se tiver
- **Projetos:**
  1. **Frotall Firmware (FRITG01LTE)** ★ destaque
     - Gateway IoT industrial para máquinas pesadas. Mesh BLE, CAN bus, LTE/GPRS, AES dinâmico, horômetro virtual, OTA via rede mesh. Mais de 30 releases em produção.
     - Tags: C++, ESP32, FreeRTOS, BLE, CAN Bus, LTE
  2. **EDROM — Robô Áurea** ★ destaque
     - Sistema completo de robô humanoide para a RoboCup/CBR 2025. Controle cinemático de servos, visão computacional, localização e máquina de estados comportamental em ROS2.
     - Tags: C++, ROS2, Python, Docker, Webots | Link: https://github.com/edromufu/edrom_main
  3. **Validação de Antenas RF — Terasite**
     - Firmware de bancada para teste de 5 antenas externas. State machine com 3 perfis, scoring normalizado e relatório HTML automático.
     - Tags: C++, Python, HTML, Análise de Dados | Link: https://github.com/guibertanha/estagio-terasite
  4. **RF Field Analysis**
     - Pipeline de análise exploratória de dados de campo para validação de antenas Wi-Fi em condições reais.
     - Tags: Python, Jupyter, Pandas, EDA | Link: https://github.com/guibertanha/rf-field-analysis
  5. **firmware-e-poeira**
     - Jogo de simulação browser com React 19, TypeScript, Zustand e Framer Motion.
     - Tags: React 19, TypeScript, Zustand, Framer Motion | Link: https://github.com/guibertanha/firmware-e-poeira
  6. **Data Science Study**
     - Pipeline de ciência de dados: limpeza, EDA e modelos preditivos de regressão.
     - Tags: Python, Jupyter, Scikit-learn, EDA | Link: https://github.com/guibertanha/data-science-study

### 5. `<section id="skills">` — Skills
- Título de seção: `SKILLS`
- Grid de grupos (2-3 colunas em desktop)
- Cada grupo tem label em maiúsculo pequeno e pills/lista de skills em mono
- **Grupos:**
  - **Embarcado & IoT**: C++, C, ESP32, Arduino, FreeRTOS, BLE, ESP-NOW, CAN Bus, LTE/GPRS
  - **Robótica**: ROS2 Humble, Docker, Webots, Visão Computacional, Cinemática
  - **Software & Dados**: Python, MATLAB, Jupyter, Pandas, Scikit-learn, Git, Linux
  - **Web & Interfaces**: TypeScript, React, Tailwind CSS, Vite, Zustand, Framer Motion
  - **IA & Automação**: Claude API, OpenAI API, Agentes Autônomos
  - **CAD & Ferramentas**: SolidWorks, PlatformIO, Git, VSCode

### 6. `<footer>` — Rodapé
- Simples, centralizado
- Nome + localização: "Guilherme Bertanha · Uberlândia, MG, Brasil"
- Links: GitHub | LinkedIn | Email
- Ano: © 2025

---

## Código Base

O projeto usa:
- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- Fontes Inter e JetBrains Mono já carregadas no `index.html`
- Build: `npm run build` → `dist/`
- Deploy: GitHub Pages via GitHub Actions

### Estrutura de arquivos existente:
```
src/
  data/index.ts          ← todos os dados já preenchidos com tipagem TypeScript
  components/
    Nav.tsx              ← estrutura HTML sem estilo
    Hero.tsx             ← estrutura HTML sem estilo
    Experience.tsx       ← estrutura HTML sem estilo
    Projects.tsx         ← estrutura HTML sem estilo
    Skills.tsx           ← estrutura HTML sem estilo
    Footer.tsx           ← estrutura HTML sem estilo
  App.tsx                ← monta tudo
  index.css              ← só reset + @import "tailwindcss"
```

### Interfaces TypeScript disponíveis em `src/data/index.ts`:
```ts
interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tags: string[]
  url?: string
}

interface Project {
  name: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  highlight?: boolean
}

interface SkillGroup {
  label: string
  skills: string[]
}
```

---

## O que você deve entregar

Reescreva os componentes abaixo com Tailwind CSS classes inline (não use CSS separado além do que já está no index.css). Cada componente deve importar os dados de `'../data'`.

Entregue os 6 componentes completos e o `index.css` atualizado se precisar de customizações (variáveis CSS, estilos de scroll, etc.).

**Prioridades:**
1. Visual limpo e profissional — menos é mais
2. Responsivo mobile-first
3. Dark mode estático (sem toggle)
4. Animações sutis são bem-vindas (hover states, underline animado nos links)
5. Tags devem usar `font-family: 'JetBrains Mono'` para dar identidade técnica
6. Seção Experience deve ter hierarquia visual clara: cargo > empresa > período > bullets > tags
