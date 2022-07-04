# Camelonta techtest

## Intro
Det här är en basic Next.js app som ska/kan/bör användas som grund för din lösning. Next.js är ett React-ramverk som vi ofta jobbar med. Mer info om det finns på [https://nextjs.org/](https://nextjs.org/). Det är dock inget krav att kunna Next.js för att uppgiften ska kunna lösas, men några saker kan vara bra att vet om. Läs mer under [Tips](#tips-och-info),

En API-endpoint är uppsatt för att hämta ut "korten" som ska renderas ut. Sök igenom projektet efter texten `TODO:` så ser du vart det ska/kan göras. 

[Figma-design](https://www.figma.com/file/ZOiiUTSC80kRmmcJkmIIac/Camelonta-Techtest?node-id=0%3A1)

## Vårat mål med techtest
Vi förstår såklart att alla har olika förutsättningar, både kunskaps- och tidsmässigt, för en sån här uppgift. Grunden till att vi genomför techtest är att ha något att titta på tillsammans och diskutera. Vi kommer att titta på hur strukturen ser ut, utbrytning av komponenter, styling-val, ikonhantering osv. Har en tankar som inte hinns med att bygga, ta gärna med det till vårt nästa samtal.

Lägg den tid du har. Självklart gör vi bedömningen utifrån varje enskild persons förutsättningar.


## Start

1. "Forka" projektet till din egna github.
2. Klona ner projektet
3. Utgå från [designen i Figma](https://www.figma.com/file/ZOiiUTSC80kRmmcJkmIIac/Camelonta-Techtest?node-id=0%3A1)
4. Genomför uppgiften
5. Pusha upp koden till din fork
6. Gör en Pull Request mot Camelontas repo

### Klart!

(är det något som inte fungerar, hör av dig!)

## Uppgift

I stort så går uppgiften ut på att skapa upp en komponent utifrån designen i figma. Den ska vara responsiv så långt att det ska stämma överens med designen i Figma.

### Skapa komponent
- Se design i [Figma](https://www.figma.com/file/ZOiiUTSC80kRmmcJkmIIac/Camelonta-Techtest?node-id=0%3A1)
- Hämta data från API-endponten `/api/cards`.
- Rendera ut komponenten med datan
- Styla komponenten enligt designen. Med Next.js kommer CSS-modules out-of-the-box, men vill man använda sig av något annat går det självklart bra.
- Styla responsivt för desktop och mobil. Styling för andra enheter är inget krav.


> OBS! Designen är inte pixelperfekt eller helt konsekvent. Håll hellre avstånd mm. konsekvent än att följa designen till punkt och pricka. 

### Förslag på plus-i-kanten-uppgifter
- Separat ikon-komponent för hantering av ikoner
- State hantering
- Global styling, variabler (tänk skalbarhet)
- Användning av Styled Components (då vi använder det i många projekt)
- Header, footer, navigation (design finns inte - konstnärlig frihet)
- Animationer





# Tips och info

## Next.js
Som sagt så är det här en Next.js applikation. För att lösa uppgiften behövs inga djupare Next.js-kunskaper. Dock behöver man veta några saker.

### Basic routing
Rotingen hanteras av Next.js. I den här applikationen behöver du endast fokusera på `/pages/index.js`. Det är där data kan/ska hämtas och där du renderar ut komponenten.

### API route
Det finns en API-route uppsatt för att exponera den API-endpoint som ska användas. Egentligen behöver du inte bry dig om den, men det kan vara bra att veta att allt som ligger under `/pages/api` kommer att hanteras som api routes. I det här fallet är det alltså filen `/pages/api/cards/index.js` som används.

### Ikoner
Ikonerna ligger i mappen `/public/icons`. Next.js servar filerna i mappen `/public` statiskt. 

[Next.js - Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

## Basic

Script

```bash
> yarn dev
> yarn start
> yarn build
```
