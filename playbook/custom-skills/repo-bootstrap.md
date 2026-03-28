# Skill-Entwurf: repo-bootstrap

Status: in Bearbeitung

## Zweck

Ein neues Projekt-Repository schnell mit sinnvoller Struktur, README, Dokumentationsbasis und erstem Commit aufsetzen.

## Trigger

Wenn eine neue Projektidee in ein sauberes lokales Git-Repo und optional ein GitHub-Repo ueberfuehrt werden soll.

## Inputs

- Projektname
- kurze Projektbeschreibung
- Zielgruppe oder Produktidee
- geplanter Stack, falls bekannt

## Schritte

1. passenden Projektpfad festlegen
2. Repo-Namen pruefen
3. README mit Vision, Zielgruppe, Stack und naechsten Schritten erstellen
4. Basisordner und Dokumente anlegen
5. `.gitignore` erstellen
6. Git initialisieren
7. initial commit anlegen
8. optional GitHub-Remote erstellen und pushen

## Outputs

- lokales Repo
- initiale README
- erste Projektstruktur
- optional veroeffentlichtes GitHub-Repo

## Pitfalls

- unklarer Repo-Name
- fehlende Zielgruppe oder Positionierung
- zu viel Struktur ohne validierte Produktidee
- Vermischung von lokalen Notizen und finalen Skill-Artefakten

## Skill-ready wenn

- fuer mehrere neue Projekte erfolgreich angewendet
- Repo-Aufbau konsistent bleibt
- typische Varianten fuer Web, App oder Agent-Projekte klar sind

## Notizen aus echter Nutzung

- fuer `ai-agent-builder-web` erfolgreich verwendet
- README plus `docs/` war ein guter minimaler Start
- lokale Playbooks sollten getrennt von finalen Skills bleiben
