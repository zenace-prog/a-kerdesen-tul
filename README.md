# A kérdésen túl

Varga Gábor könyvének reszponzív bemutatóoldala. A könyvrészlet és a kapcsolatfelvétel külön oldalon érhető el.

A kapcsolatfelvételi űrlap a Web3Forms szolgáltatást használja. Sikeres beküldés után a Web3Forms a saját `redirect` mező alapján a köszönőoldalra irányítja a látogatót. A fogadó e-mail-címet a Web3Forms felületén állítsd be, majd tesztelj HTTP(S)-en kiszolgált oldalon (például VS Code Live Serverrel), ne közvetlenül a `file://` címmel megnyitott fájlból.

Az űrlap alatti rövid adatkezelési szöveg nem helyettesíti a teljes adatkezelési tájékoztatót. Élesítés előtt pontosítsd a megőrzési időt, a Web3Forms adatfeldolgozási feltételeit és az érintetti jogok gyakorlásának módját, majd tedd közzé a részletes tájékoztatót.

## Futtatás

Nyisd meg az `index.html` fájlt a böngészőben, vagy használd a VS Code Live Server bővítményt.

## Fájlok

- `index.html` – a könyv és a szerző bemutatása
- `reszlet.html` – a teljes történet és illusztrációja
- `kapcsolat.html` – Web3Forms alapú kapcsolatfelvételi űrlap
- `kapcsolat-koszonjuk.html` – külön megnyitható köszönőoldal
- `styles.css` – reszponzív elrendezés és megjelenés
- `app.js` – mobil navigáció
- `images/borito.png` – a könyv borítója
- `images/fenykep.png` – a szerző portréja
- `reszlet/hivatal_amely_nem_létezett.rtf` – a történet eredeti szövegfájlja
- `reszlet/images/hivatal.png` – a történet illusztrációja
