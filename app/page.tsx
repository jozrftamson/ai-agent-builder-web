const navItems = [
  { label: "Agents", href: "#agents" },
  { label: "Workflow", href: "#workflow" },
  { label: "Platform", href: "#platform" },
];

const proofItems = [
  "Built for AI engineers",
  "Designed for agentic workflows",
  "Structured around reusable skills",
  "Ready for team-based delivery",
];

const agentCards = [
  {
    kicker: "Core planning",
    title: "Planning Agent",
    text: "Converts raw product ideas into specs, architecture, milestones, and execution maps.",
    featured: true,
  },
  {
    kicker: "Implementation",
    title: "Coding Agent",
    text: "Generates components, APIs, boilerplate, and implementation-ready structures.",
  },
  {
    kicker: "Reliability",
    title: "Debug Agent",
    text: "Investigates logs, broken flows, failed tests, and hidden integration issues.",
  },
  {
    kicker: "Quality",
    title: "Review Agent",
    text: "Checks architecture, code quality, clarity, maintainability, and risk exposure.",
  },
  {
    kicker: "Delivery",
    title: "Deployment Agent",
    text: "Supports CI, release flow, environment setup, and launch readiness.",
  },
  {
    kicker: "Knowledge",
    title: "Research Agent",
    text: "Finds APIs, libraries, patterns, and competitive context for better decisions.",
  },
];

const workflowSteps = [
  {
    title: "Brief the problem",
    text: "Define the product goal, technical challenge, or delivery target in one clear input flow.",
  },
  {
    title: "Route work to the right agents",
    text: "Send planning, coding, research, review, or debugging tasks to focused specialists.",
  },
  {
    title: "Capture reusable skills",
    text: "Turn repeated wins into structured playbooks, templates, and skill systems.",
  },
  {
    title: "Ship with confidence",
    text: "Move from idea to tested output, documented process, and repeatable team execution.",
  },
];

const valueCards = [
  {
    title: "Agent-first UX",
    text: "Users interact with purposeful agent modules instead of one overloaded assistant box.",
  },
  {
    title: "Tool-aware execution",
    text: "Each flow can connect code tools, docs, CI, MCP integrations, and research utilities.",
  },
  {
    title: "Skill memory",
    text: "Successful workflows become reusable building blocks, not forgotten chat history.",
  },
  {
    title: "Team leverage",
    text: "Teams can standardize how planning, coding, review, and deployment are supported by AI.",
  },
];

const metrics = [
  { value: "6", label: "core agent roles in the first concept" },
  { value: "1", label: "shared workspace for specs, code, review, and shipping" },
  { value: "100%", label: "focused on practical development outcomes, not AI theater" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">A</span>
          <span>ai-agent-builder-web</span>
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#cta" className="nav-cta">
            Start building
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Agentic web platform for AI builders</p>
            <h1>Build AI products with specialized agents, not generic chat tabs.</h1>
            <p className="hero-text">
              Plan architecture, generate implementation paths, debug blockers, review code,
              and operationalize workflows in one focused workspace built for modern KI development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cta">
                Launch the workspace vision
              </a>
              <a className="button button-secondary" href="#agents">
                Explore agent roles
              </a>
            </div>
            <ul className="hero-points">
              <li>Clear agent roles with concrete outputs</li>
              <li>Workflow-driven instead of prompt-chaos driven</li>
              <li>Built for builders, AI engineers, and product teams</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="panel card-stack">
              <div className="panel-topline">
                <span className="status-dot" />
                Active system
              </div>
              <h2>From idea to deployed AI workflow</h2>
              <div className="stack-list">
                <article>
                  <span>01</span>
                  <div>
                    <strong>Planning Agent</strong>
                    <p>Turns product ideas into specs, milestones, and architecture.</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <strong>Coding Agent</strong>
                    <p>Builds components, API patterns, and implementation scaffolds.</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <strong>Debug + Review</strong>
                    <p>Finds blockers, surfaces risks, and increases shipping confidence.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip section-tight" aria-label="trust indicators">
          {proofItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </section>

        <section id="agents" className="section">
          <div className="section-heading">
            <p className="eyebrow">Specialized roles</p>
            <h2>Each agent exists to produce a real development outcome.</h2>
            <p>
              Instead of one overburdened assistant, the platform frames work as focused roles
              with explicit inputs, tools, and outputs.
            </p>
          </div>

          <div className="agent-grid">
            {agentCards.map((card) => (
              <article
                key={card.title}
                className={card.featured ? "agent-card featured-card" : "agent-card"}
              >
                <span className="card-kicker">{card.kicker}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="section workflow-section">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>A workflow layer designed for real KI development.</h2>
            <p>
              The website is not meant to be a pretty wrapper around prompts. It is meant to guide
              actual delivery from brief to shipped result.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="workflow-step">
                <span>{`Step ${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="platform" className="section platform-section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Why this platform</p>
              <h2>One system for agents, tools, workflows, and reusable skills.</h2>
            </div>
            <p>
              The long-term value is not only generating answers. It is structuring how AI-driven development is executed,
              documented, and improved across projects.
            </p>
          </div>

          <div className="value-grid">
            {valueCards.map((card) => (
              <article key={card.title} className="value-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section metrics-section">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="cta" className="section cta-section">
          <div className="cta-card">
            <p className="eyebrow">Build the first version</p>
            <h2>Turn this concept into a working agentic product platform.</h2>
            <p>
              Start with the landing page, then expand into agent modules, brief forms, result views,
              and a living skill library for AI development teams.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#hero">
                Revisit the vision
              </a>
              <a className="button button-secondary" href="#workflow">
                See the workflow
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>ai-agent-builder-web</strong>
          <p>Agentic infrastructure for planning, building, debugging, and shipping AI products.</p>
        </div>
        <div className="footer-links">
          <a href="#hero">Top</a>
          <a href="#agents">Agents</a>
          <a href="#workflow">Workflow</a>
          <a href="#cta">CTA</a>
        </div>
      </footer>
    </div>
  );
}
