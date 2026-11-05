# AGENTS.md

## Cél

A kód legyen könnyen, lineárisan olvasható: az olvasó a program fő belépési pontjától követni tudja, mi történik, milyen sorrendben, és miért.

## Munkavégzés

- Módosítás előtt nézd át a projekt felépítését, az érintett fájlokat és a kapcsolódó kódot.
- Kövesd a projektben már használt nyelvet, keretrendszert és kódstílust.
- A változtatásokat tartsd kicsiben, és őrizd meg a meglévő működést, API-kat és adatformátumokat.
- Ha a feladat nem kér viselkedésváltozást, de a tervezett módosítás mégis ilyet okozna, előbb jelezd ezt, és ne hajtsd végre külön kérés nélkül.
- Ne törölj kódot, és ne változtass meg publikus neveket vagy felületeket, ha nem világos, hogy ez biztonságos.

## Olvashatóság és szerkezet

- A fontos végrehajtási út legyen könnyen követhető a belépési ponttól a fő műveletekig.
- A kódot rendezd a tényleges végrehajtás vagy a feladat lépéseinek sorrendjébe, ahol ez javítja az olvashatóságot.
- Használj beszédes, következetes neveket a változókhoz, függvényekhez és típusokhoz.
- A függvények lehetőleg egy jól körülhatárolt feladatot végezzenek.
- Csökkentsd a felesleges egymásba ágyazást és a túl hosszú függvényeket, ha ezt a viselkedés megváltoztatása nélkül meg lehet tenni.
- Kerüld a fölösleges absztrakciókat és az olyan átszervezést, amely csak a kód helyét változtatja meg, de nem teszi érthetőbbé.

## Kommentek és dokumentáció

- A kommenteket magyarul írd.
- Csak akkor adj hozzá kommentet, ha az segít megérteni a nem magától értetődő szándékot, döntést vagy korlátozást.
- A komment azt magyarázza el, hogy egy megoldás miért szükséges, ne azt, amit a kód soronként már elmond.
- Ne kommentelj automatikusan minden sort vagy függvényt.
- Frissítsd vagy távolítsd el az elavult kommenteket, ha a kapcsolódó kód megváltozik.

## Kódmódosítások

- Tisztítás közben ne változtasd meg a program viselkedését.
- Ne adj hozzá új függőséget, és ne változtass konfigurációt, hacsak a feladat nem igényli.
- Tartsd meg a projekt meglévő konvencióit, kivéve ha azok akadályozzák az olvashatóságot vagy a helyes működést.
- Ha bizonytalan vagy abban, hogy egy rész mire szolgál, hagyd változatlanul, és jelezd a bizonytalanságot.

## Befejezés

- A munka végén foglald össze röviden, mely fájlok változtak, és hogyan javult az olvashatóság.
- Csak a módosításhoz releváns, projektben már rendelkezésre álló ellenőrzéseket futtasd, és sorold fel őket.
- Ne állítsd, hogy egy ellenőrzés sikeres volt, ha nem futtattad le.
- Ha nem futtattál ellenőrzést, mondd el röviden, miért.
