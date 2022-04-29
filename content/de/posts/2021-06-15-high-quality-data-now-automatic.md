---
author: ramirez
categories:
- Entwicklung
- Daten
date: 2021-06-26T13:00:00.000+00:00
description: ''
image: "/images/blog/high_data_quality/mapillary_banner.webp"
summary: Mit der Mapillary API erfolgt der erste Schritt Richtung Automatisierung
  der Datenerfassung durch die automatische Bilderkennung und Bildsegmentierung. Diese
  Daten verwendet wir in GOAT zur Verbesserung der Datengrundlage unserer Analysen.
thumbnail: "/images/blog/high_data_quality/mapillary_thumbnail.webp"
title: Automatisierte Bilderkennung
translationKey: ''

---
## Datenherausforderung

Eine der größten Herausforderungen beim Aufbau eines Planungsinstruments wie GOAT, ist die Verfügbarkeit und Qualität der verwendeten Daten. GOAT basiert zum Großteil auf Daten von [OpenStreetMap (OSM)](https://www.openstreetmap.org/#map=5/50.151/9.539), diese stehen jedoch nicht überall in ausreichender Detailgenauigkeit zur Verfügung.

Um die Datenlücken in OSM zu schließen, verwenden wir u.a. [Mapillary](https://www.mapillary.com/). Mapillary ist eine Plattform, über die Bildsequenzen des Straßenraums aufgenommen und mit der Community offen geteilt werden können. Aus diesen Bildaufnahmen können außerdem zahlreiche Daten ausgelesen werden.

Anfang 2020 haben wir [Fürstenfeldbruck mit Mapillary kartiert](../2020-04-25-mapillary). Wir verwenden die von uns und von anderen Nutzern erhobenen Bildsequenzen zur Verbesserung der Daten, die für unsere Analyse relevant sind. Bis dato wurden die meisten Schritte (Analyse der Bilder, Objekterkennung, Speichern der ausgelesenen Informationen, etc.) manuell durchgeführt.

Wir als regelmäßige Mapillary-Nutzer sind natürlich auch Leser des Mapillary-Blogs. Am 24. August 2020 wurde dort der Beitrag “[Mapillary map features now available globally in OpenStreetMap](https://blog.mapillary.com/update/2020/08/24/global-map-features-openstreetmap.html)” veröffentlicht. Nachdem wir die Updates gelesen haben, haben wir gleich die neuen Funktionen ausprobiert.

## Mapillary Plug-in für JOSM

Im Folgenden teilen wir unsere Erfahrungen mit der Kartierung und Aktualisierung der Fußgängerüberwege in Fürstenfeldbruck. Zuerst haben wir über [Overpass Turbo](http://overpass-turbo.eu/) einen Basis-Layer mit Fußgängerüberwegen abgerufen. In diesem Layer sind alle derzeit in OSM eingetragenen Fußgängerüberquerungen abgebildet. Die Idee war, diese mit den Fußgängerüberwegen zu vergleichen, die durch den Mapillary-Algorithmus identifiziert wurden.

Für diese Analyse haben wir [JOSM](https://josm.openstreetmap.de/) verwendet. JOSM ist ein erweiterbarer OSM-Editor als Desktopanwendung, mit dem Objekte und ihre Attribute einfach und effizient bearbeitet werden können. Über das [Mapillary Plug-in](https://help.mapillary.com/hc/en-us/articles/115001739989-Mapillary-JOSM-plugin) ist es möglich, die aus den Mapillary-Aufnahmen erkannten Fußgängerüberwege und ihren Standort in JOSM einzublenden.

Die Street-View-Funktion hilft dabei, die physischen Eigenschaften der Infrastruktur und die Genauigkeit der Position der Objekte (z.B. Verkehrsschilder, Fahrbahnmarkierungen) zu überprüfen. Bei einem Fußgängerüberweg sind uns vor allem Attribute wie die Barrierefreiheit und die Art der Überquerung (Ampel, Zebrastreifen, Mittelinsel, etc.) wichtig. Diese Informationen können den Bildern entnommen und dementsprechend die OSM-Tags der vorhandenen Infrastruktur angereichert werden. Ebenso können in OSM fehlende Objekte identifiziert und nach durchgeführter Datenvalidierung hinzugefügt werden.

![Dieselben Verkehrszeichen an unterschiedlichen Stellen geortet](/images/blog/high_data_quality/mapillary_fig1.webp "Zwei Sequenzen mit Verkehrszeichen")_Abbildung 1. Zwei Bildsequenzen, die dasselbe Verkehrszeichen an zwei verschiedenen Stellen identifizieren_

Ein teilweise auftretendes Problem ist, dass ein Verkehrszeichen oftmals von mehreren Bildsequenzen erkannt und jeweils an unterschiedlichen Positionen lokalisiert wird (siehe Abbildung 1). Hier zeigt die blaue Sequenz, dass sich die Schilder nach der Rechtskurve (aus Nordosten kommend) befinden, in Wirklichkeit befinden sie sich aber vor der Kurve. In diesem Fall hat die grüne Sequenz sie an einer genaueren Position lokalisiert.

Trotz der noch notwendigen manuellen Überprüfung erleichterte das Plug-in in JOSM die Auswertung der Bilddaten.

## Mapillary API: Bildsegmentierung und Objekterkennung

Schon bald nach dem Ausprobieren des JOSM Plug-ins, wurde am 28. August 2020 eine weitere Funktion veröffentlicht: “[Global access to map data with the Mapillary API](https://blog.mapillary.com/update/2020/08/28/map-data-mapillary-api.html)”. Dies war der erste Schritt zur Automatisierung der Datenerfassung.

Die API bietet drei Möglichkeiten, auf die Bilddaten und die daraus extrahierten Informationen zuzugreifen:

1. [Images API](https://www.mapillary.com/developer/api-documentation/#images): liefert alle Bilder innerhalb eines definierten Bereichs (innerhalb einer Bounding Box oder eines Radius um einen Punkt).
2. [Object Detection API](https://help.mapillary.com/hc/en-us/articles/115000967191-Object-detections): liefert pro Bild die Segmentierung der darauf zu erkennenden Elemente (z.B. Vegetation, Straße, Häuser).
3. [Map Features API](https://www.mapillary.com/developer/api-documentation/#map-features): liefert die aus mehreren Bildern extrahierte Position von Objekten (z.B. Ampel, Fahrradständer, Verkehrsschilder) als Punkt-Features.

![Segmentierung von Maxvorstadt in Mapillary](/images/blog/high_data_quality/mapillary_fig2.webp "Maxvorstadt")_Abbildung 2: Segmentierung von Maxvorstadt über den Object Detection Algorithmus von Mapillary_

Eine unserer ersten Anwendungen der Mapillary-API war die Erstellung einer Karte von Maxvorstadt, München, unter Verwendung verschiedener Segmente aus der „Object Detections API“. In diesem Fall haben wir nach Bildern, auf denen Autos, der Himmel, Vegetation und Gehwege zu sehen waren, gesucht. Da der Mapillary-Algorithmus das Bild, wie in Abbildung 2 dargestellt, in 65 Objektklassen unterteilt, haben wir die Bilder mit dem höchsten Anteil der relevanten Klassen extrahiert und diese den Straßen zugeordnet.

Auf der Karte in Abbildung 2 können somit Straßen mit hoher Vegetation oder hoher Parkraumdichte identifiziert werden. Es ist interessant, dass viele Straßen einen hohen Anteil an „Himmel“ haben. Dies kann an breiten Straßen und großen Freiflächen, wie vor der Pinakothek, liegen oder einfach daran, dass die meisten Kameras in den Himmel gerichtet waren.

## Automatisierungsalgorithmus

Wir wollen jedoch nicht nur einen Stadtteil analysieren, sondern im besten Fall ganz München und noch [weitere Städte, in denen GOAT derzeit eingesetzt wird](../../goat-references/). Unsere erste Herausforderung bestand darin, die API für größere Gebiete abzurufen. Hierzu haben wir eine Funktion entwickelt, mit der das gewünschte Gebiet in ein Raster kleinerer Quadrate unterteilt wird.

Um den Server nicht zu überlasten, haben wir eine kurze Zeitpause zwischen der Abfrage der einzelnen Quadrate eingefügt. Nach erfolgreicher Abfrage aller Quadrate werden die extrahierten Informationen in einer JSON-Datei zusammengeführt.

Die zweite Herausforderung bezog sich auf die Parameter für die API. Je nach benötigten Daten, erfordert die API einen anderen Satz von Parametern, der manuell festgelegt werden muss. Um dies zu lösen, haben wir unsere eigene Objektbibliothek aus der vollständigen Liste der Objekte der [Mapillary API-Dokumentation](https://www.mapillary.com/developer/api-documentation/ "https://www.mapillary.com/developer/api-documentation/") zusammengestellt.

Diese individualisierte Bibliothek befindet sich in einer YAML-Datei und enthält alle für die API erforderlichen Parameter. Somit kann das Skript in einem einzigen Durchlauf mehrere Objekte, entweder über die „Object Detection API“ oder die „Map Features API“, abrufen.

Alle hierzu entwickelten Skripte sind in unserem [GitHub-Repo](https://github.com/goat-community/mapillary-api "https://github.com/goat-community/mapillary-api") zu finden.

## Nutzung der Daten

Und wie nutzen wir diese Informationen? Zur Analyse der Erreichbarkeit und Beurteilung des Gehkomforts! Aktuell haben wir die Daten aus Mapillary genutzt, um eine bessere Datengrundlage für den [Walkability Index](/posts/2021-04-06-walkability-index/) zu erlangen und in diesem Zuge über 10.000 Bilder in der Stadt Freiburg erfasst.

Doch es gibt auch noch viele weitere Einsatzmöglichkeiten. Nehmen wir an, wir analysieren die empfundene fußläufige Erreichbarkeit in einer Nachbarschaft bei Nacht. Hierfür interessieren uns Faktoren, die die Attraktivität des Zufußgehens beeinflussen. In diesem Fall wäre dies v.a. die Beleuchtung. Diese Informationen, repräsentiert durch das Vorhandensein von Straßenlaternen, können wir durch die Mapillary API abrufen und somit die Genauigkeit der Analysen verbessern.

Ein anderer Anwendungsfall könnte die Analyse des Parkangebots in einer Stadt sein. Mit der Objekterkennungsfunktion ist es möglich, parkende Autos am Straßenrand zu identifizieren. Straßenabschnitte mit einem besonders hohen Anteil an Parkfläche können somit aufgezeigt und zu lebenswerteren Räumen umgestaltet werden.