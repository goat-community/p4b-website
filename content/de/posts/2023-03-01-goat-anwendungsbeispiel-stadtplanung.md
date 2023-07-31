---
author : "meining"
categories : ["anwendung"]
date : 2023-04-17T09:00:00Z
description : "GOAT ist ein vielseitiges Planungstool, das unter anderem in der Standortplanung eingesetzt werden kann. In diesem Blogpost geben wir einen näheren Einblick zum Einsatz von GOAT in Stadtentwicklungskonzepten."
draft : false
image : "/images/blog/use-cases-development-concepts/stadtplanung_900450.webp"
summary : "GOAT ist ein vielseitiges Planungstool, das unter anderem in der Standortplanung eingesetzt werden kann. In diesem Blogpost geben wir einen näheren Einblick zum Einsatz von GOAT in Stadtentwicklungskonzepten."
thumbnail : "/images/blog/use-cases-development-concepts/stadtplanung_600450.webp"
title : "GOAT Anwendungsbeispiel: Stadtplanung"
translationKey : "use-cases-development-concepts"
---
## Was ist ein Stadtentwicklungskonzept?

Ein Integriertes Stadtentwicklungskonzept (ISEK) ist ein umfassendes Planwerk zur ganzheitlichen Entwicklung einer Stadt. Es versucht die Charakteristika einer Stadt zukunftsfördernd, nachhaltig und langfristig zu unterstützen und weiterzuentwickeln. Eine fächer- und disziplinübergreifende Kommunikation sowie die Einbeziehung aktueller Trends ist dabei unerlässlich (complan Kommunalberatung GmbH, 2017). Aktuell ist in vielen Fällen sowohl die „Stadt der kurzen Wege“ als auch ein Ausbau von Nahmobilität und alternativen Mobilitätsformen wie Car- und Bikesharing von großer Bedeutung (complan Kommunalberatung GmbH, 2017). Damit soll eine Stärkung von Stadt- und Nahversorgungszentren erreicht werden.

## Was kann GOAT dazu beitragen?

Die Inhalte der Integrierten Stadtentwicklungspläne unterscheiden sich je nach Bedarf und Ausrichtung der Kommune. GOAT ist ein nützliches Werkzeug bei der Erstellung eines ISEK, insbesondere wenn der Schwerpunkt auf Erreichbarkeit liegt. Erreichbarkeit ist auf dem Vormarsch und viele Städte, wie z.B. München, arbeiten mit Konzepten wie „Stadt der kurzen Wege“ (Landeshauptstadt München Referat für Stadtplanung und Bauordnung 2021, s. 22).

### Visualisierung von räumlichen Daten

[GOAT](/../goat/ "Was ist GOAT?") ist ein WebGIS und enthält eine Vielzahl an räumlichen Daten. So können u.a. die Gebäue, Bevölkerungsdichten, Flächennutzungen, Points-of-Interest (POIs), Stadtteile, Lärmbelastungen und viele weitere Informationen eingeblendet werden (siehe Abbildung 1).

![GOAT: Flächennutzungsplan Freiburg](/images/blog/use-cases-development-concepts/abb1-de.webp "GOAT: Flächennutzungsplan Freiburg")

_Abbildung 1: Darstellung des Flächennutzungsplans in GOAT_

### Konnektivität und Qualität des Wegenetzes

Für den Fuß- und Radverkehr ist eine gute Vernetzung der Stadtquartiere essenziell. In GOAT kann das vorhandene Wegenetz für die verschiedenen Verkehrsträger eingeblendet werden. Mithilfe der [Konnektivitäts-Heatmap](/docs/heatmap-connectivity/ "Dokumentation zur Konnektivitäts-Heatmap") kann analysiert werden, wie gut die Netze für Fuß- und Radwege miteinander verknüpft sind und so Verbesserungspotentiale identifiziert werden. Mittels der Szenario-Erstellung kann außerdem die Auswirkung neuer Wegeverbindungen (z.B. Radverkehrsbrücke) auf die Erreichbarkeit analysiert werden.

Da nicht nur die Wegeverfügbarkeit, sondern v.a. auch die Wegeattraktivität entscheidend ist, sind weitere Informationen, wie Oberflächenbeschaffenheit der Wege, Steigungen und Unfallstatistiken hinterlegt. Zur gesamtheitlichen Analyse des Radverkehrsangebots können außerdem weitere Elemente, wie Fahrradabstellanlagen und Fahrradreparaturstationen, in GOAT integriert werden.

Falls lokal vorhanden, können auch Daten zur Barrierefreiheit von Fußwegen in GOAT integriert und somit für den Ausbau der Barrierefreiheit im öffentlichen Raum genutzt werden.

### Analyse der Erreichbarkeit

Um das Ziel einer dezentralen Daseinsvorsorge zu erreichen, ist eine faire Verteilung der wichtigen Einrichtungen des täglichen Bedarfs über die Stadtfläche essenziell. Um zu ermitteln, ob alle Bürger:innen innerhalb einer angemessenen Zeit alle wichtigen Einrichtungen erreichen können (im Idealfall mit nachhaltigen Modi), sind Erreichbarkeitsanalysen eine geeignete Methode.

In unserer Open Source Planungssoftware GOAT sind verschiedenste POIs wie Sportstätten, Supermärkte, Kindergärten und Parkanlagen enthalten. Diese können visualisiert und deren räumliche Verteilung mit verschiedenen Erreichbarkeitsindikatoren analysiert und mit den Bevölkerungsdaten verschnitten werden. Mittels [Isochronen](/docs/isochrone/ "Dokumentation zu Isochronen") und [Heatmaps](/docs/heatmap/ "Dokumentation zu Heatmaps") können Lücken in der Erreichbarkeit gefunden, Nachverdichtungsmöglichkeiten erkannt und so Missstände behoben werden.

Ein guter Benchmark für die Erreichbarkeit sind die Ergebnisse der [Multi-Isochronen](/tutorials/multiisochrones/ "Tutorial zu Multi-Isochronen"). Diese Form der Isochronen berechnen, welcher Anteil der Bewohner:innen eines Stadtviertels Zugang zu einer bestimmten Einrichtung des täglichen Bedarfs haben. Dabei können sowohl unterschiedliche Verkehrsmittel als auch die Reisezeit gewählt werden. Abbildung 2 zeigt eine exemplarische Erreichbarkeitsanalyse mit Isochronen zu Supermärkten innerhalb von 10 Minuten.

![GOAT: Erreichbarkeitsanalyse Supermärkte](/images/blog/use-cases-development-concepts/abb2-de.webp "GOAT: Erreichbarkeitsanalyse Supermärkte")

_Abbildung 2: Erreichbarkeitsisochronen zu Supermärkten in GOAT_

### Szenarien zur Standortplanung

Die Aufwertung und Stärkung von fußgängerfreundlichen Stadt- und Nahversorgungszentren wird als wichtiger Punkt in der Planung von Stadtentwicklungskonzepten angesehen (complan Kommunalberatung GmbH, 2017, p. 43). Mit GOAT können neben der Analyse des aktuellen Ist-Zustandes auch interaktive Szenarien zu [neuen POIs](/tutorials/scenario-location/ "Tutorial zum Hinzufügen neuer POIs in GOAT"), [Wegeverbindungen](/tutorials/scenario-ways/ "Tutorial zum Hinzufügen neuer Wegeverbindungen in GOAT") und [Gebäuden](/tutorials/scenario-buildings/ "Tutorial zum Verändern der Gebäude in GOAT") angelegt werden und deren Auswirkungen auf die Erreichbarkeit analysiert werden. In diesem Video zeigen wir, wie Szenarien in GOAT durchgeführt werden können.

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/411721219" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

Zudem können Standorte alternativer und nachhaltiger Mobilität wie Carsharing, Bikesharing oder Ladestationen für E-Autos angezeigt und dynamisch verändert oder weitere Stationen hinzugefügt werden. Somit können ideale neue Standorte identifiziert werden, um möglichst der gesamten Bevölkerung einen Zugang zu diesen umweltfreundlichen Mobilitätsoptionen in der Zukunft zu ermöglichen.

## Testen Sie GOAT!

Sie wollen auch Analysen zur Standortplanung mit GOAT durchführen oder interessieren sich für weitere Funktionen? [Kontaktieren Sie uns](/kontakt/ "Kontakt zu Plan4Better") oder testen Sie die [kostenlose GOAT Demo](/request-demo/ "Unverbindliche Anmeldung zur kostenlosen Demoversion")!

## Referenzen

complan Kommunalberatung GmbH, 2017. Stadt Jena. 2030+ - Integriertes Stadtentwicklungskonzept. Stadt Jena, Jena.

Landeshauptstadt München Referat für Stadtplanung und Bauordnung. 2021. „Stadtentwicklungskonzeption „Perspektive München“ - Bericht zur Fortschreibung 2021“. https://stadt.muenchen.de/dam/jcr:b129023c-5202-4788-9f5e-a38b47b83776/2021_Fortschreibung_PerspektiveMuenchen.pdf