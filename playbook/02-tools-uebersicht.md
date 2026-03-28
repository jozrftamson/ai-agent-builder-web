# Tools Uebersicht

## Ziel

Dieses Dokument ordnet Tools nach Aufgabe, damit bei Produkt- und Entwicklungsarbeit schnell das richtige Werkzeug gewaehlt wird.

## Produkt- und Konzeptarbeit

### Markdown und Docs
- Zweck: Vision, Roadmap, Module, Spezifikationen
- Typische Outputs: README, Konzeptseiten, Playbooks, Checklisten
- Nutzen: schnell, versionskontrollierbar, gut fuer Agenten und Menschen lesbar

### GitHub
- Zweck: Repo, Issues, Projektorganisation, Releases
- Nutzen: gemeinsame Arbeitsbasis, Historie, Review-Prozesse

## Entwicklungs-Stack

### Frontend
- Next.js
- Nuxt
- TypeScript
- Tailwind CSS
- UI-Komponentenbibliotheken

Entscheidungsregel:
- Next.js, wenn React-Oekosystem, Vercel und app-router-nahe Patterns gewollt sind.
- Nuxt, wenn Vue/Nuxt-DX bevorzugt wird.

### Backend und APIs
- Node.js
- Express
- Hono
- Next API Routes
- optionale Python-Microservices fuer Agentenlogik

## Agentic Tools

### LLM APIs
- OpenAI APIs
- spaeter ggf. weitere Modellanbieter

### Agent-Frameworks
- OpenAI Agents SDK
- LangChain
- LangGraph

### Tool-Integration
- MCP-Server
- Function Calling
- Webhooks
- CLI-Tools

## Daten und Infrastruktur

### Daten
- PostgreSQL
- Prisma oder Drizzle
- Redis fuer Cache, Queue und Kurzzeit-Zustand

### Deployment
- Vercel fuer Frontend-nahe Starts
- Docker fuer portable Deployments
- VPS oder Cloud fuer eigene Kontrolle

## Qualitaet und Betrieb

- ESLint
- Prettier
- Vitest
- Playwright
- GitHub Actions

## Tool-Auswahl-Heuristik

1. Nimm zuerst das einfachste Tool, das den Job sauber loest.
2. Bevorzuge Tools mit guter DX und klaren Outputs.
3. Trenne Produkt-Experiment von spaeterer Produktionsarchitektur.
4. Waehle Agent-Tools so, dass Schritte beobachtbar und testbar bleiben.
5. Fuehre neue Tools erst ein, wenn ein echter Anwendungsfall da ist.
