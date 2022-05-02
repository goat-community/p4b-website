---
permalink: "/de/mapillary/"
title: Erhebung von Mapillary Aufnahmen für Fürstenfeldbruck
author: ramirez
lang: de
tags:
- de
categories:
- Daten
thumbnail: "/images/blog/mapillary/mapillary_bike-thumbnail.webp"
image: "/images/blog/mapillary/mapillary_bike-banner.webp"
summary: Im Rahmen der Übertragung von GOAT auf Fürstenfeldbruck haben wir die gesamte
  Stadt mit Mapillary erhoben und somit eine wertvolle Datenquelle erzeugt.
date: 2020-04-25

---
## Datenbedarf

Daten, Daten und noch mehr Daten! Im Rahmen unserer Arbeit beim [mFUND Projekt](https://www.bmvi.de/SharedDocs/DE/Artikel/DG/mfund-projekte/GOAT.html), haben wir die Funktionen von GOAT auf die Gemeinde Fürstenfeldbruck übertragen. Um dies zu bewerkstelligen, haben wir nach verfügbaren Daten aus unterschiedlichen Quellen gesucht.

OpenStreetMap war, wie immer, eine hilfreiche Informationsquelle, dennoch haben viele Details gefehlt. Deshalb haben wir uns [Mapillary](https://www.mapillary.com/) zu Nutze gemacht. Mapillary kann als „das Google Street View der Open Source Community“ beschrieben werden. Menschen aus aller Welt haben Bildmaterial von Millionen von Kilometern an städtischen Straßen, Fußgänger- oder Fahrradwegen aufgenommen. Von ihren Autos aus, beim Fahrradfahren oder auch einfach im Zufußgehen. Das Ziel ist es, eine aktuelle Quelle für das Geschehen auf den Straßen zu erhalten. Das ist aber noch längst nicht alles. Das Besondere an Mapillary ist die KI-basierte Objekterkennung. So können verschiedenste Objekte (Verkehrsschilder, Hydranten, Fahrbahnmarkierungen, Fahrradständer etc.) automatisch auf den Bildern erkannt und so ihre räumliche Position auf der Karte ermittelt werden.

## Mapillary in Fürstenfeldbruck

Da in Fürstenfeldbruck lediglich ein kleiner Teil des Straßennetzwerkes im Vorfeld bereits in Mapillary erfasst war, haben wir uns dazu entschieden, raus zu gehen und die Bilder selbst aufzunehmen. Dieser Screenshot zeigt, welchen Bereich wir bisher abgedeckt haben:

![Die Abdeckung von Fürstenfeldbruck in Mapillary.](/images/blog/mapillary/mapillary_ffb.webp "Erfasste Wege in Fürstenfeldbruck")

_Abbildung 1. Das Gebiet in Fürstenfeldbruck und die erfassten Wege_

Um zu lernen, mit Mapillary zu arbeiten, haben wir zunächst einige Tests in München durchgeführt, bevor wir nach Fürstenfeldbruck gefahren sind. Dabei haben wir unterschiedliche Kameras und Haltevorrichtungen zur Befestigung des Handys bzw. der GoPro am Fahrrad, sowie verschiedene Einstellungen für die Aufnahme und unterschiedliche Funktionen der App ausprobiert. Vor allem der hohe Batterieverbrauch und der hohe Speicherplatzbedarf für die Bilder stellten sich als Herausforderungen dar. Als bestes Setup erwies sich die GoPro für die Bilder in Kombination mit einem Handy zur Aufnahme der GPS-Tracks und zur Orientierung (Norden – Süden) sowie eine zusätzliche Powerbank.

![Fahrrad mit befestigter GoPro in einer S-Bahn.](/images/blog/mapillary/mapillary_bike.webp "Mit dem Fahrrad auf dem Weg nach Fürstenfeldbruck.")

_Abbildung 2. Fahrrad mit GoPro in der S-Bahn, aufgenommen auf dem Weg nach Fürstenfeldbruck_

Bisher haben wir innerhalb dieses Gebietes 210 km in 8 Tagen erfasst. Verglichen mit der, in der Planungszeit geschätzten Arbeitszeit (5 Tage für 240km), war die tatsächliche Arbeitszeit ca. 2:30 Stunden pro Tag (durch die Akkulaufzeit begrenzt) und die durchschnittliche Geschwindigkeit beim Fahrradfahren lag bei ca. 10km/h. Der erhöhte Zeitaufwand liegt u.a. daran, dass es notwendig war, einige Straßenabschnitte mehrmals zu befahren, um in alle Teile des Straßennetzwerks zu gelangen. Ein paar wenige Bereiche und Fußgängerwege sind aktuell noch übrig, aber die meisten Straßenabschnitte sind nun abgedeckt. Um dieser geringen Bilderfassungsrate entgegen zu wirken, haben wir uns an einem Tag mit vier Mitgliedern der GOAT-Community getroffen und die umliegenden Ortschaften fotografiert.

## Gemeinschaftliche Erhebung

Um diese Aufgabe zu organisieren, haben wir bei Mapillary die Funktion „Capture projects“ genutzt. Mit dieser Funktion kann der Nutzende die Umrisse des Bereichs, der erfasst werden soll, definieren. In unserem Fall Fürstenfeldbruck. Im Anschluss daran, werden die Umrisse in Teilbereiche unterteilt, die als „tasks“, also als Aufgaben, bezeichnet und den „Drivern“ (Mitgliedern der Gruppe) zugeteilt (Abbildung 3). Bevor wir in das Untersuchungsgebiet gefahren sind, musste jedes Mitglied zunächst die App „Mapillary Driver“ herunterladen. Dort können alle „Driver“ sehen, welcher Teilbereich ihnen zugewiesen wurde und welche Straßen noch erhoben werden müssen. So war es sehr einfach, die Aufgaben zu koordinieren und das komplette Gebiet mit Bildaufnahmen abzudecken.

![Unterteilung von Fürstenfeldbruck in tasks in Mapillary Driver.](/images/blog/mapillary/mapillary_tasks.webp "Karte von Fürstenfeldbruck")

_Abbildung 3. Das Gebiet in Fürstenfeldbruck, aufgeteilt nach Aufgaben und Zuordnung der einzelnen Fahrer:innen_

Durch diese Arbeiten liefern wir neue Daten und verbessern die bereits bestehen Daten zur Weiterentwicklung der GOAT-Funktionen in Fürstenfeldbruck. Gleichzeitig freuen wir uns aber auch sehr, die Daten mit allen Interessierten zu teilen. Die Informationen aus den Bildern und die KI-Algorithmen von Mapillary helfen u.a. dabei, die OSM-Daten zu verbessern und somit eine genauere Berechnungsgrundlage für das Routing zu schaffen.

## Einbindung der Aufnahmen in GOAT

Die Möglichkeit, aktuelle Bilder zu sehen, erleichtert außerdem die Analyse der Straße aus der Ferne.

<iframe data-uk-responsive class="embed-responsive-item" src="https://player.vimeo.com/video/411741106?texttrack=en&autoplay=1&loop=1&autopause=0" allow="autoplay; fullscreen" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen width="1920" height="1080"></iframe>

_Abbildung 4. Die Mapillary Bilder können nun direkt in GOAT eingesehen werden_

So können Details überprüft werden, wie die Qualität von Geh- und Radwegen; Flächennutzung (wie auf den untenstehenden Bildern dargestellt, ist es möglich, Wohngebiete mit 30er Zonen oder verkehrsberuhigten Straßen, Gewerbegebiete zur Analyse der Parkplatzverteilung oder Fußgängerwege und die Qualität der Straßenoberfläche zu identifizieren); Schulen, Gesundheitshäuser und sogar Fahrradständer.

![Bilder von verschiedenen Landnutzungsgebieten in Fürstefeldbruck.](/images/blog/mapillary/mapillary_sequences.webp "Bildsequenzen aus Fürstenfeldbruck.")

_Abbildung 5. Erfasste Bildsequenzen innerhalb unterschiedlicher Landnutzungsbereiche_

## Verbesserung von OSM

Die Mapillary-Aufnahmen wurden genutzt, um die Qualität von OpenStreetMap-Daten zu verbessern. Wie auf dem Bild unten dargestellt, können Mapillary Bilder einfach und direkt bei der Bearbeitung in OSM genutzt werden. Die aufgenommenen Bilder im Gebiet Fürstenfeldbruck werden als grüne Punkte dargestellt.

![Mapillary-Bilder von Fürstenfeldbruck werden zur Bearbeitung in OSM verwendet.](/images/blog/mapillary/mapillary_osm.webp "OSM-Daten mit Mapillaryaufnahmen verbessern.")

_Abbildung 6. Nutzung von Mapillaryaufnahmen zur Verbesserung der OSM-Daten_

Wir haben die Daten bisher hauptsächlich genutzt, um die Attribute des Straßennetzwerks in OSM zu vervollständigen. Auf der Grundlage der Bilder aus Mapillary, können viele relevante Attribute gesammelt werden, die für die Gewährleistung einer realistischeren Radroutenführung wichtig sind. Beispielsweise ist es möglich, die Art der Straßenoberfläche (gepflastert, ungepflastert, Asphalt, Beton, Pflastersteine etc.) zu identifizieren oder die Qualität des Straßenbelags (exzellent, gut, mittel, schlecht) einer Straße oder eines Weges zu spezifizieren. Es ist auch möglich, zu identifizieren, ob eine Straße für Fahrräder und Fußgänger:innen ausgelegt ist und vieles mehr.

Wir werden weiterhin Bildmaterial sammeln und unsere Methodik verfeinern, um bessere Kartendaten für alle zu erstellen!