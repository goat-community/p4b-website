---
title: Heatmap - Lokale Erreichbarkeit
permalink: "/de/docs/heatmap/"
lang: de
sections:
- technical
weight: 60

---
GOAT ermöglicht die Berechnung und Visualisierung von gravitationsbasierten Erreichbarkeitsmessungen, die als Heatmaps visualisiert werden. Basierend auf vorausberechneten Fahrzeiten und der Auswahl des Nutzers wird die Heatmap dynamisch berechnet. Zur Visualisierung wird ein hexagonales Raster verwendet.

![](/images/docs/technical_documentation/heatmap/heatmap.webp)

#### 1. Berechnung

Die Berechnung der Heatmap erfolgt mit Hilfe von gravitationsbasierten Messungen und kann operationalisiert werden als:

![](/images/docs/technical_documentation/heatmap/place-based_accessibility_measures.webp)

wobei die Erreichbarkeit <b>A</b> des Ursprungsortes <b>i</b> die Summe aller am Zielort <b>j</b> verfügbaren Möglichkeiten <b>O</b> ist, gewichtet mit einer Funktion der Reisezeit <b> t<sub>ij</sub></b> zwischen <b>i</b> und <b>j</b>. GOAT verwendet die modifizierte Gaußfunktion als Impedanzfunktion für die Berechnung:

![](/images/docs/technical_documentation/heatmap/Gaussian_function.webp)

Die Fahrzeiten werden in Sekunden berechnet. Da der Cut-off-Wert 15 Minuten für den Modus Gehen verwendet wird, bedeutet dies, dass Ziele, die weiter als 15 Minuten entfernt sind, bei der Berechnung des Index nicht berücksichtigt werden.  
 Der Sensitivitätsparameter definiert, wie sich die Zugänglichkeit mit zunehmender Fahrzeit verändert. Da der Sensitivitätsparameter entscheidend für die Messung der Erreichbarkeit ist, können Sie diese mit GOAT einstellen. Die folgenden Grafiken zeigen den Einfluss des Sensitivitätsparameters auf die Zugänglichkeit.

![](/images/docs/technical_documentation/heatmap/sensitivity_index_20000.webp)

![](/images/docs/technical_documentation/heatmap/sensitivity_index_30000.webp)

#### 2. Klassifizierung

Um die für jede Gitterzelle berechneten Erreichbarkeitsstufen zu klassifizieren, wird eine Klassifikation basierend auf Quintilen verwendet.

#### 3. Rechnungsbeispiel

##### 3.1 Berechnung der Fahrtzeit

Das folgende Beispiel veranschaulicht, wie die Gravitations-basierte Heatmap berechnet wird.  
Die Fahrzeiten werden für jede Gitterzelle zum jeweiligen Ziel im Straßennetz berechnet.

![](/images/docs/technical_documentation/heatmap/grid_groceries.webp)

Für eine Gitterzelle könnte die Berechnung wie in den folgenden Beispielen durchgeführt werden:

Einheitlicher Sensitivitätsparameter: ![](/images/docs/technical_documentation/heatmap/accessiblity_uniform_sensitivity-index.webp) 

Variierender Sensitivitätsparameter für Hypermarket: ![](/images/docs/technical_documentation/heatmap/accessiblity_different_sensitivity-indices.webp)

##### 3.2 Berechnung mit einheitlichem Sensitivitätsparameter: 

Im ersten Beispiel wollen wir die Erreichbarkeit für Lebensmittel in 15 Min berechnen (β=300.000).
Das bedeutet, dass der Sensitivitätsparameter für jede Lebensmittelkategorie gleich ist.


![](/images/docs/technical_documentation/heatmap/uniform_sensitivity.webp)

##### 3.3 Berechnung mit unterschiedlichen Sensitivitätsparametern

Im zweiten Fall berechnen wir die Erreichbarkeit von Lebensmitteln in 15 Min (β=300.000 und β=400.000). Das bedeutet, dass der Sensitivitätsparameter von den verschiedenen Lebensmittelkategorien abhängt. Für dieses Beispiel haben wir β=400.000 für den Supermarkttyp und β=300.000 für Discounter und Supermarkt verwendet.


![](/images/docs/technical_documentation/heatmap/different_sensitivity.webp)

Vergleicht man beide Beispiele, so lassen sich signifikante Veränderungen der Erreichbarkeit feststellen, da im zweiten Beispiel der Sensitivitätsparameter zugunsten von Hypermärkten gewählt wurde.

#### Referenzen

Kwan, Mei-Po. 1998. “Space-Time and Integral Measures of Individual Accessibility: A Comparative Analysis Using a Point-Based Framework.” Geographical Analysis 30 (3): 191–216. [https://doi.org/10.1111/j.1538-4632.1998.tb00396.x](https://doi.org/10.1111/j.1538-4632.1998.tb00396.x).

Vale, D.S., and M. Pereira. 2017. “The Influence of the Impedance Function on Gravity-Based Pedestrian Accessibility Measures: A Comparative Analysis.” Environment and Planning B: Urban Analytics and City Science 44 (4): 740–63. [https://doi.org/10.1177%2F0265813516641685](https://doi.org/10.1177%2F0265813516641685).

Higgins, Christopher D. 2019. “Accessibility Toolbox for R and ArcGIS.” Transport Findings, May. [https://doi.org/10.32866/8416](https://doi.org/10.32866/8416).