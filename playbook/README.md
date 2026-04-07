# Local Playbook: Tools und Skills

Dieses Playbook ist die lokale Arbeitsbasis fuer das Projekt `ai-agent-builder-web`.

Ziel:

- Tools, Agentenrollen und Skill-Ideen erst lokal sammeln
- Workflows dokumentieren, bevor daraus echte Hermes-Skills werden
- wiederverwendbare Muster fuer Produkt, Entwicklung und Agent-Orchestrierung festhalten

Wichtig:
Dies ist bewusst ein lokales Playbook und keine finale Skill-Sammlung. Erst wenn ein Ablauf stabil, getestet und klar genug ist, wird er spaeter als echter Skill gepflegt.

## Struktur

- `01-schnellstart.md`
  Schneller Einstieg: wie dieses Playbook benutzt wird.
- `02-tools-uebersicht.md`
  Wichtige Tools, Einsatzzwecke und Auswahlregeln.
- `03-skill-system.md`
  Wie Skills in diesem Projekt gedacht sind.
- `04-agent-rollen.md`
  Geplante Agentenrollen fuer die Website.
- `05-workflows.md`
  Wiederkehrende Arbeitsablaeufe.
- `06-backlog-fuer-skills.md`
  Sammlung von Skill-Ideen, die spaeter formalisiert werden koennen.
- `custom-skills/README.md`
  Bereich fuer lokale Skill-Entwuerfe.
- `custom-skills/_template.md`
  Vorlage fuer neue lokale Skill-Entwuerfe.
- `custom-skills/repo-bootstrap.md`
  Erster lokaler Skill-Entwurf fuer Repo-Start.
- `custom-skills/agent-landingpage-planning.md`
  Erster lokaler Skill-Entwurf fuer Seiten- und Modulplanung.

## Arbeitsprinzip

1. Erst lokal dokumentieren.
2. Im Projekt testen und nachschaerfen.
3. Wiederverwendbarkeit pruefen.
4. Erst dann in echte Skills ueberfuehren.

## Such- und Pflegehinweise

Beispiele:

- nach Tools suchen: `rg "^## " playbook/02-tools-uebersicht.md`
- nach Workflows suchen: `rg "Workflow" playbook/`
- nach Skill-Ideen suchen: `rg "Status:" playbook/custom-skills playbook/06-backlog-fuer-skills.md`

## Wann etwas skill-ready ist

Ein lokaler Entwurf ist skill-ready, wenn:

- der Ablauf mehrfach funktioniert hat
- Eingaben, Schritte und Outputs klar sind
- typische Fehler dokumentiert sind
- der Nutzen auch in anderen Projekten erkennbar ist
- der Entwurf kurz, konkret und testbar ist
