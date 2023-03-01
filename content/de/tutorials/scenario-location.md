---
title: Szenarien - Standortplanung
permalink: "/de/tutorials/scenario-location/"
weight: 40
sections:
- training

---
![Scenario Location Planning in GOAT](/images/tutorials/Tutorial_banners/scenario_location_planning_banner.webp "Scenario Location Planning in GOAT")

#### Beschreibung des Features

GOAT ermöglicht die Entwicklung eigener Szenarien zur Standortplanung, so kann bspw. ein neuer Supermarkt oder eine neue Schule hinzugefügt und die Auswirkungen auf die Erreichbarkeit mithilfe von Heatmaps und Multi-Isochronen ermittelt werden.

#### Mögliche Anwendungsfälle (Planungsfragen)

* Wie verändert sich die Erreichbarkeit zu Supermärkten in einer Nachbarschaft, wenn den Standort eines Supermarktes verändert wird?
* Wie verändert sich die Erreichbarkeit zu Schulen, wenn eine neue Schule hinzugefügt wird?
* Wie gut sind die Kindergärten über die Stadt verteilt? Wo wäre eine gute Position für einen neuen Kindergarten?

#### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/411721219" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe

##### 1 Szenario zum Bau eines neuen Kindergartens

##### 1.1 Planungsfrage

* Wie gut sind die Kindergärten aktuell über die Stadt verteilt?
* In welchen Stadtteilen gibt es Defizite in der fußläufigen Erreichbarkeit?
* Und wie könnten diese behoben werden?
* Wo wäre eine gute Position für einen neuen Kindergarten?

##### 1.2 Arbeitsschritte

1. Lassen Sie sich als Thematische Daten die Kindergärten anzeigen.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.1_select_de.webp" alt="Amenity kindergarten" style="max-height:300px;"/>

2. Blenden Sie den Indikator „Erreichbarkeit und Bevölkerungsdichte” ein. Diese Heatmap zeigt, wie gut die fußläufige Erreichbarkeit zu den gewählten Zielen räumlich über die Bevölkerung verteilt ist. Die rote Färbung zeigt Räume mit einem Unterangebot an.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.2_de.webp" alt="Amenity kindergarten"/>

3. Gehen Sie nun in das Fenster zur Szenarienentwicklung und erstellen Sie ein neues Szenario.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.3_de.webp"  alt="New scenario" style="max-height:300px;"/>

4. Geben Sie dem Szenario einen Namen und klicken Sie auf "OK".

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.4_de.webp" alt="Name scenario" style="max-height:170px;"/>

5. Wählen Sie den zu bearbeitenden Layer aus; in diesem Fall den „Point of Interest”-Layer.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.5_de.webp" alt="Edit POIs" style="max-height:270px;"/>

6. Sie befinden sich nun im Szenario-Modus. Um dies zu verdeutlichen, ändert sich die Menü-Farbe von grün zu dunkelblau.

7. Bearbeiten Sie die Kindergärten so (bestehende Kindergärten verschieben oder neue Kindergärten hinzufügen), dass auch die Stadtteile mit Erreichbarkeitsdefiziten abgedeckt werden. 

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.7_de.webp" alt="Editing tools" style="max-height:130px;"/>

8. Fügen Sie z.B. einen neuen Kindergarten hinzu. 

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.7_attribute_de.webp" alt="Add Kindergartens" style="max-height:250px;"/>

9. Die Heatmap „Vergleich von Erreichbarkeit und Bevölkerungsdichte” aktualisiert sich automatisch. Die veränderten Kindergärten werden nun in die Berechnung mit einbezogen.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.8_De.webp" alt="Scenario View"/>
