// ============================================================
// Portfolio main — App, scroll spy, scroll progress, tweaks, cmd+k
// ============================================================
const { useState: useS, useEffect: useE, useRef: useR } = React;

// ---------- Tweak palettes ----------
const PALETTES = {
  '#6366f1': { soft: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.32)', glow: 'rgba(99,102,241,0.45)' },
  '#10b981': { soft: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.32)', glow: 'rgba(16,185,129,0.45)' },
  '#f59e0b': { soft: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.32)', glow: 'rgba(245,158,11,0.45)' },
  '#fb7185': { soft: 'rgba(251,113,133,0.12)', border: 'rgba(251,113,133,0.32)', glow: 'rgba(251,113,133,0.45)' },
  '#22d3ee': { soft: 'rgba(34,211,238,0.12)',  border: 'rgba(34,211,238,0.32)', glow: 'rgba(34,211,238,0.45)' },
};

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#6366f1",
  "density": "confortável",
  "showStatus": true,
  "showStats": true,
  "showNow": true
}/*EDITMODE-END*/;

function applyAccent(hex) {
  const p = PALETTES[hex] || PALETTES['#6366f1'];
  const r = document.documentElement.style;
  r.setProperty('--accent', hex);
  r.setProperty('--accent-soft', p.soft);
  r.setProperty('--accent-border', p.border);
  r.setProperty('--accent-glow', p.glow);
}
function applyDensity(name) {
  const r = document.documentElement.style;
  r.setProperty('--section-pad', name === 'compacta' ? '48px' : '72px');
}

// ---------- Scrollspy ----------
function useScrollSpy(ids) {
  const [active, setActive] = useS(ids[0]);
  useE(() => {
    const handler = () => {
      const scrollY = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);

      // Scroll progress bar
      const sp = document.getElementById('scrollProgress');
      if (sp) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        sp.style.width = `${Math.min(100, pct)}%`;
      }
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids.join(',')]);
  return active;
}

// ---------- Cmd+K hotkey ----------
function useCmdK(onTrigger) {
  useE(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onTrigger();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onTrigger]);
}

// ---------- App ----------
function App() {
  const data = window.PORTFOLIO_DATA;
  const [t, setTweak] = useTweaks(DEFAULTS);
  const [cmdOpen, setCmdOpen] = useS(false);

  useE(() => { applyAccent(t.accent); }, [t.accent]);
  useE(() => { applyDensity(t.density); }, [t.density]);
  useE(() => {
    document.body.dataset.noStatus = t.showStatus ? 'false' : 'true';
    document.body.dataset.noStats = t.showStats ? 'false' : 'true';
    document.body.dataset.noNow = t.showNow ? 'false' : 'true';
  }, [t.showStatus, t.showStats, t.showNow]);

  useCmdK(() => setCmdOpen(true));

  const active = useScrollSpy(['about', 'experience', 'projects', 'skills', 'education', 'contact']);

  return (
    <React.Fragment>
      <Nav active={active} onCmdK={() => setCmdOpen(true)} />
      <main>
        <Hero data={data} />
        <Experience items={data.experience} />
        <Projects items={data.projects} />
        <Skills groups={data.skills} />
        <Education items={data.education} />
        <Contact data={data} />
      </main>
      <Footer data={data} />

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} data={data} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Aparência">
          <TweakColor
            label="Acento"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#6366f1', '#10b981', '#f59e0b', '#fb7185', '#22d3ee']}
          />
          <TweakRadio
            label="Densidade"
            value={t.density}
            onChange={(v) => setTweak('density', v)}
            options={['confortável', 'compacta']}
          />
        </TweakSection>
        <TweakSection label="Hero">
          <TweakToggle label="Pill de status" value={t.showStatus} onChange={(v) => setTweak('showStatus', v)} />
          <TweakToggle label="Bloco 'Agora'" value={t.showNow} onChange={(v) => setTweak('showNow', v)} />
          <TweakToggle label="Strip de stats" value={t.showStats} onChange={(v) => setTweak('showStats', v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
