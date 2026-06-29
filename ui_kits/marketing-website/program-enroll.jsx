/* ColaberryAI Research Labs — Catalog detail (agent profile) + Book-a-demo views */
const { Button: PButton, Card: PCard, Badge: PBadge, Input: PInput, Checkbox: PCheckbox } = window.ColaberryDesignSystem_098454;

function ProgramView({ go }) {
  const [open, setOpen] = React.useState(0);
  const modules = [
    { h: 'Capabilities & tools', d: 'Pipeline hygiene, forecast scoring, and next-best-action — backed by a governed MCP tool surface.', wk: 'Overview' },
    { h: 'Ownership & runbook', d: 'Named owner, escalation path, and a step-by-step runbook for rollout and incident response.', wk: 'Governance' },
    { h: 'Evaluation & readiness', d: 'Golden-set evaluations, drift monitoring, and a deployment-readiness score before production.', wk: 'Evaluation' },
    { h: 'Integrations', d: 'Connects to Salesforce, Slack, and Snowflake through standardized MCP connectors with scoped access.', wk: 'Integrations' },
  ];
  const faqs = [
    { q: 'What does "deployment readiness" mean?', a: 'Each agent is scored across ownership, evaluation coverage, security review, and integration status — so you know exactly what is left before production.' },
    { q: 'How is access governed?', a: 'Agents run on a scoped MCP surface with RBAC, audit logging, and data-residency controls. You decide who can deploy what.' },
    { q: 'Can we bring our own agents?', a: 'Yes. Catalog your internal agents alongside public ones, with the same ownership, evaluation, and lineage metadata.' },
    { q: 'How do podcasts and research connect?', a: 'The knowledge graph links agents, skills, MCPs, and evidence — including transcripts and white papers — into one queryable layer.' },
  ];
  const tools = ['Salesforce', 'Slack', 'Snowflake', 'MCP', 'RBAC', 'Eval harness'];
  return (
    <main>
      <div className="cbsite-prog-hero">
        <div className="cbsite-prog-hero__inner">
          <div className="cbsite-bc"><a onClick={() => go('home')}>Platform</a> <I n="chevron-right" s={14} /> <a onClick={() => go('home')}>Agents</a> <I n="chevron-right" s={14} /> <span>Revenue Ops Copilot</span></div>
          <div className="cbsite-prog-hero__grid">
            <div>
              <PBadge tone="blue" dot>Deployment-ready · Sales</PBadge>
              <h1>Revenue Ops Copilot</h1>
              <p>An enterprise agent for pipeline hygiene, forecasting, and next-best-action — with clear ownership, runbooks, and a governed MCP tool surface, ready for rollout.</p>
              <div className="cbsite-meta">
                <span><I n="building-2" s={16} /> Sales &amp; RevOps</span>
                <span><I n="gauge" s={16} /> Readiness 92%</span>
                <span><I n="shield-check" s={16} /> Security reviewed</span>
                <span><I n="plug" s={16} /> 3 MCP connectors</span>
              </div>
              <div className="cbsite-prog-hero__cta">
                <PButton size="lg" onClick={() => go('enroll')}>Book a demo</PButton>
                <PButton size="lg" variant="ghost" onClick={() => go('enroll')} leadingIcon={<I n="file-text" />}>View runbook</PButton>
              </div>
            </div>
            <PCard elevation="md" padded className="cbsite-pricecard">
              <span className="cbsite-pricecard__label">Deployment readiness</span>
              <div className="cbsite-pricecard__price">92<small>/ 100</small></div>
              <ul>
                <li><I n="check" /><span>Named owner &amp; runbook</span></li>
                <li><I n="check" /><span>Golden-set evaluations passing</span></li>
                <li><I n="check" /><span>Security &amp; data-residency review</span></li>
                <li><I n="check" /><span>3 governed MCP connectors</span></li>
              </ul>
              <PButton fullWidth onClick={() => go('enroll')}>Request access</PButton>
              <span className="cbsite-pricecard__note">Available to enterprise workspaces</span>
            </PCard>
          </div>
        </div>
      </div>

      <section className="cbsite-section">
        <div className="cbsite-section__head cbsite-section__head--row">
          <div>
            <PBadge tone="cyan">Profile</PBadge>
            <h2>What this agent does</h2>
          </div>
        </div>
        <div className="cbsite-modules">
          {modules.map((m, i) => (
            <div key={i} className={'cbsite-module' + (open === i ? ' is-open' : '')} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="cbsite-module__top">
                <span className="cbsite-module__wk">{m.wk}</span>
                <h3>{m.h}</h3>
                <I n={open === i ? 'minus' : 'plus'} />
              </div>
              {open === i && <p>{m.d}</p>}
            </div>
          ))}
        </div>
        <div className="cbsite-tools">
          <span>Connectors &amp; controls</span>
          <div>{tools.map((t, i) => <PBadge key={i} outline>{t}</PBadge>)}</div>
        </div>
      </section>

      <section className="cbsite-section cbsite-section--subtle">
        <div className="cbsite-section__head cbsite-section__head--row">
          <div>
            <PBadge tone="blue">FAQ</PBadge>
            <h2>Questions, answered</h2>
          </div>
        </div>
        <div className="cbsite-faq">
          {faqs.map((f, i) => (
            <details key={i} className="cbsite-faqitem">
              <summary>{f.q}<I n="plus" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cbsite-cta">
        <div className="cbsite-cta__inner">
          <h2>See it running on your stack</h2>
          <p>Book a walkthrough and our team will map this agent to your tools, data, and governance requirements.</p>
          <div className="cbsite-cta__btns"><PButton size="lg" tone="green" onClick={() => go('enroll')}>Book a demo</PButton></div>
        </div>
      </section>
    </main>
  );
}

function EnrollView({ go }) {
  const [interest, setInterest] = React.useState('agents');
  const [done, setDone] = React.useState(false);
  const opts = {
    agents: { name: 'AI Agents', desc: 'Catalog, govern & deploy', tone: 'blue' },
    mcp: { name: 'MCP Servers', desc: 'Standardized tool access', tone: 'cyan' },
    skills: { name: 'AI Skills', desc: 'Reusable capability units', tone: 'blue' },
    platform: { name: 'Full Platform', desc: 'End-to-end AI operating layer', tone: 'cyan' },
  };
  const sel = opts[interest];
  if (done) {
    return (
      <main className="cbsite-enroll">
        <div className="cbsite-success">
          <div className="cbsite-success__icon"><I n="check" /></div>
          <h1>Demo requested!</h1>
          <p>Thanks for your interest in <strong>{sel.name}</strong>. A solutions engineer will reach out within one business day to schedule your walkthrough.</p>
          <div className="cbsite-success__btns">
            <PButton onClick={() => { setDone(false); go('home'); }}>Back to home</PButton>
            <PButton variant="outline" onClick={() => go('program')}>Explore the catalog</PButton>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="cbsite-enroll">
      <div className="cbsite-enroll__grid">
        <form className="cbsite-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <h1>Book a demo</h1>
          <p className="cbsite-form__sub">See how teams discover, govern, and scale AI from one operating layer. Takes about 2 minutes.</p>

          <div className="cbsite-form__choice">
            <span className="cbsite-form__legend">What are you most interested in?</span>
            <div className="cbsite-choice">
              {Object.entries(opts).map(([k, v]) => (
                <button type="button" key={k} className={'cbsite-choice__opt' + (interest === k ? ' is-sel' : '')} onClick={() => setInterest(k)}>
                  <span className="cbsite-choice__check"><I n="check" /></span>
                  <strong>{v.name}</strong>
                  <span>{v.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="cbsite-form__row">
            <PInput label="First name" placeholder="Ada" required />
            <PInput label="Last name" placeholder="Lovelace" required />
          </div>
          <PInput label="Work email" type="email" placeholder="ada@company.com" required />
          <div className="cbsite-form__row">
            <PInput label="Company" placeholder="Acme Inc." required />
            <PInput label="Team size" placeholder="50–500" />
          </div>
          <PInput label="What would you like to see?" multiline rows={3} placeholder="Tell us about your AI program and the tools you'd like to connect…" />
          <div className="cbsite-form__checks">
            <PCheckbox label="Send me the Colaberry AI newsletter — agents, MCP, and skills signals" defaultChecked />
            <PCheckbox label="I agree to be contacted by Colaberry about my request" required />
          </div>
          <PButton type="submit" size="lg" fullWidth>Request demo</PButton>
        </form>

        <aside className="cbsite-summary">
          <PCard elevation="md" padded>
            <PBadge tone={sel.tone} dot>Your focus</PBadge>
            <h3>{sel.name}</h3>
            <ul>
              <li><I n="search" /><span>LLM-ready catalog &amp; discovery</span></li>
              <li><I n="shield-check" /><span>Governance, RBAC &amp; audit trails</span></li>
              <li><I n="activity" /><span>Evaluation &amp; observability</span></li>
              <li><I n="share-2" /><span>Knowledge-graph connected</span></li>
            </ul>
          </PCard>
          <div className="cbsite-summary__trust">
            <I n="sparkles" />
            <p>19k+ AI resources cataloged across agents, MCP servers, skills, and podcasts — structured for both people and LLMs.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { ProgramView, EnrollView });
