# Slik legger du ut en ny post

Postene på nettsiden ligger som tekstfiler i mappen `_posts/`. Hver fil er én
sak. Når du lagrer en ny fil på GitHub, bygger GitHub Pages nettsiden på nytt
av seg selv, og saken dukker opp etter 1–2 minutter:

- øverst under «Akkurat nå» på forsiden
- på oversiktssiden `/poster/`
- på sin egen side, for eksempel `/poster/forste-testflyging/`

Alle saker får automatisk samme utseende. Du trenger aldri å skrive HTML.

---

## 1. Last opp bilde (valgfritt)

1. Gå til repoet på github.com og åpne mappen `bilder/poster/`.
2. Trykk **Add file → Upload files** og dra inn bildet.
3. Gi bildet et enkelt navn uten mellomrom eller æ/ø/å, for eksempel
   `testflyging-hangar.jpg`.
4. Trykk **Commit changes**.

Liggende bilder ser best ut (rundt 2000 × 1250 px). Hold filene under ca. 1 MB.
Du kan komprimere bildet gratis på squoosh.app.

## 2. Lag selve posten

1. Åpne mappen `_posts/` og trykk **Add file → Create new file**.
2. Gi filen navn etter dette mønsteret:

   ```
   ÅÅÅÅ-MM-DD-kort-tittel.md
   ```

   For eksempel `2026-11-03-forste-testflyging.md`. Datoen blir publiseringsdatoen,
   og resten blir adressen til saken. Bruk små bokstaver og bindestrek.
3. Kopier inn innholdet fra malen `_maler/ny-post.md` og fyll ut feltene.
4. Trykk **Commit changes**.

## Feltene øverst i filen

| Felt         | Hva det er                                                                  |
|--------------|-----------------------------------------------------------------------------|
| `title`      | Overskriften                                                                |
| `ingress`    | 1–2 setninger som vises på kortet og øverst i saken                         |
| `avdeling`   | Software, Elektronikk, Mekatronikk, Event, Markedsføring eller Ledelse      |
| `bilde`      | `/bilder/poster/filnavn.jpg` eller en full nettadresse. Kan sløyfes.        |
| `bildetekst` | Beskrivelse av bildet. Brukes som bildetekst og for skjermlesere.           |
| `forfatter`  | Hvem som skrev saken                                                        |
| `fremhevet`  | `true` viser saken stort øverst på forsiden. Ellers vises den nyeste stort. |

Hold alltid feltene mellom de to linjene med `---`, og sett tekst med kolon
eller anførselstegn i `"anførselstegn"`.

## Skrive tekst

Teksten under feltene skrives i Markdown:

```markdown
Vanlig avsnitt. Et tomt linjeskift gir nytt avsnitt.

## Mellomtittel

**fet**, *kursiv* og [en lenke](https://aerobottechnologies.no)

- punktliste
- med flere punkter

> Et sitat som skal skille seg ut.

![Beskrivelse av bildet](/bilder/poster/filnavn.jpg)
*Bildetekst rett under bildet.*
```

## Endre eller slette en post

Åpne filen i `_posts/` og trykk på blyanten for å endre, eller på de tre
prikkene → **Delete file** for å fjerne saken.

## Utkast og planlagte poster

- **Utkast:** Legg filen i mappen `_drafts/` (uten dato i filnavnet). Den vises
  ikke på nettsiden før du flytter den til `_posts/`.
- **Frem i tid:** Poster med dato frem i tid vises ikke før nettsiden bygges
  på nytt etter den datoen. Det skjer neste gang noen lagrer en endring i repoet.

## Hvis noe går galt

Står saken ikke på nettsiden etter et par minutter? Åpne fanen **Actions** i
repoet. En rød prikk betyr at byggingen feilet, og feilmeldingen sier hvilken
fil og linje det gjelder. Vanligste feil:

- Mangler `---` øverst eller nederst rundt feltene
- Kolon i tittelen uten anførselstegn rundt
- Feil format på filnavnet (må starte med `ÅÅÅÅ-MM-DD-`)
