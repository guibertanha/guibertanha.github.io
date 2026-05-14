// ============================================================
// Portfolio sections — Nav, Hero, Experience, Projects, etc.
// ============================================================
const { useState, useEffect, useRef, useMemo } = React;

// ---------- Inline icons ----------
const Icon = {
  github: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 6L2 7"/>
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7"/>
      <path d="M7 7h10v10"/>
    </svg>
  ),
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7"/>
      <path d="m20 20-3.5-3.5"/>
    </svg>
  ),
  briefcase: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  cube: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m21 16-9 5-9-5V8l9-5 9 5z"/>
      <path d="m3 8 9 5 9-5"/>
      <path d="M12 13v8"/>
    </svg>
  ),
  cpu: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
    </svg>
  ),
  cap: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  at: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4"/>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
    </svg>
  ),
};

// ---------- Nav ----------
function Nav({ active, onCmdK }) {
  const links = [
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contato' },
  ];
  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#about" className="brand">
          <span className="brand-mark">GB</span>
          <span><span className="long">Guilherme </span>Bertanha</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? 'active' : ''}`}>{l.label}</a>
          ))}
          <button className="nav-cmdk" onClick={onCmdK} aria-label="Abrir paleta de comandos">
            <Icon.search style={{width:12, height:12}}/>
            <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd><kbd>K</kbd>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ---------- Hero ----------
function Hero({ data }) {
  return (
    <section id="about" className="hero" data-screen-label="01 Hero">
      <div className="hero-status reveal r1">
        <span className="pulse"></span>
        <span>{data.status.label}</span>
        <span style={{color:'var(--text-faint)', margin:'0 2px'}}>·</span>
        <span style={{color:'var(--text-muted)'}}>{data.location.split(',')[0]} · {data.timezone}</span>
      </div>
      <h1 className="name reveal r2">
        <span className="first">{data.name.first}</span>{' '}
        <span className="last">{data.name.last}</span>
      </h1>
      <p className="role reveal r3"><span className="caret">›</span>{data.role}</p>
      <p className="tagline reveal r4">{data.tagline}</p>
      <p className="bio reveal r5">{data.bio}</p>
      <div className="socials reveal r6">
        <a className="chip" href={data.socials.github} target="_blank" rel="noopener">
          <Icon.github /> GitHub <Icon.arrow className="arrow" style={{width:11,height:11}}/>
        </a>
        <a className="chip" href={data.socials.linkedin} target="_blank" rel="noopener">
          <Icon.linkedin /> LinkedIn <Icon.arrow className="arrow" style={{width:11,height:11}}/>
        </a>
        <a className="chip" href={data.socials.email}>
          <Icon.mail /> Email
        </a>
      </div>

      <div className="now-card reveal r7">
        <div className="now-head">Agora · {new Date().toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</div>
        <dl className="now-list">
          {data.now.map((row, i) => (
            <React.Fragment key={i}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>

      <div className="stats reveal r8">
        {data.stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Section header ----------
function SectionHeader({ num, title, count }) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="section-header">
      <span className="section-num">{pad(num)}<span className="slash">/</span></span>
      <span className="section-title">{title}</span>
      <span className="section-line"></span>
      {count != null && <span className="section-count">{pad(count)} {count === 1 ? 'item' : 'itens'}</span>}
    </div>
  );
}

// ---------- Experience ----------
function Experience({ items }) {
  return (
    <section id="experience" className="section" data-screen-label="02 Experience">
      <SectionHeader num={1} title="Experiência" count={items.length} />
      <div className="exp-list">
        {items.map((e, i) => (
          <article key={i} className="exp-item">
            <div className="exp-head">
              <div className="exp-title-block">
                <div className="exp-role">{e.role}</div>
                <div className="exp-company">
                  <span className="at">@</span>{e.company}
                  {e.companyNote && <span className="note">· {e.companyNote}</span>}
                </div>
              </div>
              <div className="exp-meta">
                {e.period}
                {e.location && <span className="location">{e.location}</span>}
              </div>
            </div>
            <ul className="exp-bullets">
              {e.description.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
            <div className="tags">
              {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- Projects ----------
function ProjectCard({ p }) {
  const ref = useRef(null);
  const Wrapper = p.url ? 'a' : 'div';
  const wrapperProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener' } : {};

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Wrapper
      ref={ref}
      className={`project ${p.highlight ? 'highlight' : ''}`}
      onMouseMove={onMove}
      {...wrapperProps}
    >
      <div className="project-meta-row">
        <span>{p.year}</span>
        <span className="project-type">{p.type}</span>
      </div>
      <div className="project-head">
        <div className="project-name">
          {p.highlight && <span className="star">★</span>}
          {p.name}
        </div>
        {p.url && (
          <span className="project-link-icon" aria-label="Abrir repositório">
            <Icon.arrow />
          </span>
        )}
      </div>
      <p className="project-desc">{p.description}</p>
      <div className="tags">
        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </Wrapper>
  );
}

function Projects({ items }) {
  return (
    <section id="projects" className="section" data-screen-label="03 Projects">
      <SectionHeader num={2} title="Projetos" count={items.length} />
      <div className="projects-grid">
        {items.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </section>
  );
}

// ---------- Skills ----------
function Skills({ groups }) {
  return (
    <section id="skills" className="section" data-screen-label="04 Skills">
      <SectionHeader num={3} title="Skills" count={groups.length} />
      <div className="skills-grid">
        {groups.map((g, i) => (
          <div key={i} className="skill-group">
            <div className="skill-label">{g.label}</div>
            <div className="skill-pills">
              {g.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Education ----------
function Education({ items }) {
  return (
    <section id="education" className="section" data-screen-label="05 Education">
      <SectionHeader num={4} title="Educação" count={items.length} />
      {items.map((e, i) => (
        <div key={i} className="edu-item">
          <div className="edu-head">
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-period">{e.period}</div>
          </div>
          <div className="edu-inst">{e.institution}</div>
          <div className="edu-detail">{e.detail}</div>
        </div>
      ))}
    </section>
  );
}

// ---------- Contact ----------
function Contact({ data }) {
  return (
    <section id="contact" className="section" data-screen-label="06 Contact">
      <SectionHeader num={5} title="Contato" />
      <div className="contact-block">
        <h2 className="contact-title">
          Vamos construir algo <span className="em">do sensor à decisão</span>.
        </h2>
        <p className="contact-body">
          Estou aberto a colaborações em sistemas embarcados, robótica e agentes autônomos.
          Mande uma mensagem — respondo em até 48h.
        </p>
        <div className="socials">
          <a className="chip" href={data.socials.email}>
            <Icon.mail /> guilherme.bertanha@ufu.br
          </a>
          <a className="chip" href={data.socials.github} target="_blank" rel="noopener">
            <Icon.github /> guibertanha <Icon.arrow className="arrow" style={{width:11,height:11}}/>
          </a>
          <a className="chip" href={data.socials.linkedin} target="_blank" rel="noopener">
            <Icon.linkedin /> guibertanha <Icon.arrow className="arrow" style={{width:11,height:11}}/>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ data }) {
  return (
    <footer>
      <div className="foot-name">
        © 2025 <span className="accent">Guilherme Bertanha</span> · {data.location}
      </div>
      <div className="foot-links">
        <a href={data.socials.github} target="_blank" rel="noopener">github</a>
        <a href={data.socials.linkedin} target="_blank" rel="noopener">linkedin</a>
        <a href={data.socials.email}>email</a>
      </div>
    </footer>
  );
}

// ---------- Command Palette ----------
function CommandPalette({ open, onClose, data }) {
  const [query, setQuery] = useState('');
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const sections = [
      { kind: 'Navegar', label: 'Sobre', icon: 'at', action: () => { location.hash = '#about'; } },
      { kind: 'Navegar', label: 'Experiência', icon: 'briefcase', action: () => { location.hash = '#experience'; } },
      { kind: 'Navegar', label: 'Projetos', icon: 'cube', action: () => { location.hash = '#projects'; } },
      { kind: 'Navegar', label: 'Skills', icon: 'cpu', action: () => { location.hash = '#skills'; } },
      { kind: 'Navegar', label: 'Educação', icon: 'cap', action: () => { location.hash = '#education'; } },
      { kind: 'Navegar', label: 'Contato', icon: 'mail', action: () => { location.hash = '#contact'; } },
    ];
    const projects = data.projects.map(p => ({
      kind: 'Projetos',
      label: p.name,
      icon: 'cube',
      action: () => p.url ? window.open(p.url, '_blank') : (location.hash = '#projects'),
    }));
    const links = [
      { kind: 'Links', label: 'GitHub', icon: 'github', action: () => window.open(data.socials.github, '_blank') },
      { kind: 'Links', label: 'LinkedIn', icon: 'linkedin', action: () => window.open(data.socials.linkedin, '_blank') },
      { kind: 'Links', label: 'Email', icon: 'mail', action: () => { location.href = data.socials.email; } },
    ];
    return [...sections, ...projects, ...links];
  }, [data]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(i => i.label.toLowerCase().includes(q) || i.kind.toLowerCase().includes(q));
  }, [items, query]);

  useEffect(() => { setIdx(0); }, [query]);
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [open]);

  if (!open) return null;

  const onKey = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onClose(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(filtered.length - 1, i + 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setIdx(i => Math.max(0, i - 1)); }
    if (e.key === 'Enter') {
      e.preventDefault();
      const item = filtered[idx];
      if (item) { item.action(); onClose(); }
    }
  };

  // Group items by kind
  const groups = [];
  filtered.forEach((it, i) => {
    const g = groups.find(g => g.kind === it.kind);
    const itemWithIndex = { ...it, _i: i };
    if (g) g.items.push(itemWithIndex);
    else groups.push({ kind: it.kind, items: [itemWithIndex] });
  });

  return (
    <div className="cmdk-backdrop" onClick={onClose}>
      <div className="cmdk" onClick={e => e.stopPropagation()} onKeyDown={onKey}>
        <input
          ref={inputRef}
          className="cmdk-input"
          placeholder="Buscar seções, projetos, links…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={onKey}
        />
        <div className="cmdk-list">
          {groups.length === 0 && (
            <div style={{padding: '20px', color: 'var(--text-muted)', fontSize: 13, textAlign: 'center'}}>
              Nada encontrado para "{query}"
            </div>
          )}
          {groups.map(g => (
            <div key={g.kind}>
              <div className="cmdk-section">{g.kind}</div>
              {g.items.map(it => {
                const IconComp = Icon[it.icon] || Icon.arrow;
                return (
                  <div
                    key={it.label}
                    className={`cmdk-item ${it._i === idx ? 'active' : ''}`}
                    onMouseEnter={() => setIdx(it._i)}
                    onClick={() => { it.action(); onClose(); }}
                  >
                    <span className="cmdk-item-icon"><IconComp /></span>
                    <span>{it.label}</span>
                    {it._i === idx && <span className="kbd">↵</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="cmdk-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navegar · <kbd>↵</kbd> abrir · <kbd>esc</kbd> fechar</span>
          <span>⌘K</span>
        </div>
      </div>
    </div>
  );
}

// Expose to other scripts
Object.assign(window, { Icon, Nav, Hero, SectionHeader, Experience, Projects, Skills, Education, Contact, Footer, CommandPalette });
