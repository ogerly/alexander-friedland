# Hermes — der Wächter über meinen Kontext

*Entwurf für den Blog (2026-09-23). Freie Form, 1. Person. Länge: ~600 Wörter.*

---

Wer mit lokalen LLMs arbeitet, kennt das Problem: Die Session läuft, der Agent
arbeitet, und irgendwann ist das Kontext-Fenster voll. Dann beginnt das Vergessen —
Entscheidungen, die in Turn 3 getroffen wurden, sind in Turn 40 schlicht weg.
Compaction hilft ein Stück, aber sie ist lossy. Genau dort setzt **Hermes** an.

## Mein Stack — ganz lokal

Bevor ich zu Hermes komme, der Kontext: Ich arbeite komplett ohne Cloud.

- **LM Studio** läuft die offenen Modelle (mein Standard ist aktuell
  `qwen3.8-27b`, dazu ein paar kleinere Zweitmodelle).
- Dazwischen liegt mein **MANTIS-LLM-Gateway**: ein kleiner,
  OpenAI-kompatibler Proxy (FastAPI), der die Provider-Endpunkte vereinheitlicht,
  Key-Rotation macht und die Modell-Liste synchron hält. Für den Client ändert
  sich nichts — es gibt genau einen stabilen Endpoint.
- Der Client ist **OpenCode in VS Code**. In der `opencode.json` steht pro Modell
  die Kontext-Fenster-Größe — und genau diese Zahl braucht Hermes.

Pro Projekt mache ich einfach einen neuen OpenCode-Chat auf — das erzeugt in
LM Studio eine neue Chat-ID. Saubere Trennung, keine vergammelten Verläufe.

## Das Problem: wer passt auf, wenn das Fenster voll wird?

Ein Coding-Agent in einer langen Session produziert genau das, was am Ende am
meisten verloren geht: Entscheidungen. „Warum haben wir das so gelöst?" — in
drei Tagen weiß niemand mehr so richtig, auch der Agent nicht, weil der Thread
kompaktiert wurde.

Ich habe das bei einem fremden Repo beobachtet: offenes Issue „Decision-Leck",
weil eine Entscheidung im Kontext schwebend blieb und nie dokumentiert wurde.
Genau dieser Fail-Mode hat mich zu Hermes gebracht.

## Hermes: Checkpoints statt Amnésie

Hermes ist ein kleines **OpenCode-Plugin** (~250 Zeilen TypeScript). Es misst
pro Session, wie voll der Kontext ist — Input-Tokens der letzten Assistant-
Message geteilt durch die Fenster-Größe des Modells — und injiziert ab
Schwellwerten **Pflicht-Checkpoints** direkt in den Lauf:

| Füllung | Checkpoint | Was passiert |
|---------|------------|---------------|
| ≥ 70 %  | **SOFT**   | Dateiprotokoll + alle offenen Entscheidungen ins Workpaper — dann weiterarbeiten |
| ≥ 85 %  | **HARD**   | Volles Close-Ritual: Whitepaper aktualisieren, Langzeit-Memory pflegen, Diary-Zeile |
| ≥ 90 %  | **HANDOFF**| Handoff-Block schreiben (Status, exakter Resume-Punkt, offene Entscheidungen) und stoppen |

Die entscheidende Idee dahinter ist ein Satz:

> **Session = Kontext-Fenster. Workpaper = Task.**

Das Fenster ist flüchtig, der Task lebt weiter. Wenn Hermes bei 90 % den
Handoff-Block geschrieben hat, startet die nächste Session genau dort — im
gleichen Workpaper, mit allem, was davor passiert ist. Der Agent beginnt nie
mehr bei null.

Zusätzlich hängt Hermes am nativen Compaction-Ereignis von OpenCode an und
sichert den Kontext, bevor komprimiert wird. Anti-Loop-Schutz (ein Schwellwert
= genau eine Injektion) und ein State-File gehören dazu — alles in
`WORKING/LOGS/`, also nachvollziehbar und im Repo.

## AAMS: der Vertrag, über dem Hermes sitzt

Hermes ist nicht allein unterwegs. Das Repo arbeitet nach **AAMS** — einem
Agent-Contract-Standard: Workpaper pro Task, Whitepaper als stabile
Architektur-Wahrheit, Diary als chronologisches Entscheidungstagebuch,
Memory als Langzeit-Index. Jede Session beginnt mit „Was wurde schon
entschieden?" und endet mit „Was müssen künftige Sessions wissen?".

Hermes ist die Brücke: Es sorgt dafür, dass das Ritual nicht am
Token-Limit scheitert, sondern *vorher* läuft. Wichtige Abgrenzung: Hermes ist
eine **lokale Anpassung**, kein Teil von AAMS selbst. Ich habe die
Sidecar-Variante (Hermes schreibt sich die Checkpoints selbst) bewusst beim
AAMS-Upstream angefragt (Issue ogerly/AAMS#53) — Antwort: sauber, aber bei
Upstream nur als optionales, beschreibendes Pattern denkbar. Genau so soll es
bleiben: lokal straff, standardmäßig offen.

## Ergebnis

Seit Hermes läuft, überleben meine Sessions das Kontext-Fenster. Entscheidungen
landen dokumentiert statt im Kopf, neue Sessions setzen exakt dort an, wo die
alte aufgehört hat — und das Ganze auf lokalen Modellen, ohne dass ein einziges
Token eine Cloud gesehen hat.

~600 Wörter. Ende.





>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> erster blogartikel entwurf

# Hermes — der Wächter über meinen Kontext

Wer mit lokalen LLMs und Coding-Agenten arbeitet, kennt irgendwann dieses Problem:

Die Session läuft. Der Agent arbeitet. Es werden Dateien geändert, Entscheidungen getroffen, Fehler analysiert und wieder behoben. Und irgendwann ist das Kontextfenster voll.

Dann beginnt das Vergessen.

Eine Entscheidung, die in Turn 3 getroffen wurde, kann in Turn 40 schlicht verschwunden sein. Compaction hilft dabei, die Session weiterzuführen. Aber eine Zusammenfassung ist immer eine Zusammenfassung. Irgendetwas geht verloren.

Für mich war irgendwann klar: **Der Kontext darf nicht der Ort sein, an dem Wissen dauerhaft lebt.**

Genau hier kommt Hermes ins Spiel.

## Mein Stack — ganz lokal

Ich arbeite dabei komplett lokal.

**LM Studio** stellt meine Modelle bereit. Mein Standardmodell ist aktuell `qwen3.8-27b`, dazu kommen kleinere Modelle für andere Aufgaben.

Dazwischen sitzt mein **MANTIS-LLM-Gateway**. Ein kleiner OpenAI-kompatibler Proxy auf FastAPI-Basis. Er vereinheitlicht die Provider-Endpunkte, übernimmt Key-Rotation und hält die Modellliste synchron.

Für den Client gibt es dadurch genau einen stabilen Endpoint.

Als Client läuft **OpenCode in VS Code**.

In meiner `opencode.json` ist für jedes Modell die jeweilige Kontextgröße definiert. Genau diese Information braucht Hermes, um abschätzen zu können, wie weit die aktuelle Session bereits fortgeschritten ist.

Pro Projekt starte ich einen neuen OpenCode-Chat. Dadurch entsteht in LM Studio eine neue Chat-ID.

Saubere Trennung. Keine alten Gesprächsreste. Keine Session, die über Wochen immer weiter wächst.

## Das eigentliche Problem

Das Problem ist nicht einmal unbedingt, dass ein LLM Dinge vergisst.

Das Problem ist, dass wichtige Entscheidungen häufig **nur im Kontext existieren**.

„Warum haben wir das eigentlich so gebaut?“

Wenn die Antwort darauf irgendwo 30.000 Tokens weiter oben steht, ist sie irgendwann nicht mehr zuverlässig verfügbar.

Genau das habe ich bei einem fremden Repository erlebt: Ein offenes Issue beschäftigte sich mit einem „Decision-Leck“. Eine wichtige Entscheidung war im Verlauf getroffen worden, aber nie dauerhaft dokumentiert worden.

Der Kontext wusste es einmal.

Das Repository wusste es nicht.

Für einen Coding-Agenten ist das gefährlich.

Denn eine neue Session kann dann durchaus wieder eine alte Entscheidung infrage stellen, obwohl diese bereits bewusst getroffen wurde.

## Hermes: Checkpoints statt Amnesie

Hermes ist meine kleine **OpenCode-Pluginschicht**, die genau dieses Problem adressiert.

Das Plugin ist bewusst klein gehalten. Rund 250 Zeilen TypeScript reichen aus, um die Session zu überwachen und bei definierten Schwellenwerten ein AAMS-Checkpoint-Ritual auszulösen.

Die aktuelle Kontextfüllung wird dabei gegen die für das Modell konfigurierte Fenstergröße gesetzt.

| Füllung | Checkpoint  | Was passiert                                                               |
| ------- | ----------- | -------------------------------------------------------------------------- |
| ≥ 70 %  | **SOFT**    | Dateiprotokoll und offene Entscheidungen ins Workpaper                     |
| ≥ 85 %  | **HARD**    | Whitepaper aktualisieren, Langzeit-Memory pflegen, Diary-Eintrag schreiben |
| ≥ 90 %  | **HANDOFF** | Exakten Resume-Punkt dokumentieren und Session beenden                     |

Die entscheidende Idee dahinter ist eigentlich ganz einfach:

> **Session = Kontext-Fenster. Workpaper = Task.**

Das Kontextfenster ist flüchtig.

Das Workpaper lebt weiter.

Wenn Hermes bei 90 Prozent einen Handoff schreibt, beginnt die nächste Session nicht wieder bei null. Sie beginnt mit dem dokumentierten Zustand der vorherigen Session.

## Und dann kommt Compaction

OpenCode selbst besitzt inzwischen einen Hook für den Compaction-Prozess. Damit kann ein Plugin zusätzlichen Kontext in die Compaction einbringen, bevor OpenCode daraus die Fortsetzung der Session erzeugt.

Hermes sitzt genau an dieser Stelle nicht als Ersatz, sondern als zusätzliche Sicherung.

Bevor der Kontext komprimiert wird, soll das wichtige Wissen bereits außerhalb des flüchtigen Gesprächsverlaufs stehen.

Das ist für mich der entscheidende Unterschied.

Ich möchte nicht darauf vertrauen, dass eine spätere Zusammenfassung die richtige Entscheidung rekonstruiert.

Ich möchte, dass die Entscheidung **vorher dokumentiert wurde**.

Dazu kommen Anti-Loop-Schutz und ein State-File. Ein Schwellwert wird pro Session nur einmal ausgelöst. Die Zustände landen in `WORKING/LOGS/` und bleiben damit nachvollziehbar.

## AAMS: der Vertrag darüber

Hermes funktioniert nicht isoliert.

Darunter liegt **AAMS**.

AAMS definiert die Struktur, in der ein Agentenprojekt seinen dauerhaften Zustand ablegt:

* **Workpaper** — aktueller Task und Arbeitszustand
* **Whitepaper** — stabile Architektur- und Projektwahrheit
* **Diary** — chronologisches Entscheidungstagebuch
* **Memory** — langfristig relevantes Wissen

Damit entsteht eine klare Trennung:

**Der Chat ist nicht das Gedächtnis.**

Der Chat ist der Arbeitsraum.

AAMS ist der dauerhafte Zustand.

Hermes ist die Brücke zwischen beiden.

Wichtig ist dabei auch die Abgrenzung: **Hermes ist keine Erweiterung des AAMS-Standards selbst.** Es ist meine lokale Anpassung für OpenCode.

Die Sidecar-Variante habe ich beim AAMS-Upstream bewusst zur Diskussion gestellt. Issue `ogerly/AAMS#53` beschreibt genau diesen Ansatz. Die Idee ist dort als optionales, beschreibendes Pattern interessant, soll aber nicht zum verpflichtenden Bestandteil des Standards werden.

Das finde ich richtig.

AAMS soll offen bleiben.

Hermes darf dagegen genau auf meinen lokalen Workflow zugeschnitten sein.

## Was sich dadurch verändert

Seit Hermes läuft, sehe ich den Kontext nicht mehr als etwas, das ich möglichst groß machen muss.

Selbst ein riesiges Kontextfenster löst das grundsätzliche Problem nicht.

Denn irgendwann ist auch dieses Fenster voll.

Entscheidend ist deshalb nicht nur:

**Wie viel kann das Modell gleichzeitig sehen?**

Sondern:

**Was bleibt erhalten, wenn es das nicht mehr sehen kann?**

Mit Hermes landen Entscheidungen nicht mehr nur im Gespräch.

Sie landen dort, wo die nächste Session sie wiederfinden kann.

Und genau deshalb gefällt mir dieser kleine Satz inzwischen ziemlich gut:

> **Das Kontextfenster ist flüchtig. Der Task nicht.**
