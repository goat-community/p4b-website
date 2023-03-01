+++
author = "reynartz"
categories = ["anwendung"]
date = 2023-02-28T23:00:00Z
description = "GOAT ist ein vielseitiges Planungstool, das unter anderem in der Standortplanung eingesetzt werden kann. In diesem Blogpost geben wir einen näheren Einblick zum Einsatz von GOAT in Stadtentwicklungskonzepten."
draft = true
image = "/images/stadtplanung_900450.webp"
summary = ""
thumbnail = "/images/stadtplanung_600450.webp"
title = "GOAT Anwendungsbeispiel: Stadtplanung"
translationKey = ""

+++
## Was ist ein Stadtentwickulungskonzept?

Ein Stadtentwicklungskonzept versucht die Charakteristika einer Stadt zukunftsfördernd, nachhaltig und langfristig zu unterstützen und weiterzuentwickeln. Eine fächer- und disziplinübergreifende Kommunikation sowie die Einbeziehung aktueller Trends ist dabei unerlässlich (complan Kommunalberatung GmbH, 2017). Aktuell ist in vielen Fällen sowohl die „Stadt der kurzen Wege“ als auch ein Ausbau von Nahmobilität und alternativen Mobilitätsformen wie Car- und Bikesharing von großer Bedeutung (complan Kommunalberatung GmbH, 2017). Damit soll eine Stärkung von Stadt- und Nahversorgungszentren erreicht werden.

## Was kann GOAT dazu beitragen?

### Visualisierung von räumlichen Daten

GOAT ist ein WebGIS und enthält eine Vielzahl an räumlichen Daten. So können u.a. die Gebäue, Bevölkerungsdichten, Flächennutzungen, Points-of-Interest (POIs), Stadtteile, Lärmbelastungen und viele weitere Informationen eingeblendet werden (siehe Abbildung 1).

![Darstellung des Flächennutzungsplans in GOAT](/images/stadtplanungabbildung1.webp "Flächennutzung in GOAT")

_Abbildung 1: Darstellung des Flächennutzungsplans in GOAT_

### Konnektivität und Qualität des Wegenetzes

Für den Fuß- und Radverkehr ist eine gute Vernetzung der Stadtquartiere essenziell. In GOAT kann das vorhandene Wegenetz für die verschiedenen Verkehrsträger eingeblendet werden. Mithilfe der [Heatmap der Konnektivität](/docs/heatmap-connectivity/ "Dokumentation über Heatmap der Konnektivität") kann analysiert werden, wie gut die Netze für Fuß- und Radwege miteinander verknüpft sind und so Verbesserungspotentiale identifiziert werden. Mittels der Szenario-Erstellung kann außerdem die Auswirkung neuer Wegeverbindungen (z.B. Radverkehrsbrücke) auf die Erreichbarkeit analysiert werden.

Da nicht nur eine Wegeverfügbarkeit, sondern v.a. auch die Wegeattraktivität entscheidend ist, sind weitere Informationen, wie Oberflächenbeschaffenheit der Wege, Steigungen und Unfallstatistiken hinterlegt. Zur gesamtheitlichen Analyse des Radverkehrsangebots können außerdem benötigte Fahrradinfrastruktur, wie Fahrradanlagen und Fahrradreparaturstationen, in GOAT integriert werden.

Falls lokal vorhanden können auch Daten zur Barrierefreiheit von Fußwegen in GOAT hinterlegt und somit für den Ausbau der Barrierefreiheit im öffentlichen Raum genutzt werden.

### Analyse der Erreichbarkeit

Um das Ziel einer dezentralen Daseinsvorsorge zu erreichen, ist eine faire Verteilung der wichtigen Einrichtungen des täglichen Bedarfs über die Stadtfläche essenziell. Um zu ermitteln, ob alle Bürger:innen innerhalb einer angemessenen Zeit alle wichtigen Einrichtungen erreichen können (im Idealfall mit nachhaltigen Modi), sind Erreichbarkeitsanalysen eine geeignete Methode.

In unserer Open Source Planungssoftware GOAT sind verschiedenste POIs wie Sportstätten, Supermärkte, Kindergärten und Parkanlagen enthalten. Diese können visualisiert und deren räumliche Verteilung mit verschiedenen Erreichbarkeitsindikatoren analysiert und mit den Bevölkerungsdaten verschnitten werden. Mittels [Isochronen](/docs/alphashape/ "Dokumentation über Isochronen") und [Heatmaps](/docs/heatmap/ "Dokumentation über Heatmaps") können Lücken in der Erreichbarkeit gefunden, Nachverdichtungsmöglichkeiten erkannt und so Missstände behoben werden.

Ein guter Benchmark für die Erreichbarkeit sind die Ergebnisse der [Multi-Isochronen](/tutorials/multiisochrones/ "Tutorial zu Multi-Isochronen"). Diese Form der Isochronen berechnen, welcher Anteil der Bewohner:innen eines Stadtviertels Zugang zu einer bestimmten Einrichtung des täglichen Bedarfs haben. Dabei können sowohl unterschiedliche Verkehrsmittel als auch die Reisezeit gewählt werden. Abbildung 2 zeigt eine exemplarische Erreichbarkeitsanalyse mit Isochronen zu Supermärkten innerhalb von 10 Minuten.

![Darstellung der Erreichbarkeitsisochrone zu POIs in GOAT](/images/stadtplanungabbildung2.webp "Isochrone der Erreichbarkeit GOAT")

_Abbildung 2: Erreichbarkeitsisochronen zu Supermärkten in GOAT_

### Szenarien zur Standortplanung

Die Aufwertung und Stärkung von fußgängerfreundlichen Stadt- und Nahversorgungszentren wird als wichtiger Punkt in der Planung von Stadtentwicklungskonzepten angesehen (complan Kommunalberatung GmbH, 2017, p. 43). Mit GOAT können neben der Analyse des aktuellen Ist-Zustandes auch interaktive Szenarien zu neuen POIs und Gebäuden angelegt werden und deren Auswirkungen auf die Erreichbarkeit analysiert werden. In diesem Video zeigen wir, wie Szenarien in GOAT durchgeführt werden können.

[https://vimeo.com/manage/videos/754586552](https://vimeo.com/manage/videos/754586552 "https://vimeo.com/manage/videos/754586552")

Zudem können Standorte alternativer und nachhaltiger Mobilität wie Carsharing, Bikesharing oder Ladestationen für E-Autos angezeigt und dynamisch verändert oder weitere Stationen hinzugefügt werden. Somit können ideale neue Standorte identifiziert werden, um möglichst der gesamten Bevölkerung einen Zugang zu diesen umweltfreundlichen Mobilitätsoptionen in der Zukunft zu ermöglichen.

## Testen Sie GOAT!

Sie wollen auch Analysen zur Standortplanung mit GOAT durchführen oder interessieren sich für weitere Funktionen? [Kontaktieren sie uns](/kontakt/ "Kontakt zu Plan4Better") oder testen sie die [kostenlose GOAT Demo](/request-demo/ "Unverbindliche Anmeldung zur kostenlosen Demoversion")!

## Referenzen

complan Kommunalberatung GmbH, 2017. Stadt Jena.2030+ - Integriertes Stadtentwicklungskonzept. Stadt Jena, Jena.