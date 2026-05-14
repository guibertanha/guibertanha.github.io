// ============================================================
// Guilherme Bertanha — Portfolio (v2)
// Single-file React app · Pedro-inspired design system
// ============================================================
const { useState, useEffect, useRef, useMemo } = React;

// ============================================================
// CONTENT
// ============================================================
const CONTENT = {
  meta: {
    name: 'Guilherme Bertanha',
    handle: 'GB',
    location: 'Uberlândia, MG · BR',
    email: 'guilhermebertanha0@gmail.com',
    links: {
      github: 'https://github.com/guibertanha',
      linkedin: 'https://linkedin.com/in/guilhermebertanhaconstante',
    },
  },

  hero: {
    greet: 'SISTEMA ONLINE · PORTFOLIO 2026',
    role: (
      <>
        Estudante de Eng. Mecatrônica na <strong>UFU</strong>. Presidente da <strong>EDROM</strong> —
        robótica humanoide para RoboCup. Engenheiro de P&amp;D na <strong>Terasite</strong> —
        firmware IoT industrial para máquinas pesadas. Agentes de IA com Claude API.
      </>
    ),
    meta: [
      ['LOCAL',  'Uberlândia · MG'],
      ['STATUS', 'Disponível · 2026'],
      ['STACK',  'ESP32 · ROS2 · Python'],
    ],
  },

  about: {
    title: 'Sobre',
    id: '§ 01 / IDENTIFICAÇÃO',
    bio: [
      'Trabalho em problemas que cruzam domínios — do sensor ao dado, do dado à decisão.',
      'Na Terasite desenvolvo o firmware do gateway IoT industrial Frotall (FRITG01LTE): mesh BLE com HMAC, criptografia AES dinâmica, CAN bus, LTE/GPRS e OTA via rede mesh. Mais de 30 releases em produção em máquinas pesadas de campo.',
      'No EDROM lidero como presidente o desenvolvimento do robô humanoide Áurea para a RoboCup/CBR 2025 — controle cinemático, visão computacional e máquina de estados em ROS2.',
    ],
    stats: [
      ['3+',   'Anos · Mecatrônica UFU'],
      ['30+',  'Releases em produção'],
      ['2025', 'RoboCup CBR · Áurea'],
      ['5',    'Linguagens em uso'],
    ],
  },

  skills: {
    title: 'Stack',
    id: '§ 02 / SISTEMA',
    groups: [
      { ix: '01', label: 'Embarcado & IoT', items: [
        ['C++ / C', 'primária'],
        ['ESP32 · FreeRTOS', 'produção'],
        ['BLE · ESP-NOW', 'mesh'],
        ['CAN Bus · LTE', 'field'],
        ['AES · HMAC', 'crypto'],
      ]},
      { ix: '02', label: 'Robótica', items: [
        ['ROS2 Humble', 'middleware'],
        ['Docker', 'deploy'],
        ['Webots', 'simulação'],
        ['Visão Computacional', 'OpenCV'],
        ['Cinemática', 'humanoide'],
      ]},
      { ix: '03', label: 'Software & Dados', items: [
        ['Python', 'análise'],
        ['Jupyter · Pandas', 'EDA'],
        ['MATLAB', 'controle'],
        ['Git · Linux', 'devtools'],
        ['Scikit-learn', 'ML'],
      ]},
      { ix: '04', label: 'Web & Interfaces', items: [
        ['TypeScript · React', 'frontend'],
        ['Tailwind · Vite', 'build'],
        ['Zustand', 'estado'],
        ['Framer Motion', 'animação'],
      ]},
      { ix: '05', label: 'IA & Automação', items: [
        ['Claude API', 'agentes'],
        ['OpenAI API', 'LLM'],
        ['Agentes Autônomos', 'pipelines'],
      ]},
      { ix: '06', label: 'CAD & Hardware', items: [
        ['SolidWorks', 'mecânica'],
        ['PlatformIO', 'embedded'],
        ['Arduino IDE', 'protótipo'],
      ]},
    ],
  },

  projects: {
    title: 'Projetos',
    id: '§ 03 / MISSÕES',
    filters: ['Todos', 'Embedded', 'Robótica', 'Dados', 'Web'],
    items: [
      {
        id: 'M-001', title: 'Frotall Firmware · FRITG01LTE',
        desc: 'Gateway IoT industrial para máquinas pesadas. Mesh BLE com HMAC, criptografia AES dinâmica, CAN bus, LTE/GPRS, horômetro virtual, OTA via rede mesh. Mais de 30 releases em produção.',
        role: 'Engenheiro de P&D · Terasite Tecnologia',
        chips: ['C++', 'ESP32', 'FreeRTOS', 'BLE', 'CAN Bus', 'LTE'],
        status: 'ongoing', tag: 'IOT/FIRMWARE', cat: 'Embedded', art: 'board',
      },
      {
        id: 'M-002', title: 'EDROM — Robô Áurea',
        desc: 'Sistema completo de robô humanoide para RoboCup/CBR 2025. Controle cinemático de servos, visão computacional, localização e máquina de estados em ROS2.',
        role: 'Presidente · EDROM (UFU)',
        chips: ['C++', 'ROS2', 'Python', 'Docker', 'Webots'],
        status: 'ongoing', tag: 'PLATFORM/HUMANOID', cat: 'Robótica',
        link: 'https://github.com/edromufu/edrom_main', art: 'robot',
      },
      {
        id: 'M-003', title: 'Validação RF de Antenas · Terasite',
        desc: 'Firmware de bancada para testar 5 antenas externas do gateway IoT. State machine com 3 perfis (BURN/WALK/CLOCK), scoring normalizado e relatório HTML gerado automaticamente.',
        role: 'Engenheiro de P&D · Terasite',
        chips: ['C++', 'Python', 'HTML', 'ESP32'],
        status: 'completed', tag: 'RF/VALIDATION', cat: 'Embedded',
        link: 'https://github.com/guibertanha/estagio-terasite', art: 'antenna',
      },
      {
        id: 'M-004', title: 'RF Field Analysis',
        desc: 'Pipeline de EDA para validação de antenas Wi-Fi em campo real — vibração, EMI e flutuação de tensão em máquinas pesadas. Dados coletados com SA6 (35–6200 MHz).',
        role: 'P&D · Terasite Tecnologia',
        chips: ['Python', 'Jupyter', 'Pandas', 'EDA'],
        status: 'completed', tag: 'DATA/RF', cat: 'Dados',
        link: 'https://github.com/guibertanha/rf-field-analysis', art: 'chart',
      },
      {
        id: 'M-005', title: 'firmware-e-poeira',
        desc: 'Jogo de simulação browser sobre engenharia embarcada. React 19, TypeScript, Zustand para estado global e Framer Motion para animações.',
        role: 'Projeto pessoal',
        chips: ['React 19', 'TypeScript', 'Zustand', 'Framer Motion'],
        status: 'ongoing', tag: 'WEB/GAME', cat: 'Web',
        link: 'https://github.com/guibertanha/firmware-e-poeira', art: 'web',
      },
      {
        id: 'M-006', title: 'Data Science Study',
        desc: 'Pipeline de ciência de dados: limpeza de dados, EDA e modelos preditivos de regressão com Scikit-learn.',
        role: 'Estudo pessoal',
        chips: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
        status: 'completed', tag: 'RESEARCH/ML', cat: 'Dados',
        link: 'https://github.com/guibertanha/data-science-study', art: 'lab',
      },
    ],
  },

  experience: {
    title: 'Trajetória',
    id: '§ 04 / LOG DE EXPERIÊNCIA',
    items: [
      {
        when: 'AGO 2024 → AGORA', dur: 'atual',
        role: 'Presidente & Engenheiro de Software',
        where: { pre: '', strong: 'EDROM', post: ' · Equipe de Robótica da UFU' },
        notes: [
          'Liderança multidisciplinar do time de robótica humanoide para RoboCup/CBR 2025.',
          'Desenvolvimento de controle de servos, visão computacional e sensor fusion para o robô Áurea.',
          'Arquitetura do sistema em ROS2 Humble com Docker e simulação no Webots.',
        ],
        current: true,
      },
      {
        when: 'MAR 2024 → AGORA', dur: 'atual',
        role: 'Engenheiro de P&D — Firmware Embarcado',
        where: { pre: '', strong: 'Terasite Tecnologia', post: ' · Uberlândia' },
        notes: [
          'Firmware do gateway IoT industrial Frotall (FRITG01LTE) para máquinas pesadas.',
          'Comunicação mesh BLE com segurança HMAC, criptografia AES dinâmica e autenticação por token.',
          'Multi-protocolo: LTE/GPRS, Wi-Fi, ESP-NOW, CAN bus, OTA updates via mesh.',
          'Bancada de validação RF: state machine C++, análise Python, relatório HTML automático.',
        ],
        current: true,
      },
      {
        when: '2024 → AGORA', dur: 'atual',
        role: 'Desenvolvedor de Agentes de IA',
        where: { pre: '', strong: 'Projetos Autônomos', post: '' },
        notes: [
          'Agentes autônomos e ferramentas de automação com Claude API e OpenAI.',
          'Integração de LLMs com sistemas de hardware e pipelines de dados industriais.',
        ],
        current: false,
      },
    ],
  },

  contact: {
    title: 'Contato',
    id: '§ 05 / HANDSHAKE',
    sub: 'Aberto a projetos de embedded systems, robótica, IA aplicada e consultoria técnica.',
    rows: [
      { lab: 'Email',    val: 'guilhermebertanha0@gmail.com', href: 'mailto:guilhermebertanha0@gmail.com' },
      { lab: 'GitHub',   val: 'github.com/guibertanha', href: 'https://github.com/guibertanha' },
      { lab: 'LinkedIn', val: 'guilhermebertanhaconstante', href: 'https://linkedin.com/in/guilhermebertanhaconstante' },
      { lab: 'Local',    val: 'Uberlândia · MG · Brasil', href: null },
    ],
  },
};

// ============================================================
// TOPBAR
// ============================================================
function Topbar({ active }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} BRT`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const links = [
    ['about',      '01_sobre'],
    ['skills',     '02_stack'],
    ['projects',   '03_projetos'],
    ['experience', '04_trajetoria'],
    ['contact',    '05_contato'],
  ];

  return (
    <div className="topbar">
      <div className="topbar__left">
        <div className="topbar__sig">
          <span className="topbar__dot"></span>
          <span>GB · v26.05</span>
        </div>
        <span className="topbar__time">{time}</span>
      </div>
      <nav className="topbar__nav">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>{label}</a>
        ))}
      </nav>
    </div>
  );
}

// ============================================================
// SECTION HEAD
// ============================================================
function SectionHead({ title, id }) {
  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      <span className="section__id">{id}</span>
    </div>
  );
}

// ============================================================
// ESP32 DIAGRAM (animated)
// ============================================================
function ESP32Diagram() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf;
    const loop = (now) => { setT(now / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const bleAmp = Math.sin(t * 2.1) * 0.5 + 0.5;
  const canAmp = Math.sin(t * 3.4 + 1) * 0.5 + 0.5;
  const gpsAmp = Math.sin(t * 1.2 + 2) * 0.5 + 0.5;
  const lteAmp = Math.sin(t * 1.8 + 0.5) * 0.5 + 0.5;

  return (
    <svg viewBox="0 0 200 220" style={{width:'100%', height:'100%', maxHeight: 280}} preserveAspectRatio="xMidYMid meet">
      {/* Frame corners */}
      <g stroke="var(--fg-faint)" strokeWidth="0.8" fill="none">
        <path d="M10,10 L20,10 M10,10 L10,20"/>
        <path d="M190,10 L180,10 M190,10 L190,20"/>
        <path d="M10,210 L20,210 M10,210 L10,200"/>
        <path d="M190,210 L180,210 M190,210 L190,200"/>
      </g>
      {/* Coord labels */}
      <text x="14" y="216" fontFamily="var(--mono)" fontSize="5" fill="var(--fg-faint)" letterSpacing="0.1em">0,0</text>
      <text x="178" y="216" fontFamily="var(--mono)" fontSize="5" fill="var(--fg-faint)" letterSpacing="0.1em">200,220</text>

      {/* Board body */}
      <rect x="60" y="40" width="80" height="120" fill="#0d0d0d" stroke="var(--line-strong)" strokeWidth="1" rx="1"/>
      <rect x="60" y="40" width="80" height="120" fill="none" stroke="var(--line)" strokeWidth="0.5" strokeDasharray="2 2"/>

      {/* Chip */}
      <rect x="80" y="60" width="40" height="30" fill="var(--bg-elev)" stroke="var(--accent)" strokeWidth="0.8"/>
      <rect x="83" y="63" width="34" height="24" fill="none" stroke="var(--line)" strokeWidth="0.4"/>
      <text x="100" y="79" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" fill="var(--accent)" letterSpacing="0.1em">ESP32</text>

      {/* Pins left */}
      {[0,1,2,3,4,5,6].map(i => (
        <g key={`pl${i}`}>
          <line x1="45" y1={55 + i*14} x2="60" y2={55 + i*14} stroke="var(--line-strong)" strokeWidth="1"/>
          <circle cx="45" cy={55 + i*14} r="1.5" fill="var(--fg-faint)"/>
        </g>
      ))}
      {/* Pins right */}
      {[0,1,2,3,4,5,6].map(i => (
        <g key={`pr${i}`}>
          <line x1="140" y1={55 + i*14} x2="155" y2={55 + i*14} stroke="var(--line-strong)" strokeWidth="1"/>
          <circle cx="155" cy={55 + i*14} r="1.5" fill="var(--fg-faint)"/>
        </g>
      ))}

      {/* BLE waves left */}
      <g opacity={0.3 + bleAmp * 0.7} stroke="var(--info)" fill="none" strokeWidth="0.8">
        <path d="M28,90 Q22,85 22,80 Q22,75 28,70"/>
        <path d="M22,95 Q14,85 14,80 Q14,75 22,65"/>
      </g>
      <text x="17" y="105" fontFamily="var(--mono)" fontSize="6" fill="var(--info)" opacity="0.7" letterSpacing="0.08em">BLE</text>

      {/* CAN dashed lines right */}
      <g opacity={0.3 + canAmp * 0.7}>
        <line x1="155" y1="75" x2="180" y2="75" stroke="var(--warn)" strokeWidth="0.8" strokeDasharray="2 1"/>
        <line x1="155" y1="85" x2="180" y2="85" stroke="var(--warn)" strokeWidth="0.8" strokeDasharray="2 1"/>
        <text x="166" y="100" fontFamily="var(--mono)" fontSize="6" fill="var(--warn)" opacity="0.85" letterSpacing="0.08em">CAN</text>
      </g>

      {/* GPS pulse */}
      <circle cx="100" cy="135" r={2 + gpsAmp * 3} fill="none" stroke="var(--ok)" strokeWidth="0.6" opacity={0.4 + gpsAmp*0.4}/>
      <circle cx="100" cy="135" r="2" fill="var(--ok)" opacity="0.95"/>
      <text x="100" y="152" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" fill="var(--ok)" letterSpacing="0.1em">GPS·FIX</text>

      {/* LTE antenna top */}
      <line x1="95" y1="40" x2="95" y2="25" stroke="var(--fg-dim)" strokeWidth="1"/>
      <line x1="105" y1="40" x2="105" y2="25" stroke="var(--fg-dim)" strokeWidth="1"/>
      <circle cx="95" cy="25" r={1 + lteAmp} fill="var(--accent)" opacity={0.4 + lteAmp*0.5}/>
      <circle cx="105" cy="25" r={1 + (1-lteAmp)} fill="var(--accent)" opacity={0.4 + (1-lteAmp)*0.5}/>
      <text x="100" y="20" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" fill="var(--fg-faint)" letterSpacing="0.1em">LTE</text>

      {/* Board label */}
      <text x="100" y="178" textAnchor="middle" fontFamily="var(--mono)" fontSize="6" fill="var(--fg-faint)" letterSpacing="0.1em">FRITG01LTE · v3.15</text>
    </svg>
  );
}

// ============================================================
// TELEMETRY PANEL
// ============================================================
function Telemetry() {
  const [vals, setVals] = useState({ rssi: -67, ble: 3, can: 28 });
  useEffect(() => {
    const id = setInterval(() => {
      setVals(v => ({
        rssi: Math.max(-85, Math.min(-50, v.rssi + (Math.random()-0.5)*3)),
        ble:  Math.max(1, Math.min(6, v.ble + (Math.random() > 0.75 ? (Math.random() > 0.5 ? 1 : -1) : 0))),
        can:  Math.max(20, Math.min(40, v.can + (Math.random()-0.5)*2)),
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const feedItems = [
    '[BLE] mesh_sync · 3 nós conectados',
    '[CAN] frame_recv=28B · motor=LIGADO',
    '[GPRS] signal=-67dBm · tower=OK',
    '[OTA] fw_version=3.15.0 · up-to-date',
    '[IMU] accel=0.12g · vibr=FFT_OK',
    '[HMAC] auth_token=VALID · session=5m',
    '[GPS] lat=-18.91 lon=-48.27 · fix=3D',
    '[FreeRTOS] heap=68% · tasks=12 · OK',
  ];

  return (
    <div className="telemetry">
      <div className="telemetry__head">
        <span>UNIT_GB-01 · FROTALL GATEWAY</span>
        <span className="live">LIVE</span>
      </div>
      <div className="telemetry__viz">
        <div className="telemetry__diagram"><ESP32Diagram /></div>
        <div className="telemetry__readout">
          <div className={`telemetry__readout-row ${vals.rssi > -70 ? 'is-ok' : 'is-warn'}`}>
            <span>RSSI</span><b>{vals.rssi.toFixed(0)} dBm</b>
          </div>
          <div className="telemetry__readout-row is-ok">
            <span>BLE_NODES</span><b>{vals.ble}</b>
          </div>
          <div className="telemetry__readout-row">
            <span>CAN_FRAME</span><b>{vals.can.toFixed(0)}B</b>
          </div>
          <div className="telemetry__readout-row is-ok">
            <span>FW_VER</span><b>3.15.0</b>
          </div>
          <div className="telemetry__readout-row">
            <span>PROTO</span><b>BLE · ESP-NOW</b>
          </div>
          <div className="telemetry__readout-row">
            <span>CRYPTO</span><b>AES-256</b>
          </div>
          <div className="telemetry__readout-row is-ok">
            <span>STATUS</span><b>FIELD_OK</b>
          </div>
          <div className="telemetry__readout-row">
            <span>MCU</span><b>ESP32 · LTE</b>
          </div>
        </div>
      </div>
      <div className="telemetry__feed">
        <div className="telemetry__feed-track">
          {[...feedItems, ...feedItems].map((s, i) => (
            <span key={i}><b>›</b> {s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  const h = CONTENT.hero;
  return (
    <section id="home" className="hero" style={{borderBottom: 'none'}} data-screen-label="01 Hero">
      <div className="hero__grid">
        <div className="hero__left">
          <div>
            <div className="hero__greet">
              <span className="hero__greet-dot"></span>
              <span>{h.greet}</span>
            </div>
            <h1 className="hero__name" style={{marginTop: 24}}>
              Engenheiro<br/>
              Mecatrônico &amp;<br/>
              <em>desenvolvedor</em><br/>
              de firmware.
            </h1>
            <p className="hero__role">{h.role}</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#projects">
                Ver projetos <span className="btn__arrow">→</span>
              </a>
              <a className="btn" href="#contact">
                Contato <span className="btn__arrow">→</span>
              </a>
            </div>
          </div>
          <div className="hero__meta">
            {h.meta.map(([lab, val]) => (
              <div key={lab} className="hero__meta-cell">
                <span className="hero__meta-label">{lab}</span>
                <span className="hero__meta-value">{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__right">
          <Telemetry />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  const a = CONTENT.about;
  return (
    <section id="about" data-screen-label="02 About">
      <SectionHead title={a.title} id={a.id} />
      <div className="about">
        <div className="about__bio">
          {a.bio.map((p, i) => (
            <p key={i} className={i === 0 ? '' : 'is-dim'}>{p}</p>
          ))}
        </div>
        <div className="about__stats">
          {a.stats.map(([v, l]) => (
            <div key={l} className="stat">
              <div className="stat__value">{v}</div>
              <div className="stat__label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SKILLS
// ============================================================
function Skills() {
  const s = CONTENT.skills;
  return (
    <section id="skills" data-screen-label="03 Skills">
      <SectionHead title={s.title} id={s.id} />
      <div className="skills__grid">
        {s.groups.map((g) => (
          <div key={g.ix} className="skills__cell">
            <div className="skills__cell-head">
              <span className="ix">{g.ix}</span>
              <span>{g.label}</span>
            </div>
            <ul className="skills__list">
              {g.items.map(([name, tag]) => (
                <li key={name}>
                  <b style={{fontWeight: 500}}>{name}</b>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// PROJECT ART PLACEHOLDERS
// ============================================================
function ProjectArt({ kind }) {
  if (kind === 'board') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'78%', height:'78%'}} preserveAspectRatio="xMidYMid meet">
        <rect x="60" y="20" width="80" height="80" fill="#0d0d0d" stroke="var(--accent)" strokeWidth="1"/>
        <rect x="80" y="40" width="40" height="40" fill="var(--bg-elev)" stroke="var(--accent)" strokeWidth="0.8"/>
        <text x="100" y="63" textAnchor="middle" fontFamily="var(--mono)" fontSize="7" fill="var(--accent)" letterSpacing="0.1em">ESP32</text>
        {[0,1,2,3,4].map(i => <line key={`l${i}`} x1="45" y1={30+i*15} x2="60" y2={30+i*15} stroke="var(--line-strong)" strokeWidth="1"/>)}
        {[0,1,2,3,4].map(i => <line key={`r${i}`} x1="140" y1={30+i*15} x2="155" y2={30+i*15} stroke="var(--line-strong)" strokeWidth="1"/>)}
        <line x1="95" y1="20" x2="95" y2="10" stroke="var(--fg-dim)" strokeWidth="1"/>
        <line x1="105" y1="20" x2="105" y2="10" stroke="var(--fg-dim)" strokeWidth="1"/>
      </svg>
    );
  }
  if (kind === 'robot') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'70%', height:'80%'}} preserveAspectRatio="xMidYMid meet">
        <circle cx="100" cy="30" r="14" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
        <circle cx="95" cy="28" r="1.5" fill="var(--accent)"/>
        <circle cx="105" cy="28" r="1.5" fill="var(--accent)"/>
        <rect x="84" y="46" width="32" height="34" fill="none" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="84" y1="55" x2="74" y2="70" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="74" y1="70" x2="74" y2="88" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="116" y1="55" x2="126" y2="70" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="126" y1="70" x2="126" y2="88" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="92" y1="80" x2="92" y2="100" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="108" y1="80" x2="108" y2="100" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="92" y1="100" x2="88" y2="106" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="108" y1="100" x2="112" y2="106" stroke="var(--accent)" strokeWidth="1.2"/>
        <text x="100" y="55" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" fill="var(--accent)" letterSpacing="0.1em">ÁUREA</text>
      </svg>
    );
  }
  if (kind === 'antenna') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'80%', height:'78%'}} preserveAspectRatio="xMidYMid meet">
        {[0,1,2,3,4].map(i => {
          const x = 30 + i*35;
          return (
            <g key={i}>
              <line x1={x} y1="90" x2={x} y2="40" stroke="var(--accent)" strokeWidth="1.5"/>
              <line x1={x-6} y1="40" x2={x+6} y2="40" stroke="var(--accent)" strokeWidth="1.5"/>
              <line x1={x-4} y1="46" x2={x+4} y2="46" stroke="var(--accent)" strokeWidth="1"/>
              <circle cx={x} cy="92" r="3" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1"/>
              <text x={x} y="106" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" fill="var(--fg-faint)">A{i+1}</text>
            </g>
          );
        })}
      </svg>
    );
  }
  if (kind === 'chart') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'82%', height:'80%'}} preserveAspectRatio="xMidYMid meet">
        <line x1="20" y1="100" x2="180" y2="100" stroke="var(--line-strong)" strokeWidth="1"/>
        <line x1="20" y1="20" x2="20" y2="100" stroke="var(--line-strong)" strokeWidth="1"/>
        <polyline fill="none" stroke="var(--accent)" strokeWidth="1.5"
          points="20,80 35,70 50,75 65,55 80,60 95,40 110,50 125,30 140,42 155,25 170,32 180,28"/>
        {[28,42,25,32].map((y, i) => <circle key={i} cx={125 + i*15} cy={y + 18} r="2" fill="var(--accent)"/>)}
        <text x="100" y="115" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" fill="var(--fg-faint)" letterSpacing="0.1em">RSSI · TIME</text>
      </svg>
    );
  }
  if (kind === 'web') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'82%', height:'80%'}} preserveAspectRatio="xMidYMid meet">
        <rect x="30" y="20" width="140" height="80" fill="none" stroke="var(--accent)" strokeWidth="1.2"/>
        <line x1="30" y1="34" x2="170" y2="34" stroke="var(--accent)" strokeWidth="1"/>
        <circle cx="40" cy="27" r="2" fill="var(--warn)"/>
        <circle cx="48" cy="27" r="2" fill="var(--ok)"/>
        <circle cx="56" cy="27" r="2" fill="var(--info)"/>
        <rect x="40" y="44" width="50" height="6" fill="var(--accent)" opacity="0.4"/>
        <rect x="40" y="56" width="80" height="6" fill="var(--fg-dim)" opacity="0.4"/>
        <rect x="40" y="68" width="60" height="6" fill="var(--fg-dim)" opacity="0.3"/>
        <rect x="40" y="80" width="40" height="14" fill="var(--accent)"/>
      </svg>
    );
  }
  if (kind === 'lab') {
    return (
      <svg viewBox="0 0 200 120" className="proj__image-art" style={{width:'78%', height:'80%'}} preserveAspectRatio="xMidYMid meet">
        <g stroke="var(--line-strong)" strokeWidth="0.6">
          {[0,1,2,3,4,5].map(i => <line key={i} x1="20" y1={25+i*14} x2="180" y2={25+i*14}/>)}
          {[0,1,2,3,4,5,6,7].map(i => <line key={i} x1={30+i*20} y1="25" x2={30+i*20} y2="95"/>)}
        </g>
        {[[40,55],[60,40],[80,65],[100,38],[120,55],[140,45],[160,50]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="var(--accent)"/>
        ))}
        <polyline fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2"
          points="40,52 60,48 80,55 100,42 120,50 140,48 160,50"/>
        <text x="100" y="110" textAnchor="middle" fontFamily="var(--mono)" fontSize="5" fill="var(--fg-faint)" letterSpacing="0.1em">REGRESSION · R²=0.87</text>
      </svg>
    );
  }
  return null;
}

// ============================================================
// PROJECTS
// ============================================================
function Projects() {
  const p = CONTENT.projects;
  const [filter, setFilter] = useState('Todos');
  const visibleRef = useRef(new Set());
  const cardsRef = useRef({});

  const filtered = useMemo(() => {
    return filter === 'Todos' ? p.items : p.items.filter(it => it.cat === filter);
  }, [filter]);

  // IntersectionObserver for reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    Object.values(cardsRef.current).forEach(el => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [filter]);

  return (
    <section id="projects" data-screen-label="04 Projects">
      <SectionHead title={p.title} id={p.id} />
      <div className="proj__filters">
        {p.filters.map(f => (
          <button
            key={f}
            className={`proj__filter ${filter === f ? 'is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="proj__grid">
        {filtered.map((it, i) => {
          const Wrapper = it.link ? 'a' : 'div';
          const wrapperProps = it.link ? { href: it.link, target: '_blank', rel: 'noopener' } : {};
          return (
            <Wrapper
              key={it.id}
              className="proj__card"
              ref={el => { cardsRef.current[it.id] = el; }}
              {...wrapperProps}
            >
              <div className="proj__card-head">
                <span className="proj__id">{it.id}</span>
                <span className={`proj__status is-${it.status}`}>
                  {it.status === 'ongoing' ? 'ATIVO' : 'ENTREGUE'}
                </span>
              </div>
              <div className="proj__image">
                <div className="proj__image-grid"></div>
                <ProjectArt kind={it.art} />
                <span className="proj__image-tag">{it.tag}</span>
              </div>
              <div className="proj__body">
                <div className="proj__role">{it.role}</div>
                <h3 className="proj__title">{it.title}</h3>
                <p className="proj__desc">{it.desc}</p>
                <div className="proj__chips">
                  {it.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE
// ============================================================
function Experience() {
  const x = CONTENT.experience;
  return (
    <section id="experience" data-screen-label="05 Experience">
      <SectionHead title={x.title} id={x.id} />
      <div className="xp__list">
        {x.items.map((it, i) => (
          <div key={i} className={`xp__entry ${it.current ? 'is-current' : ''}`}>
            <div className="xp__row">
              <div className="xp__when">
                <b>{it.dur}</b>
                {it.when}
              </div>
              <div className="xp__body">
                <h3 className="xp__role">{it.role}</h3>
                <div className="xp__where">
                  {it.where.pre}<b>{it.where.strong}</b>{it.where.post}
                </div>
                <ul className="xp__notes">
                  {it.notes.map((n, j) => <li key={j}>{n}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================
function Contact() {
  const c = CONTENT.contact;
  return (
    <section id="contact" className="contact" data-screen-label="06 Contact">
      <SectionHead title={c.title} id={c.id} />
      <div className="contact__grid">
        <div>
          <h2 className="contact__lead">
            Vamos <em>construir</em> algo.
          </h2>
          <p className="contact__sub">{c.sub}</p>
        </div>
        <div className="contact__cta">
          {c.rows.map((row, i) => {
            const Wrapper = row.href ? 'a' : 'div';
            const wrapperProps = row.href ? { href: row.href, target: row.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener' } : {};
            return (
              <Wrapper key={i} className="contact__row" {...wrapperProps}>
                <span className="lab">{row.lab}</span>
                <span style={{display:'flex', alignItems:'center', gap:10}}>
                  {row.val} {row.href && <span className="arr">→</span>}
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Guilherme Bertanha · Uberlândia · MG</span>
      <span>SYS:OK · GB-portfolio.v26 <span className="footer__cursor">█</span></span>
    </footer>
  );
}

// ============================================================
// SCROLLSPY
// ============================================================
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids.join(',')]);
  return active;
}

// ============================================================
// APP
// ============================================================
function App() {
  const active = useScrollSpy(['home', 'about', 'skills', 'projects', 'experience', 'contact']);
  return (
    <>
      <Topbar active={active} />
      <div className="app">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
