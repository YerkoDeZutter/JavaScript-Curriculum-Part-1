## JavaScript

### De DOM
Het Document Object Model is een manier om de structuur en stijl van een HTML-pagina te manipuleren. Het vertegenwoordigt de binnenkant van de pagina die de browser bekijkt. 
Het stelt ontwikkelaars in staat om het aan te passen met JavaScript.
Als je het DOM van een pagina wilt bekijken, open dan de ontwikkeltools in je browser en zoek naar de "element inspector". In de meeste browsers kunt u DOM-elementen direct verwijderen en wijzigen.

#### Trees and branches
HTML is een XML-structuur. 
De elementen die het vormen hebben een knooppuntstructuur met ouders en kinderen. 
Zoals de stam en takken van een boom. 
Er is een root element (html) met takken zoals `head` en `body`. 
En elke tak heeft zijn eigen takken. 
Om deze reden wordt de DOM ook wel de DOM-boom genoemd.
De wijziging van de DOM wordt gedaan door een element te kiezen en er iets aan te veranderen. 
Dit is een actie die vaak wordt gedaan in JavaScript. 
Om toegang te krijgen tot de DOM vanuit JavaScript, wordt het `document` object gebruikt. 
Het wordt geleverd door de browser en laat de code op de pagina toe om te interageren met de inhoud.

#### Een element verkrijgen
Allereerst moeten we weten hoe we een element kunnen krijgen. 
Er zijn een aantal manieren om dit te doen.

#### By ID
`document.getElementById` is een methode om een element aan de hand van zijn ID te verkrijgen.

`var pageHeader = document.getElementById('pageHeader');`

Het `pageHeader` element kan dan gemanipuleerd worden. 
De grootte en kleur kunnen bijvoorbeeld worden gewijzigd. 
Of een andere code kan worden gedeclareerd om het element te beheren wanneer u erop klikt of wanneer het wordt overgeschoven.
Merk op dat `getElementById` een methode van het documentobject is. 
De meeste methoden die gebruikt worden om toegang te krijgen tot de pagina staan op het documentobject.
Door de tag (tagnaam)
`document.getElementsByTagName` werkt op dezelfde manier als `getElementById`, behalve dat het een tagnaam (div, ul, li, etc.) neemt in plaats van een ID. Het geeft een `NodeList` terug, wat in wezen een array is van de gevonden DOM-elementen.

#### Op class naam
`document.getElementsByClassName` geeft dezelfde soort `NodeList` terug als `getElementsByTagName`, behalve dat je een klassennaam passeert en niet een tagnaam.

#### op CSS-selector
Nieuwe methoden zijn beschikbaar in moderne browsers. 
Ze maken elementenselecties gemakkelijker door het gebruik van CSS-selectoren toe te staan. 
Deze zijn dat wel: `document.querySelector` en `document.querySelectorAll`.
```
var Header = document.querySelector ('#header');
var button = document.querySelectorAll('.btn');
```
querySelector, zoals `getElementById`, geeft een enkel element terug, terwijl `querySelectorAll` een `NodeList` geeft. 
Als meerdere elementen overeenkomen met dezelfde selector en je gebruikt `querySelector`, zal alleen het eerste element worden geretourneerd.


**Oefening**: [DOM](./exercise.md)