---
title: Szenarien - Standortplanung
permalink: "/de/tutorials/scenario-location/"
weight: 40
sections:
- training

---
#### Beschreibung des Features

GOAT ermöglicht die Entwicklung eigener Szenarien zur Standortplanung, so kann bspw. ein neuer Supermarkt oder eine neue Schule hinzugefügt und die Auswirkungen auf die Erreichbarkeit mithilfe von Heatmaps und Multi-Isochronen ermittelt werden.

#### Mögliche Anwendungsfälle (Planungsfragen)

* Wie verändert sich die Erreichbarkeit zu Supermärkten in einer Nachbarschaft, wenn den Standort eines Supermarktes verändert wird?
* Wie verändert sich die Erreichbarkeit zu Schulen, wenn eine neue Schule hinzugefügt wird?
* Wie gut sind die Kindergärten über die Stadt verteilt? Wo wäre eine gute Position für einen neuen Kindergarten?

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe

##### 1 Szenario zum Bau eines neuen Kindergartens

##### 1.1 Planungsfrage

* Wie gut sind die Kindergärten aktuell über die Stadt verteilt?
* In welchen Stadtteilen gibt es Defizite in der fußläufigen Erreichbarkeit?
* Und wie könnten diese behoben werden?
* Wo wäre eine gute Position für einen neuen Kindergarten?

##### 1.2 Arbeitsschritte

1. Lassen Sie sich als Thematische Daten die Kindergärten anzeigen.

<img src="/images/training_materials/Scenario_POIs/kindergarten.png" alt="Amenity kindergarten" style="max-height:250px;"/>

2. Blenden Sie die Heatmap „Erreichbarkeit und Bevölkerungsdichte” ein. Diese zeigt, wie gut die fußläufige Erreichbarkeit zu den gewählten Zielen räumlich über die Bevölkerung verteilt ist. Die rote Färbung zeigt Räume mit einem Unterangebot an.

<img src="/images/training_materials/Scenario_POIs/accessibility_population_heatmap.png" alt="Amenity kindergarten"/>

3. Gehen Sie nun in das Fenster zur Szenarienentwicklung und erstellen Sie ein neues Szenario.

<img src="/images/training_materials/Scenario_POIs/create_scenario.png"  alt="New scenario" style="max-height:300px;"/>

4. Geben Sie dem Szenario einen Namen und klicken Sie auf "OK".

<img src="/images/training_materials/Scenario_POIs/name_scenario.png" alt="Name scenario" style="max-height:170px;"/>

5. Wählen Sie den zu bearbeitenden Layer aus; in diesem Fall den „Point of Interest”-Layer.

<img src="/images/training_materials/Scenario_POIs/poi.png" alt="Edit POIs" style="max-height:200px;"/>

6. Sie befinden sich nun im Szenario-Modus. Um dies zu verdeutlichen, ändert sich die Menü-Farbe von grün zu dunkelblau.

7. Bearbeiten Sie die Kindergärten so (bestehende Kindergärten verschieben oder neue Kindergärten hinzufügen), dass auch die Stadtteile mit Erreichbarkeitsdefiziten abgedeckt werden. 

<img src="/images/training_materials/Scenario_POIs/edit_tools.png" alt="Edit Kindergartens" style="max-height:120px;"/>

8. Die Heatmap „Vergleich von Erreichbarkeit und Bevölkerungsdichte” aktualisiert sich automatisch. Die veränderten Kindergärten werden nun in die Berechnung mit einbezogen.

<img src="/images/training_materials/Scenario_POIs/new_kindergarten.png" alt="Scenario View"/>
