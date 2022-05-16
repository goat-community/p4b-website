---
title: Walkability Index
permalink: "/docs/walkability_index/"
sections:
- technical
weight: 80

---
Im Rahmen des Projekts [WALKIE](../../posts/2021-04-06-walkability-index/) haben wir einen Walkability-Index entwickelt, der aufzeigt, wie attraktiv Wege für Fußgänger:innen sind. Dieser Index kann verwendet werden, um Defizite im lokalen Fußwegenetz zu identifizieren.

Der Walkability-Index besteht aus 22 Objekten, die in 6 Kategorien zusammengefasst sind:

![Objekte und Gewichtung des Walkability Index](/images/docs/technical_documentation/walkability_index/indicators_de.webp "Walkability Objekte and Gewichtungsfaktoren")

Die Gewichtung der Objekte erfolgte auf der Grundlage verschiedener wissenschaftlicher Studien (Referenzen siehe unten) und entsprechend der Datenverfügbarkeit. Für einige Objekte (z.B. Gehwegbreite) ist die Datenverfügbarkeit in Open-Data-Quellen, wie OSM, aktuell noch sehr limitiert. Daher werden diese Objekte von der Indexberechnung ausgeschlossen.

Auch nach dem Ausschluss dieser Objekte sind nicht alle Informationen, die im Index beinhaltet sind, für alle Wege verfügbar. Wenn Informationen für ein Objekt oder eine ganze Kategorie fehlen, wird diese daher weggelassen und die anderen Objekte oder Kategorien werden höher gewichtet.

### Referenzen

Ivan Blečić, Arnaldo Cecchini, Tanja Congiu, Giovanna Fancello & Giuseppe A. Trunfio (2015) Evaluating walkability: a capability-wise planning and design support system. International Journal of Geographical Information Science. 29:8. 1350-1374. DOI: 10.1080/13658816.2015.1026824

Lorraine Fitzsimons D'Arcy (2013) A multidisciplinary examination of walkability: Its concept, measurement and applicability. PhD thesis. Dublin City University.

Spittaels, H., Foster, C., Oppert, JM. et al. Assessment of environmental correlates of physical activity: development of a European questionnaire. Int J Behav Nutr Phys Act 6, 39 (2009). https://doi.org/10.1186/1479-5868-6-39

Vale, D. S., Saraiva, M., & Pereira, M. (2015). Active accessibility: A review of operational measures of walking and cycling accessibility. Journal of Transport and Land Use, 9(1). https://doi.org/10.5198/jtlu.2015.593

Kevin Manaugh, Ahmed El-Geneidy. (2011) Validating walkability indices: How do different households respond to the walkability of their neighborhood? Transportation Research Part D: Transport and Environment. Volume 16. Issue 4. Pages 309-315. ISSN 1361-9209. https://doi.org/10.1016/j.trd.2011.01.009.