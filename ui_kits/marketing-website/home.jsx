/* ColaberryAI Research Labs — Home view (Enterprise AI Platform landing) */
const { Button: HButton, Card: HCard, Badge: HBadge } = window.ColaberryDesignSystem_098454;

function HomeView({ go }) {
  // Rotating hero word
  const words = ['AI agents', 'MCP servers', 'AI skills', 'AI podcasts'];
  const [wi, setWi] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setWi(w => (w + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const catalogs = [
    { icon: 'bot', label: 'AI agents catalog' },
    { icon: 'plug', label: 'MCP servers directory' },
    { icon: 'puzzle', label: 'AI skills catalog' },
    { icon: 'mic', label: 'AI podcasts' },
    { icon: 'share-2', label: 'Platform ontology' },
    { icon: 'git-fork', label: 'Ecosystem graph' },
  ];

  const destination = [
    { icon: 'mic', cyan: false, count: '246 episodes', title: 'AI Podcasts', desc: '246 episodes with full transcripts, timestamps, and linked artifacts from Colaberry AI.' },
    { icon: 'bot', cyan: true, count: '151+ agents', title: 'AI Agents', desc: '151+ enterprise agents with ownership, runbooks, and deployment readiness across 13 industries.' },
    { icon: 'plug', cyan: false, count: '1.5k+ servers', title: 'MCP Servers', desc: '1,500+ Model Context Protocol servers with tool access, connectors, and integration templates.' },
    { icon: 'puzzle', cyan: true, count: '16.9k+ skills', title: 'AI Skills', desc: '16,896+ reusable capability units across workflow, domain, and orchestration categories.' },
    { icon: 'book-open', cyan: false, count: 'Research', title: 'Books & Research', desc: 'Enterprise reference material, delivery frameworks, and responsible AI research.' },
    { icon: 'share-2', cyan: true, count: 'Ontology', title: 'Knowledge Graph', desc: 'Knowledge graph mapping agents, skills, MCPs, and tools into a structured intelligence layer.' },
  ];

  const feeds = {
    Podcasts: {
      latest: [
        ['Beyond AGI: Google DeepMind’s Roadmap to Superintelligence', 'Jun 16, 2026 · 20:50'],
        ['The Machine Frontier: Why the Internet Is No Longer Human', 'Jun 15, 2026 · 21:12'],
        ['Fable 5 and the Crisis of Hidden AI Safety Throttling', 'Jun 12, 2026 · 24:42'],
      ],
      trending: [
        ['Meta’s Superintelligence Strategy: Inside Alexander Wang’s Vision', 'Feb 26, 2026 · 22:49'],
        ['Hermes Agent: The Rapid Rise of an AI OS', 'May 14, 2026 · 20:45'],
        ['Microsoft MAI: The Dawn of Independent Super Intelligence', 'Apr 7, 2026 · 19:27'],
      ],
    },
    Agents: {
      latest: [
        ['Revenue Ops Copilot — pipeline hygiene & forecasting', 'Sales · Ready'],
        ['Claims Triage Agent — intake, routing, summarization', 'Insurance · Pilot'],
        ['Clinical Notes Assistant — ambient documentation', 'Healthcare · Ready'],
      ],
      trending: [
        ['Supply Chain Sentinel — disruption detection', 'Logistics · Ready'],
        ['Contract Analyst — clause extraction & risk flags', 'Legal · Pilot'],
        ['Onboarding Concierge — IT & HR provisioning', 'Workplace · Ready'],
      ],
    },
    Skills: {
      latest: [
        ['Structured Output Validator — schema-safe generation', 'Orchestration'],
        ['PII Redaction — detect & mask sensitive entities', 'Security'],
        ['SQL Synthesis — natural language to queries', 'Domain'],
      ],
      trending: [
        ['Multi-step Planner — task decomposition', 'Orchestration'],
        ['Retrieval Reranker — relevance scoring', 'Workflow'],
        ['Tone Adapter — brand-aligned rewriting', 'Domain'],
      ],
    },
    MCP: {
      latest: [
        ['Snowflake Connector — governed warehouse access', 'Data'],
        ['GitHub Server — repos, issues, actions', 'Developer'],
        ['Salesforce Bridge — CRM read/write', 'CRM'],
      ],
      trending: [
        ['Slack Server — messages, channels, workflows', 'Collaboration'],
        ['ServiceNow Connector — tickets & CMDB', 'ITSM'],
        ['Google Drive — documents & search', 'Storage'],
      ],
    },
  };
  const feedTabs = Object.keys(feeds);
  const [feedTab, setFeedTab] = React.useState('Podcasts');

  const caps = {
    Agents: { icon: 'bot', h: 'Agents & assistants catalog', p: 'Adopt agents with clear ownership, status, and workflow alignment — ready for rollout. Browse by industry, deployment stage, and readiness level.', stats: [['151+', 'Agent profiles'], ['14', 'Industries'], ['151+', 'Public agents']] },
    MCP: { icon: 'plug', h: 'Model Context Protocol surface', p: 'Give assistants a standardized way to act across your tools. Connect a governed MCP surface with audit trails and scoped permissions.', stats: [['1.7k+', 'MCP servers'], ['12', 'Categories'], ['100%', 'Audit-logged']] },
    Skills: { icon: 'puzzle', h: 'Reusable skills library', p: 'Compose capability units across workflow, domain, and orchestration categories — versioned, tested, and reusable across agents.', stats: [['16.9k+', 'Skills indexed'], ['3', 'Categories'], ['∞', 'Composable']] },
    Observability: { icon: 'activity', h: 'Observability & evaluation', p: 'Trace every agent run, evaluate outcomes against golden sets, and monitor drift, cost, and latency from one operating layer.', stats: [['Live', 'Tracing'], ['Eval', 'Harness'], ['24/7', 'Monitoring']] },
    Security: { icon: 'shield-check', h: 'Security & governance', p: 'Enforce policy, scoped access, and data residency. Govern who can deploy what, with full lineage from catalog to production.', stats: [['SSO', 'SAML/OIDC'], ['RBAC', 'Scoped'], ['SOC 2', 'Aligned']] },
    Workspaces: { icon: 'layout-grid', h: 'Team workspaces', p: 'Organize catalogs, evaluations, and deployments by team. Share runbooks and align strategy across the AI program.', stats: [['Teams', 'Spaces'], ['Roles', 'Granular'], ['Shared', 'Runbooks']] },
    Developer: { icon: 'terminal', h: 'Developer surface', p: 'LLM-ready APIs and a structured knowledge graph so both people and machines can discover, compare, and deploy intelligence.', stats: [['API', 'First'], ['Graph', 'Queryable'], ['SDK', 'Typed']] },
  };
  const capTabs = Object.keys(caps);
  const [capTab, setCapTab] = React.useState('Agents');
  const cap = caps[capTab];

  const integrations = [
    ['Slack', 'slack'], ['Microsoft Teams', 'users'], ['Google Drive', 'hard-drive'], ['Salesforce', 'cloud'],
    ['ServiceNow', 'life-buoy'], ['Workday', 'briefcase'], ['Jira', 'check-square'], ['Okta', 'key-round'],
    ['Zendesk', 'headphones'], ['Snowflake', 'snowflake'], ['AWS', 'server'], ['GitHub', 'github'],
  ];

  return (
    <main>
      {/* HERO */}
      <section className="cbsite-hero">
        <div className="cbsite-hero__copy">
          <span className="cbsite-eyebrow">Enterprise AI Platform</span>
          <h1>Discover, govern, and scale <span className="cbsite-rotate">{words[wi]}</span></h1>
          <p>A unified catalog where teams discover, evaluate, and deploy AI agents, MCP servers, skills, and research — governed and structured for both people and LLMs.</p>
          <div className="cbsite-hero__cta">
            <HButton size="lg" onClick={() => go('enroll')}>Book a demo</HButton>
            <HButton size="lg" variant="outline" onClick={() => go('program')} trailingIcon={<I n="arrow-right" />}>Explore platform</HButton>
          </div>
          <div className="cbsite-catlinks">
            <div className="cbsite-catlinks__label">Explore the LLM-ready catalogs:</div>
            <div className="cbsite-chips">
              {catalogs.map((c, i) => (
                <a key={i} className="cbsite-chip" onClick={() => go('program')}><I n={c.icon} s={15} />{c.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="cbsite-hero__media">
          <div className="cbsite-statpanel">
            <div className="cbsite-statpanel__big">
              <div className="cbsite-statpanel__n">19k+</div>
              <div className="cbsite-statpanel__lbl">AI resources cataloged</div>
            </div>
            <div className="cbsite-statpanel__grid">
              <div className="cbsite-statpanel__cell"><I n="mic" /><strong>306+</strong><span>Podcasts</span></div>
              <div className="cbsite-statpanel__cell"><I n="bot" /><strong>151+</strong><span>Agents</span></div>
              <div className="cbsite-statpanel__cell"><I n="plug" /><strong>1.7k+</strong><span>MCP servers</span></div>
              <div className="cbsite-statpanel__cell"><I n="puzzle" /><strong>16.9k+</strong><span>Skills</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="cbsite-stats">
        {[['19k+', 'Resources cataloged'], ['14', 'Industries served'], ['151+', 'Agent profiles'], ['1.7k+', 'MCP servers'], ['16.9k+', 'Skills indexed']].map((s, i) => (
          <div key={i} className="cbsite-stat"><div className="cbsite-stat__n">{s[0]}</div><div className="cbsite-stat__l">{s[1]}</div></div>
        ))}
      </section>

      {/* STRUCTURED DESTINATION */}
      <section className="cbsite-section">
        <div className="cbsite-section__head">
          <HBadge tone="blue">Explore the catalog</HBadge>
          <h2>A structured destination for agents, MCPs, skills &amp; research</h2>
          <p>Give teams and LLMs a single place to discover, compare, and deploy intelligence.</p>
        </div>
        <div className="cbsite-cards">
          {destination.map((d, i) => (
            <a key={i} className="cbsite-card" onClick={() => go('program')}>
              <div className={'cbsite-card__ic' + (d.cyan ? ' cbsite-card__ic--cyan' : '')}><I n={d.icon} /></div>
              <span className="cbsite-card__count">{d.count}</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <span className="cbsite-card__more">Learn more <I n="arrow-right" s={15} /></span>
            </a>
          ))}
        </div>
      </section>

      {/* LATEST & TRENDING */}
      <section className="cbsite-section cbsite-section--subtle">
        <div className="cbsite-section__head">
          <HBadge tone="cyan">Platform signals</HBadge>
          <h2>Latest and trending across the catalog</h2>
          <p>Fresh profiles and high-interest items across agents, skills, MCP servers, and podcasts.</p>
        </div>
        <div className="cbsite-tabs">
          {feedTabs.map(t => (
            <button key={t} className={'cbsite-tab' + (feedTab === t ? ' is-active' : '')} onClick={() => setFeedTab(t)}>{t}</button>
          ))}
        </div>
        <div className="cbsite-feed">
          {[['Latest', 'latest'], ['Trending', 'trending']].map(([label, key]) => (
            <div key={key} className="cbsite-feed__col">
              <h4>{label}</h4>
              {feeds[feedTab][key].map((it, i) => (
                <a key={i} className="cbsite-item" onClick={() => go('program')}>
                  <div className="cbsite-item__ic"><I n={feedTab === 'Podcasts' ? 'mic' : feedTab === 'Agents' ? 'bot' : feedTab === 'Skills' ? 'puzzle' : 'plug'} s={18} /></div>
                  <div className="cbsite-item__body"><strong>{it[0]}</strong><div className="cbsite-item__meta">{it[1]}</div></div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="cbsite-section">
        <div className="cbsite-section__head">
          <HBadge tone="blue">Platform capabilities</HBadge>
          <h2>Everything teams need to build, govern &amp; scale AI</h2>
          <p>From cataloging agents to evaluating outcomes, the platform supports full lifecycle delivery.</p>
        </div>
        <div className="cbsite-tabs">
          {capTabs.map(t => (
            <button key={t} className={'cbsite-tab' + (capTab === t ? ' is-active' : '')} onClick={() => setCapTab(t)}>{t}</button>
          ))}
        </div>
        <div className="cbsite-cap">
          <div className="cbsite-cap__copy">
            <HBadge tone="cyan">{capTab}</HBadge>
            <h3>{cap.h}</h3>
            <p>{cap.p}</p>
            <div className="cbsite-cap__stats">
              {cap.stats.map((s, i) => (
                <div key={i} className="cbsite-cap__stat"><strong>{s[0]}</strong><span>{s[1]}</span></div>
              ))}
            </div>
          </div>
          <div className="cbsite-cap__visual"><I n={cap.icon} /></div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="cbsite-section cbsite-section--subtle">
        <div className="cbsite-section__head">
          <HBadge tone="blue">Connect your stack</HBadge>
          <h2>Integrations-ready from day one</h2>
          <p>Build assistants that can act across your tools — using a standardized MCP surface.</p>
        </div>
        <div className="cbsite-integrations">
          {integrations.map((it, i) => (
            <a key={i} className="cbsite-int" onClick={() => go('program')}><I n={it[1]} /><span>{it[0]}</span></a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cbsite-cta">
        <div className="cbsite-cta__inner">
          <h2>Build, govern, and scale AI from one operating layer</h2>
          <p>Colaberry aligns strategy, catalog discovery, and production workflows across agents, MCP, skills, and evidence-backed resources.</p>
          <div className="cbsite-cta__btns">
            <HButton size="lg" tone="green" onClick={() => go('enroll')}>Request a demo</HButton>
            <HButton size="lg" variant="outline" onClick={() => go('program')}>Explore platform</HButton>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="cbsite-section">
        <div className="cbsite-news">
          <h3>Subscribe to the Colaberry AI Newsletter</h3>
          <p>Daily AI podcast episodes and enterprise AI implementation signals — agents, MCP servers, skills, and tools.</p>
          <form className="cbsite-news__form" onSubmit={(e) => { e.preventDefault(); go('enroll'); }}>
            {window.ColaberryDesignSystem_098454.Input
              ? React.createElement(window.ColaberryDesignSystem_098454.Input, { placeholder: 'Email address', type: 'email', 'aria-label': 'Email address' })
              : <input placeholder="Email address" />}
            <HButton type="submit">Subscribe</HButton>
          </form>
          <div className="cbsite-news__note">Free. No spam. One-click unsubscribe.</div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeView });
