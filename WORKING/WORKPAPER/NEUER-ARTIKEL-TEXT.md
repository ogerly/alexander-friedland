
erster entwurf:

# Die besten Coder gehen lokal
**Wir haben der Cloud beigebracht, wie man programmiert. Jetzt gehen wir.**


**Wenn die besten Coder die Cloud verlassen**  
**Wenn die Coder gehen: Die stille Wende zur lokalen KI**

**Die nächste KI-Revolution findet auf dem Schreibtisch statt**

*Ein Gedanke über lokale KI, Coding-Modelle, menschliches Wissen und die Frage, was passiert, wenn die Early Adopter plötzlich nicht mehr mitmachen.*

Ich programmiere seit 1999.  
Angefangen habe ich zu einer Zeit, in der man Code noch wirklich Zeile für Zeile geschrieben hat. Keine Agenten, keine Coding-Modelle, keine KI, die einem innerhalb von Sekunden einen halben Lösungsweg auf den Bildschirm zaubert. Man musste wissen, was man tut.

Genau deshalb fasziniert mich die Entwicklung der letzten Jahre so sehr. Denn inzwischen sind wir an einem Punkt angekommen, an dem Coding-Modelle in vielen Bereichen besser programmieren können als der überwiegende Teil der menschlichen Entwickler. Das muss man erst einmal so stehen lassen.

**KI ist heute ein unglaubliches Werkzeug.**  
Und ich glaube nicht, dass wir zu einer Welt zurückkehren werden, in der Programmierer wieder alles alleine schreiben. Im Gegenteil. Ich glaube, wir stehen erst am Anfang. Aber ich glaube auch, dass gerade etwas Interessantes passiert, über das viel zu wenig gesprochen wird.

### Ich bin aus der Cloud gegangen

Ich habe lange mit Cloud-KI gearbeitet. Wie vermutlich sehr viele Entwickler, die früh angefangen haben, mit diesen Systemen zu experimentieren. Aber irgendwann habe ich angefangen, mich zu fragen:

**Warum soll ich eigentlich meine gesamte Entwicklungsumgebung von einem fremden Server abhängig machen?**

Seit Mai arbeite ich deshalb zunehmend lokal. Mein Setup besteht inzwischen aus meinem normalen Entwicklungs-Stack, VS Code, Git, OpenCode, meiner eigenen Agenten-Infrastruktur und meinem **AAMS**-System (Autonomous Agent Manifest Specification – github.com/ogerly/AAMS). Und natürlich lokaler KI.

Mit den ersten lokalen Modellen war das noch eine ziemlich andere Geschichte. Ich habe unter anderem mit Qwen-Modellen gearbeitet. Auf meiner RTX 5090. Und plötzlich ist da dieser Moment, an dem ich mich frage:

**Warum brauche ich eigentlich noch ein Frontier-Modell in der Cloud?**  
Nicht für irgendwelche Spielereien. Sondern für meine tägliche Arbeit. Für Coding. Für Agenten. Für komplexe Aufgaben. Für mehrere Projekte.

Und genau dieser Moment ist meiner Meinung nach wesentlich interessanter, als er auf den ersten Blick aussieht. Denn ich glaube nicht, dass ich damit alleine bin.

### Der KAIROS-Moment

Es gab bei mir einen konkreten Moment, der meine Sicht auf das Thema nachhaltig verändert hat. Während eines größeren Projektes habe ich unter anderem ein System entwickelt, das ich **KAIROS** genannt habe.

Die Idee war relativ komplex: KI-generierte Daten sollten automatisiert ausgewertet werden. Das System sollte daraus Informationen extrahieren und diese später für das Gedächtnis beziehungsweise die Weiterentwicklung eines KI-Systems verwenden. Also vereinfacht gesagt: Die KI arbeitet – und währenddessen wird automatisch ausgewertet, was davon dauerhaft wichtig ist.

Ich hatte das System selbst konzipiert, architektiert und gebaut. Damals noch mit Cloud-KI im Entwicklungsprozess. Und irgendwann tauchte bei einem großen Cloud-Anbieter ein System namens **Kairos** auf. Ähnliche Richtung. Ähnliche Idee. Ähnlicher Name.

Und ich dachte zunächst einfach: Das kann Zufall sein. Natürlich kann es das. Ich möchte daraus auch keine Verschwörungstheorie machen. Vielleicht war die Idee einfach naheliegend. Vielleicht haben mehrere Menschen unabhängig voneinander über dasselbe Problem nachgedacht. Vielleicht ist es tatsächlich nur Zufall.

Aber bei mir hat dieser Moment eine Frage ausgelöst, die seitdem nicht mehr verschwunden ist:

**Was passiert eigentlich mit dem Wissen, das wir einer Cloud-KI während unserer täglichen Arbeit geben?**

### Wem gehört eigentlich das Wissen?

Ich meine damit nicht einmal primär meinen eigenen Code. Der ist austauschbar. Viel interessanter ist etwas anderes.

Wenn Millionen Entwickler jeden Tag mit KI arbeiten, dann passiert etwas Erstaunliches. Sie zeigen den Modellen nicht nur, **was** Code ist. Sie zeigen ihnen, **wie Menschen Probleme lösen**. Sie zeigen, wie man eine Architektur auswählt, wie man Fehler findet, wie man Tests schreibt, wie man eine API strukturiert, wie man ein Problem zerlegt, wie man schlechte Ansätze verwirft, wie man Debugging betreibt, wie man mit Legacy-Code umgeht, wie man komplexe Systeme versteht.

Und vor allem zeigen sie etwas, das in keinem einfachen Codebeispiel steht: **menschliche Denkwege**.

Genau daraus sind die heutigen Coding-Modelle so unglaublich stark geworden. Millionen von Entwicklern haben über Jahre mit diesen Systemen gearbeitet. Sie haben korrigiert. Sie haben verworfen. Sie haben verbessert. Sie haben erklärt. Sie haben ausprobiert. Und damit haben wir gemeinsam etwas geschaffen, das heute teilweise Fähigkeiten besitzt, die weit über das hinausgehen, was ein einzelner Entwickler leisten kann.

Das ist die unglaubliche Seite dieser Entwicklung. Aber genau hier beginnt auch mein eigentliches Problem.

### Was passiert, wenn diese Leute gehen?

Stell dir eine einfache Kausalkette vor.

Am Anfang kommen die Entwickler. Sie nutzen die Cloud. Sie programmieren mit den Modellen. Sie geben Feedback. Sie zeigen ihnen, wie man Probleme löst. Die Modelle werden besser. Immer besser. Irgendwann werden sie so gut, dass ein Entwickler mit entsprechender Erfahrung und einem guten Workflow enorme Produktivität erreicht.

Und dann passiert etwas Merkwürdiges. Genau diese Entwickler stellen plötzlich fest: **Ich kann das inzwischen lokal machen.**

Die Open-Source-Modelle holen auf. Die Hardware wird schneller. Die Quantisierung wird besser. Die Tools werden besser. Agenten werden besser. Und plötzlich reicht eine entsprechende lokale Maschine aus, um einen sehr leistungsfähigen Coding-Stack selbst zu betreiben.

Dann stellt sich die nächste Frage: **Warum sollte ich meine Daten noch in die Cloud schicken?**

Und genau hier könnte sich eine interessante Rückkopplung ergeben. Denn vielleicht verlassen gerade die Entwickler die Cloud, die für die Weiterentwicklung der Coding-Modelle besonders wertvoll sind. Nicht alle. Natürlich nicht. Aber möglicherweise ein relevanter Teil der Early Adopter. Die Leute, die neue Workflows bauen. Die Leute, die Agenten entwickeln. Die Leute, die Modelle bis an ihre Grenzen testen. Die Leute, die ständig neue Methoden ausprobieren. Die Leute, die nicht einfach nur KI benutzen, sondern anfangen, ihre eigene KI-Infrastruktur zu bauen.

### Der Hype könnte sich gerade drehen

Ich glaube deshalb, dass wir beim Coding gerade möglicherweise eine interessante Veränderung erleben. Der große Hype hat dafür gesorgt, dass unglaublich viele Entwickler Cloud-KI ausprobiert haben. Das war für die Modelle fantastisch. Denn dadurch entstanden enorme Mengen an Erfahrungen.

Aber irgendwann dreht sich die Kausalkette vielleicht um. Die Modelle werden so gut, dass die technisch versiertesten Anwender anfangen, ihre eigene Infrastruktur aufzubauen. Und dann gehen genau diese Menschen einen Schritt zurück. Nicht zurück von KI. **Zurück von der Cloud.**

Das ist ein entscheidender Unterschied. Ich höre nicht auf, KI zu verwenden. Ganz im Gegenteil. Ich verwende KI mehr als jemals zuvor. Ich möchte sie nur selbst betreiben.

### Lokal bedeutet nicht gegen KI

Das wird meiner Meinung nach häufig falsch verstanden. Wenn ich von lokaler KI spreche, meine ich nicht: Cloud schlecht, lokale KI gut. So einfach ist es nicht.

Cloud-Modelle sind fantastisch. Die heutigen Frontier-Modelle sind teilweise absurd leistungsfähig. Ein einzelner Mensch kann Fähigkeiten nutzen, die er selbst niemals besitzen könnte. Ich kann nicht gleichzeitig Millionen Codebeispiele analysieren. Ich kann nicht Milliarden von Informationen parallel verarbeiten. Ich kann nicht innerhalb von Sekunden tausende mögliche Lösungswege miteinander vergleichen. Eine KI kann das zumindest teilweise.

**Deshalb ist KI für mich das Nonplusultra als Werkzeug für Programmierer.** Daran wird sich auch nichts ändern. Die entscheidende Frage lautet für mich vielmehr: **Wer kontrolliert dieses Werkzeug?**

### Zentralisierung gegen Souveränität

Und damit kommen wir zu einem viel größeren Thema. Wir erleben momentan zwei sehr unterschiedliche Philosophien.

Auf der einen Seite stehen die großen westlichen KI-Anbieter. Extrem hohe Investitionen. Gigantische Rechenzentren. Zentrale Modelle. Cloud-Abhängigkeiten. Abonnements. API-Zugänge. Monetarisierung.

Auf der anderen Seite entwickelt sich eine Welt aus offenen Modellen, lokaler Hardware und immer leistungsfähigeren Systemen, die jeder selbst betreiben kann.

Ich möchte dabei ausdrücklich nicht behaupten, dass die eine Seite gut und die andere Seite schlecht ist. So einfach funktioniert die Welt nicht. Auch Open Source hat seine Probleme. Auch lokale KI hat Grenzen. Und natürlich entstehen die leistungsfähigsten Modelle nicht kostenlos. Die Entwicklung kostet enorme Summen.

Aber ich halte einen Gedanken für wichtig: **KI ist möglicherweise zu bedeutend, um sie ausschließlich als zentralisierten kommerziellen Dienst zu betrachten.** Denn KI wird nicht irgendein weiteres Softwareprodukt sein. KI wird eine grundlegende Infrastruktur. Für Wissen. Für Bildung. Für Forschung. Für Programmierung. Für Wirtschaft. Für Kommunikation. Vielleicht irgendwann für nahezu jeden Bereich unseres Lebens.

### Das Internet hätte auch zentral sein können

Man kann sich eine ähnliche Entwicklung beim Internet vorstellen. Wir könnten ein vollständig zentralisiertes Informationssystem haben. Ein paar große Betreiber kontrollieren die Server. Ein paar Unternehmen kontrollieren die Zugänge. Ein paar Unternehmen kontrollieren die Daten. Aber das Internet hat sich anders entwickelt. Dezentralisierung war immer ein Teil seiner Stärke.

Und genau diese Idee fasziniert mich auch bei lokaler KI. Nicht eine einzige Maschine, die für alle denkt. Sondern Millionen Maschinen, die lokal denken können.

### Das eigentliche Problem ist die Mensch-Komponente

Und hier komme ich wieder zu meiner ursprünglichen These zurück. Die heutigen Modelle sind so stark, weil Menschen ihnen gezeigt haben, wie Menschen arbeiten. Gerade beim Programmieren ist das offensichtlich.

Ein guter Entwickler schreibt nicht einfach Code. Er denkt. Er entscheidet. Er verwirft. Er zweifelt. Er testet. Er verändert seine Meinung. Er kennt zehn schlechte Lösungen und weiß deshalb, warum die elfte besser ist. Dieses Wissen ist unglaublich wertvoll. Und genau dieses Wissen fließt – direkt oder indirekt – in die Entwicklung von KI-Systemen ein.

Was passiert also, wenn ein Teil dieser Menschen seine Arbeitsweise verändert? Wenn sie anfangen, lokal zu arbeiten? Wenn ihre Daten nicht mehr in den gleichen Cloud-Systemen landen? Wenn sie ihre eigenen Agenten bauen? Wenn sie ihre eigenen Modelle betreiben? Wenn sie anfangen, ihre eigene Infrastruktur zu entwickeln?

Dann könnte irgendwann etwas fehlen. Nicht unbedingt Wissen im klassischen Sinne. Sondern **Erfahrung**. Die Erfahrung der Menschen, die die Systeme an ihre Grenzen bringen.

### Vielleicht verlieren die großen Modelle genau das, was sie groß gemacht hat

Das ist meine eigentliche Vermutung. Nicht mehr. Aber auch nicht weniger.

Ich behaupte nicht, dass die großen Modelle morgen schlechter werden. Im Gegenteil. Sie werden wahrscheinlich noch unglaublich viel besser werden. Vielleicht sogar dramatisch besser. Denn sie verfügen bereits über riesige Mengen an Wissen und Erfahrung.

Aber ich frage mich, ob langfristig eine Art Entkopplung entsteht. Die Modelle wurden unter anderem deshalb so gut, weil die besten Entwickler sie benutzt und mit ihnen gearbeitet haben. Und wenn genau diese Entwickler irgendwann sagen: „Ich brauche euch nicht mehr. Ich betreibe mein eigenes System.“ – dann verändert das die Datenbasis der Zukunft. Vielleicht langsam. Vielleicht kaum messbar. Vielleicht aber auch viel stärker, als wir heute denken.

### Und dann wird es politisch

An dieser Stelle wird es schwierig. Denn KI ist längst keine reine Technologiefrage mehr. Es geht um Macht. Um Wissen. Um Infrastruktur. Um wirtschaftliche Abhängigkeiten. Und um die Frage, wer Zugriff auf diese Technologie hat.

Ich sehe dabei durchaus Unterschiede zwischen verschiedenen Herangehensweisen. Aber auch hier möchte ich nicht in das einfache Schema abrutschen. Das wäre genauso falsch. Beide Systeme haben ihre Vor- und Nachteile.

Was mich interessiert, ist die grundsätzliche Frage dahinter: **Soll KI vor allem ein Produkt sein, das wir konsumieren? Oder soll KI eine Technologie sein, die Menschen befähigt, unabhängiger zu werden?**

Denn wenn jeder für seine KI ein monatliches Abo braucht, seine Daten irgendwo hochlädt und für jede Nutzung einen zentralen Anbieter benötigt, entsteht zwangsläufig Abhängigkeit. Wenn dagegen leistungsfähige Modelle lokal betrieben werden können, verändert sich dieses Verhältnis. Dann wird aus dem Konsumenten wieder ein Betreiber. Und das halte ich für einen enorm wichtigen Unterschied.

### Vielleicht ist das der nächste Schritt

Ich glaube deshalb nicht, dass lokale KI eine Gegenbewegung zur künstlichen Intelligenz ist. Ich glaube, sie ist möglicherweise der nächste logische Schritt.

Erst haben wir KI entdeckt. Dann haben wir sie in die Cloud gestellt. Dann haben wir sie immer größer und leistungsfähiger gemacht. Und jetzt beginnen wir damit, sie wieder zu verteilen. Auf unsere Rechner. Auf unsere Server. In unsere Netzwerke. In unsere eigenen Systeme.

Vielleicht wird KI damit nicht weniger mächtig. Vielleicht wird sie dadurch sogar mächtiger. Denn ein dezentrales System kann Dinge ermöglichen, die ein zentralisiertes System niemals in der gleichen Form leisten kann.

### Ich glaube, wir stehen an einem Wendepunkt

Meine RTX 5090 auf dem Schreibtisch ist natürlich kein Ersatz für einen gigantischen Rechenzentrumspark. Das wäre lächerlich. Aber darum geht es auch nicht.

Es geht darum, dass ich heute mit einer einzigen Maschine und einem modernen lokalen Modell Dinge machen kann, für die ich vor nicht allzu langer Zeit zwingend einen Cloud-Dienst gebraucht hätte. Und genau diese Entwicklung wird weitergehen.

Die Hardware wird schneller. Die Modelle werden effizienter. Die Open-Source-Community wird besser. Die Agenten werden besser. Die lokalen Workflows werden besser.

Und irgendwann ist die Frage vielleicht nicht mehr: **„Welches KI-Abo hast du?“**  
Sondern: **„Welche KI betreibst du selbst?“**

Das wäre für mich eine ziemlich spannende Zukunft. Denn dann wäre KI nicht mehr nur etwas, das wir benutzen. Dann wäre KI etwas, das wir **besitzen, verändern, verstehen und selbst betreiben können.**

Und vielleicht ist genau das die eigentliche nächste Revolution. Nicht bessere Cloud-KI. Sondern **souveräne KI**.



# Und dann kommt NVIDIA

Und genau in diesem Zusammenhang ist etwas passiert, das ich für bemerkenswert halte.

NVIDIA hat Anfang September 2026 angekündigt, Hugging Face für rund **12,93 Milliarden US-Dollar** zu übernehmen. Hugging Face ist einer der zentralen Orte der Open-Model-Welt: Entwickler, Forscher und Unternehmen teilen dort Modelle, Datensätze und Anwendungen und entwickeln sie gemeinsam weiter. NVIDIA selbst spricht von mehr als 18 Millionen Entwicklern, Forschern und Creators sowie mehr als drei Millionen Modellen auf der Plattform.

Natürlich sagt dieser Deal zunächst einmal nichts über meine These aus.

NVIDIA sagt nicht: „Die besten Coder verlassen die Cloud.“

NVIDIA sagt auch nicht: „Wir müssen deshalb Hugging Face kaufen.“

Im Gegenteil: NVIDIA betont ausdrücklich, dass Hugging Face offen bleiben und weiterhin unterschiedliche Modelle, Frameworks, Cloud-Anbieter und Hardware unterstützen soll.

Aber wenn ich meine gesamte vorherige Kausalkette danebenlege, wirkt dieser Schritt für mich bemerkenswert logisch.

Denn wenn sich KI tatsächlich ein Stück weit von zentralen, geschlossenen Cloud-Modellen hin zu offenen Gewichten, lokalen Modellen und souveräner Infrastruktur verschiebt, dann liegt dort ein enorm wichtiger Teil der Zukunft.

Hugging Face ist genau einer dieser Orte.

Hier treffen sich Modelle, Entwickler, Experimente, Datensätze und neue Ideen. Hier wird ausprobiert, was mit offenen Modellen möglich ist. Hier entsteht ein Teil genau jener technischen Erfahrung, über die ich in diesem Artikel gesprochen habe.

Und NVIDIA sitzt gleichzeitig auf der anderen Seite dieser Entwicklung:

**auf der Hardware.**

Chips und Plattform.

Rechenleistung und Modellökosystem.

Hardware und Distribution.

Für mich ist deshalb die Übernahme mehr als nur ein weiterer Milliarden-Deal in der KI-Branche.

Sie wirkt wie ein Hinweis darauf, dass selbst die größten Player erkannt haben, dass die Zukunft der KI möglicherweise nicht ausschließlich in immer größeren zentralen Cloud-Modellen liegt.

Vielleicht liegt ein Teil der Zukunft genau dort, wo die Entwickler ihre Modelle selbst in die Hand nehmen.

Wo Open Weight wichtiger wird.

Wo lokale Inferenz funktioniert.

Wo Menschen ihre eigene KI-Infrastruktur aufbauen.

Und genau deshalb empfinde ich diesen Deal als bemerkenswert.

**Nicht als Beweis für meine These.**

Aber als eine Entwicklung, die erstaunlich gut zu ihr passt.

Vielleicht erleben wir gerade tatsächlich den Anfang einer Verschiebung:

Erst haben wir der Cloud beigebracht, wie wir arbeiten.

Dann wurden die Modelle so gut, dass wir sie lokal betreiben konnten.

Und jetzt beginnen die großen Player damit, sich genau die Infrastruktur zu sichern, in der diese neue offene Welt entsteht.

Vielleicht ist das Zufall.

Vielleicht ist es Strategie.

Vielleicht ist es einfach die ganz normale nächste Phase dieser Technologie.

Ich weiß es nicht.

Aber ich werde genau beobachten, was als Nächstes passiert.

Denn eines glaube ich inzwischen ziemlich sicher:

**Die Zukunft der KI wird nicht nur in den Rechenzentren der großen Anbieter entschieden.**

Sie wird auch auf den Schreibtischen von Entwicklern entschieden.

Auf unseren GPUs.

Mit unseren lokalen Modellen.

Und vielleicht vor allem mit der Frage, **wer eigentlich die Kontrolle über das Wissen und die Werkzeuge besitzt, mit denen wir diese Zukunft bauen.**









# Version ChatGPT

## Wenn die besten Coder die Cloud verlassen

*Ein Gedanke über lokale KI, Coding-Modelle, menschliches Wissen und die Frage, was passiert, wenn die Early Adopter plötzlich nicht mehr mitmachen.*

Ich programmiere seit über 20 Jahren.

Angefangen habe ich zu einer Zeit, in der man Code noch wirklich Zeile für Zeile geschrieben hat. Keine Agenten, keine Coding-Modelle, keine KI, die einem innerhalb von Sekunden einen halben Lösungsweg auf den Bildschirm zaubert.

Man musste wissen, was man tut.

Und genau deshalb fasziniert mich die Entwicklung der letzten Jahre so sehr.

Denn inzwischen sind wir an einem Punkt angekommen, an dem Coding-Modelle in vielen Bereichen besser programmieren können als der überwiegende Teil der menschlichen Entwickler.

Das muss man erst einmal so stehen lassen.

**KI ist heute ein unglaubliches Werkzeug.**

Und ich glaube nicht, dass wir zu einer Welt zurückkehren werden, in der Programmierer wieder alles alleine schreiben.

Im Gegenteil.

Ich glaube, wir stehen erst am Anfang.

Aber ich glaube auch, dass gerade etwas Interessantes passiert, über das viel zu wenig gesprochen wird.

---

## Ich bin aus der Cloud gegangen

Ich habe lange mit Cloud-KI gearbeitet.

Wie vermutlich sehr viele Entwickler, die früh angefangen haben, mit diesen Systemen zu experimentieren.

Aber irgendwann habe ich angefangen, mich zu fragen:

**Warum soll ich eigentlich meine gesamte Entwicklungsumgebung von einem fremden Server abhängig machen?**

Seit Mai arbeite ich deshalb zunehmend lokal.

Mein Setup besteht inzwischen aus meinem normalen Entwicklungs-Stack, VS Code, Git, OpenCode, meiner eigenen Agenten-Infrastruktur und meinem AAMS-System.

Und natürlich lokaler KI.

Mit den ersten lokalen Modellen war das noch eine ziemlich andere Geschichte.

Ich habe unter anderem mit Qwen 3.6 35B gearbeitet. Das Modell war für meine Arbeitsweise bereits erstaunlich gut.

Aber inzwischen bin ich bei Qwen 3.8 27B angekommen.

Auf meiner RTX 5090.

Und plötzlich ist da dieser Moment, an dem ich mich frage:

**Warum brauche ich eigentlich noch ein Frontier-Modell in der Cloud?**

Nicht für irgendwelche Spielereien.

Sondern für meine tägliche Arbeit.

Für Coding.

Für Agenten.

Für komplexe Aufgaben.

Für mehrere Projekte.

Und genau dieser Moment ist meiner Meinung nach wesentlich interessanter, als er auf den ersten Blick aussieht.

Denn ich glaube nicht, dass ich damit alleine bin.

---

## Der KAIROS-Moment

Es gab bei mir einen konkreten Moment, der meine Sicht auf das Thema nachhaltig verändert hat.

Während eines größeren Projektes habe ich unter anderem ein System entwickelt, das ich **KAIROS** genannt habe.

Die Idee war relativ komplex.

KI-generierte Daten sollten automatisiert ausgewertet werden. Das System sollte daraus Informationen extrahieren und diese später für das Gedächtnis beziehungsweise die Weiterentwicklung eines KI-Systems verwenden.

Also vereinfacht gesagt:

**Die KI arbeitet – und währenddessen wird automatisch ausgewertet, was davon dauerhaft wichtig ist.**

Ich hatte das System selbst konzipiert, architektiert und gebaut.

Damals noch mit Cloud-KI im Entwicklungsprozess.

Und irgendwann tauchte bei einem großen Cloud-Anbieter ein System namens **Kairos** auf.

Ähnliche Richtung.

Ähnliche Idee.

Ähnlicher Name.

Und ich dachte zunächst einfach:

> Das kann Zufall sein.

Natürlich kann es das.

Ich möchte daraus auch keine Verschwörungstheorie machen.

Vielleicht war die Idee einfach naheliegend.

Vielleicht haben mehrere Menschen unabhängig voneinander über dasselbe Problem nachgedacht.

Vielleicht ist es tatsächlich nur Zufall.

Aber bei mir hat dieser Moment eine Frage ausgelöst, die seitdem nicht mehr verschwunden ist:

**Was passiert eigentlich mit dem Wissen, das wir einer Cloud-KI während unserer täglichen Arbeit geben?**

---

## Wem gehört eigentlich das Wissen?

Ich meine damit nicht einmal primär meinen eigenen Code.

Der ist austauschbar.

Viel interessanter ist etwas anderes.

Wenn Millionen Entwickler jeden Tag mit KI arbeiten, dann passiert etwas Erstaunliches.

Sie zeigen den Modellen nicht nur, **was** Code ist.

Sie zeigen ihnen, **wie Menschen Probleme lösen**.

Sie zeigen:

* wie man eine Architektur auswählt,
* wie man Fehler findet,
* wie man Tests schreibt,
* wie man eine API strukturiert,
* wie man ein Problem zerlegt,
* wie man schlechte Ansätze verwirft,
* wie man Debugging betreibt,
* wie man mit Legacy-Code umgeht,
* wie man komplexe Systeme versteht.

Und vor allem zeigen sie etwas, das in keinem einfachen Codebeispiel steht:

**menschliche Denkwege.**

Genau daraus sind die heutigen Coding-Modelle so unglaublich stark geworden.

Millionen von Entwicklern haben über Jahre mit diesen Systemen gearbeitet.

Sie haben korrigiert.

Sie haben verworfen.

Sie haben verbessert.

Sie haben erklärt.

Sie haben ausprobiert.

Und damit haben wir gemeinsam etwas geschaffen, das heute teilweise Fähigkeiten besitzt, die weit über das hinausgehen, was ein einzelner Entwickler leisten kann.

Das ist die unglaubliche Seite dieser Entwicklung.

Aber genau hier beginnt auch mein eigentliches Problem.

---

# Was passiert, wenn diese Leute gehen?

Stell dir eine einfache Kausalkette vor.

Am Anfang kommen die Entwickler.

Sie nutzen die Cloud.

Sie programmieren mit den Modellen.

Sie geben Feedback.

Sie zeigen ihnen, wie man Probleme löst.

Die Modelle werden besser.

Immer besser.

Irgendwann werden sie so gut, dass ein Entwickler mit entsprechender Erfahrung und einem guten Workflow enorme Produktivität erreicht.

Und dann passiert etwas Merkwürdiges.

Genau diese Entwickler stellen plötzlich fest:

**Ich kann das inzwischen lokal machen.**

Die Open-Source-Modelle holen auf.

Die Hardware wird schneller.

Die Quantisierung wird besser.

Die Tools werden besser.

Agenten werden besser.

Und plötzlich reicht eine entsprechende lokale Maschine aus, um einen sehr leistungsfähigen Coding-Stack selbst zu betreiben.

Dann stellt sich die nächste Frage:

**Warum sollte ich meine Daten noch in die Cloud schicken?**

Und genau hier könnte sich eine interessante Rückkopplung ergeben.

Denn vielleicht verlassen gerade die Entwickler die Cloud, die für die Weiterentwicklung der Coding-Modelle besonders wertvoll sind.

Nicht alle.

Natürlich nicht.

Aber möglicherweise ein relevanter Teil der Early Adopter.

Die Leute, die neue Workflows bauen.

Die Leute, die Agenten entwickeln.

Die Leute, die Modelle bis an ihre Grenzen testen.

Die Leute, die ständig neue Methoden ausprobieren.

Die Leute, die nicht einfach nur KI benutzen, sondern anfangen, ihre eigene KI-Infrastruktur zu bauen.

---

## Der Hype könnte sich gerade drehen

Ich glaube deshalb, dass wir beim Coding gerade möglicherweise eine interessante Veränderung erleben.

Der große Hype hat dafür gesorgt, dass unglaublich viele Entwickler Cloud-KI ausprobiert haben.

Das war für die Modelle fantastisch.

Denn dadurch entstanden enorme Mengen an Erfahrungen.

Aber irgendwann dreht sich die Kausalkette vielleicht um.

Die Modelle werden so gut, dass die technisch versiertesten Anwender anfangen, ihre eigene Infrastruktur aufzubauen.

Und dann gehen genau diese Menschen einen Schritt zurück.

Nicht zurück von KI.

**Zurück von der Cloud.**

Das ist ein entscheidender Unterschied.

Ich höre nicht auf, KI zu verwenden.

Ganz im Gegenteil.

Ich verwende KI mehr als jemals zuvor.

Ich möchte sie nur selbst betreiben.

---

# Lokal bedeutet nicht gegen KI

Das wird meiner Meinung nach häufig falsch verstanden.

Wenn ich von lokaler KI spreche, meine ich nicht:

> Cloud schlecht, lokale KI gut.

So einfach ist es nicht.

Cloud-Modelle sind fantastisch.

Die heutigen Frontier-Modelle sind teilweise absurd leistungsfähig.

Ein einzelner Mensch kann Fähigkeiten nutzen, die er selbst niemals besitzen könnte.

Ich kann nicht gleichzeitig Millionen Codebeispiele analysieren.

Ich kann nicht Milliarden von Informationen parallel verarbeiten.

Ich kann nicht innerhalb von Sekunden tausende mögliche Lösungswege miteinander vergleichen.

Eine KI kann das zumindest teilweise.

**Deshalb ist KI für mich das Nonplusultra als Werkzeug für Programmierer.**

Daran wird sich auch nichts ändern.

Die entscheidende Frage lautet für mich vielmehr:

**Wer kontrolliert dieses Werkzeug?**

---

# Zentralisierung gegen Souveränität

Und damit kommen wir zu einem viel größeren Thema.

Wir erleben momentan zwei sehr unterschiedliche Philosophien.

Auf der einen Seite stehen die großen westlichen KI-Anbieter.

Extrem hohe Investitionen.

Gigantische Rechenzentren.

Zentrale Modelle.

Cloud-Abhängigkeiten.

Abonnements.

API-Zugänge.

Monetarisierung.

Auf der anderen Seite entwickelt sich eine Welt aus offenen Modellen, lokaler Hardware und immer leistungsfähigeren Systemen, die jeder selbst betreiben kann.

Ich möchte dabei ausdrücklich nicht behaupten, dass die eine Seite gut und die andere Seite schlecht ist.

So einfach funktioniert die Welt nicht.

Auch Open Source hat seine Probleme.

Auch lokale KI hat Grenzen.

Und natürlich entstehen die leistungsfähigsten Modelle nicht kostenlos.

Die Entwicklung kostet enorme Summen.

Aber ich halte einen Gedanken für wichtig:

**KI ist möglicherweise zu bedeutend, um sie ausschließlich als zentralisierten kommerziellen Dienst zu betrachten.**

Denn KI wird nicht irgendein weiteres Softwareprodukt sein.

KI wird eine grundlegende Infrastruktur.

Für Wissen.

Für Bildung.

Für Forschung.

Für Programmierung.

Für Wirtschaft.

Für Kommunikation.

Vielleicht irgendwann für nahezu jeden Bereich unseres Lebens.

---

# Das Internet hätte auch zentral sein können

Man kann sich eine ähnliche Entwicklung beim Internet vorstellen.

Wir könnten ein vollständig zentralisiertes Informationssystem haben.

Ein paar große Betreiber kontrollieren die Server.

Ein paar Unternehmen kontrollieren die Zugänge.

Ein paar Unternehmen kontrollieren die Daten.

Aber das Internet hat sich anders entwickelt.

Dezentralisierung war immer ein Teil seiner Stärke.

Und genau diese Idee fasziniert mich auch bei lokaler KI.

Ich könnte theoretisch auf jedem Dach der Welt Solarzellen installieren und intelligente Energiesysteme miteinander verbinden.

Nicht ein einziges gigantisches Kraftwerk.

Sondern Millionen kleiner Einheiten.

Dezentral.

Robust.

Unabhängig.

Dasselbe Prinzip kann man auf Wissen übertragen.

Und vielleicht auch auf KI.

**Nicht eine einzige Maschine, die für alle denkt.**

Sondern Millionen Maschinen, die lokal denken können.

---

# Das eigentliche Problem ist die Mensch-Komponente

Und hier komme ich wieder zu meiner ursprünglichen These zurück.

Die heutigen Modelle sind so stark, weil Menschen ihnen gezeigt haben, wie Menschen arbeiten.

Gerade beim Programmieren ist das offensichtlich.

Ein guter Entwickler schreibt nicht einfach Code.

Er denkt.

Er entscheidet.

Er verwirft.

Er zweifelt.

Er testet.

Er verändert seine Meinung.

Er kennt zehn schlechte Lösungen und weiß deshalb, warum die elfte besser ist.

Dieses Wissen ist unglaublich wertvoll.

Und genau dieses Wissen fließt – direkt oder indirekt – in die Entwicklung von KI-Systemen ein.

Was passiert also, wenn ein Teil dieser Menschen seine Arbeitsweise verändert?

Wenn sie anfangen, lokal zu arbeiten?

Wenn ihre Daten nicht mehr in den gleichen Cloud-Systemen landen?

Wenn sie ihre eigenen Agenten bauen?

Wenn sie ihre eigenen Modelle betreiben?

Wenn sie anfangen, ihre eigene Infrastruktur zu entwickeln?

Dann könnte irgendwann etwas fehlen.

Nicht unbedingt Wissen im klassischen Sinne.

Sondern **Erfahrung**.

Die Erfahrung der Menschen, die die Systeme an ihre Grenzen bringen.

---

# Vielleicht verlieren die großen Modelle genau das, was sie groß gemacht hat

Das ist meine eigentliche Vermutung.

Nicht mehr.

Aber auch nicht weniger.

Ich behaupte nicht, dass die großen Modelle morgen schlechter werden.

Im Gegenteil.

Sie werden wahrscheinlich noch unglaublich viel besser werden.

Vielleicht sogar dramatisch besser.

Denn sie verfügen bereits über riesige Mengen an Wissen und Erfahrung.

Aber ich frage mich, ob langfristig eine Art Entkopplung entsteht.

Die Modelle wurden unter anderem deshalb so gut, weil die besten Entwickler sie benutzt und mit ihnen gearbeitet haben.

Und wenn genau diese Entwickler irgendwann sagen:

> „Ich brauche euch nicht mehr. Ich betreibe mein eigenes System.“

dann verändert das die Datenbasis der Zukunft.

Vielleicht langsam.

Vielleicht kaum messbar.

Vielleicht aber auch viel stärker, als wir heute denken.

---

# Und dann wird es politisch

An dieser Stelle wird es schwierig.

Denn KI ist längst keine reine Technologiefrage mehr.

Es geht um Macht.

Um Wissen.

Um Infrastruktur.

Um wirtschaftliche Abhängigkeiten.

Und um die Frage, wer Zugriff auf diese Technologie hat.

Ich sehe dabei durchaus Unterschiede zwischen der westlichen und der chinesischen Herangehensweise.

Aber auch hier möchte ich nicht in das einfache Schema „China gut, Amerika schlecht“ abrutschen.

Das wäre genauso falsch.

Beide Systeme haben ihre Vor- und Nachteile.

Was mich interessiert, ist die grundsätzliche Frage dahinter:

**Soll KI vor allem ein Produkt sein, das wir konsumieren?**

Oder soll KI eine Technologie sein, die Menschen befähigt, unabhängiger zu werden?

Denn wenn jeder für seine KI ein monatliches Abo braucht, seine Daten irgendwo hochlädt und für jede Nutzung einen zentralen Anbieter benötigt, entsteht zwangsläufig Abhängigkeit.

Wenn dagegen leistungsfähige Modelle lokal betrieben werden können, verändert sich dieses Verhältnis.

Dann wird aus dem Konsumenten wieder ein Betreiber.

Und das halte ich für einen enorm wichtigen Unterschied.

---

# Vielleicht ist das der nächste Schritt

Ich glaube deshalb nicht, dass lokale KI eine Gegenbewegung zur künstlichen Intelligenz ist.

Ich glaube, sie ist möglicherweise der nächste logische Schritt.

Erst haben wir KI entdeckt.

Dann haben wir sie in die Cloud gestellt.

Dann haben wir sie immer größer und leistungsfähiger gemacht.

Und jetzt beginnen wir damit, sie wieder zu verteilen.

Auf unsere Rechner.

Auf unsere Server.

In unsere Netzwerke.

In unsere eigenen Systeme.

Vielleicht wird KI damit nicht weniger mächtig.

Vielleicht wird sie dadurch sogar mächtiger.

Denn ein dezentrales System kann Dinge ermöglichen, die ein zentralisiertes System niemals in der gleichen Form leisten kann.

---

# Ich glaube, wir stehen an einem Wendepunkt

Meine RTX 5090 auf dem Schreibtisch ist natürlich kein Ersatz für einen gigantischen Rechenzentrumspark.

Das wäre lächerlich.

Aber darum geht es auch nicht.

Es geht darum, dass ich heute mit einer einzigen Maschine und einem modernen lokalen Modell Dinge machen kann, für die ich vor nicht allzu langer Zeit zwingend einen Cloud-Dienst gebraucht hätte.

Und genau diese Entwicklung wird weitergehen.

Die Hardware wird schneller.

Die Modelle werden effizienter.

Die Open-Source-Community wird besser.

Die Agenten werden besser.

Die lokalen Workflows werden besser.

Und irgendwann ist die Frage vielleicht nicht mehr:

**„Welches KI-Abo hast du?“**

Sondern:

**„Welche KI betreibst du selbst?“**

Das wäre für mich eine ziemlich spannende Zukunft.

Denn dann wäre KI nicht mehr nur etwas, das wir benutzen.

Dann wäre KI etwas, das wir **besitzen, verändern, verstehen und selbst betreiben können.**

Und vielleicht ist genau das die eigentliche nächste Revolution.

Nicht bessere Cloud-KI.

Sondern **souveräne KI.**
