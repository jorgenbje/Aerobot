# Aerobot Technologies – nettsiden

Dette repoet inneholder nettsiden til Aerobot Technologies, studentorganisasjonen
for dronebygging ved UiA Grimstad.

- **Nettsiden nå:** https://jorgenbje.github.io/Aerobot/
- **Planlagt adresse:** https://aerobottechnologies.no
- **Kontakt:** contact@aerobottechnologies.no

Denne filen gir ledelsen et overblikk over hvordan nettsiden er satt opp, hvor
ting ligger og hvordan den holdes oppdatert. Skal du bare legge ut en ny sak,
holder det å lese [HVORDAN-POSTE.md](HVORDAN-POSTE.md).

---

## Innhold

1. [Kort fortalt](#kort-fortalt)
2. [Hvordan nettsiden blir til](#hvordan-nettsiden-blir-til)
3. [Vanlige oppgaver – hvor endrer jeg hva?](#vanlige-oppgaver--hvor-endrer-jeg-hva)
4. [Oversikt over alle filer](#oversikt-over-alle-filer)
5. [Publisering og GitHub Pages](#publisering-og-github-pages)
6. [Eget domene](#eget-domene)
7. [Forhåndsvise lokalt (for de tekniske)](#forhåndsvise-lokalt-for-de-tekniske)
8. [Når noe går galt](#når-noe-går-galt)
9. [Ting som gjenstår](#ting-som-gjenstår)

---

## Kort fortalt

- Nettsiden har tre deler: **forsiden**, en side om **avdelingene** og
  **Akkurat nå**, som er nyhetssakene våre.
- Den ligger gratis på **GitHub Pages**. Ingen server å vedlikeholde, ingen
  database og ingen innlogging utenom GitHub.
- Nyhetssaker («poster») er vanlige tekstfiler i mappen `_posts/`. Alle saker får
  automatisk samme utseende. Ingen trenger å kunne HTML for å legge ut en sak.
- Hver gang noe lagres i repoet, bygger GitHub nettsiden på nytt og publiserer
  den. Det tar 1–2 minutter.

---

## Hvordan nettsiden blir til

```
  Dere lagrer en fil på GitHub (f.eks. en ny post)
                    │
                    ▼
  GitHub Actions starter workflowen «Bygg og publiser nettsiden»
                    │
                    ▼
  Jekyll setter sammen sidene:
  maler (_layouts) + felles deler (_includes) + innhold (sider og poster)
                    │
                    ▼
  Ferdige HTML-sider publiseres på GitHub Pages
```

**Jekyll** er verktøyet som gjør dette. Det er det samme systemet GitHub Pages
er bygget rundt. Filene i repoet er altså ikke ferdige nettsider, men byggeklosser.
Derfor ser det rart ut hvis du åpner for eksempel `index.html` direkte i
nettleseren fra din egen maskin. Det er helt normalt.

Det besøkende ser, er vanlig statisk HTML. Siden er derfor rask, gratis og
vanskelig å hacke.

---

## Vanlige oppgaver – hvor endrer jeg hva?

| Jeg vil …                                       | Endre denne filen                                       |
|-------------------------------------------------|---------------------------------------------------------|
| Legge ut en nyhetssak                           | Ny fil i `_posts/` – se [HVORDAN-POSTE.md](HVORDAN-POSTE.md) |
| Endre eller slette en nyhetssak                 | Filen i `_posts/`                                       |
| Velge hvilken sak som vises stort på forsiden   | Sett `fremhevet: true` i saken                          |
| Endre teksten øverst på forsiden                | `index.html` (seksjonen «HERO»)                         |
| Flytte fremdriften i byggeloggen («Nå»)         | `index.html` (se kommentaren over `<ol class="track">`) |
| Endre tekst om en avdeling                      | `avdelinger.html`                                       |
| Bytte navn/rolle i ledelsen                     | `avdelinger.html` (seksjonen `id="ledelse"`)            |
| Endre lenker i menyen                           | `_includes/nav.html`                                    |
| Endre bunnteksten                               | `_includes/footer.html`                                 |
| Endre e-post, søknadsskjema, Instagram/LinkedIn | `_config.yml`                                           |
| Endre farger, skrift eller avstander            | `css/style.css` (variablene øverst i filen)             |
| Laste opp bilder til saker                      | Mappen `bilder/poster/`                                 |

Alt kan gjøres direkte på github.com: åpne filen, trykk på blyanten, gjør
endringen og trykk **Commit changes**.

---

## Oversikt over alle filer

### Sider

#### `index.html` – forsiden
Selve forsiden. Inneholder, ovenfra og ned:
- **Hero:** overskriften «Fra bunnen av.» og den tekniske tegningen av
  prosjektdronen. Tegningen er laget direkte i koden (SVG), så tallene og
  merkelappene kan endres som vanlig tekst.
- **Tall-linjen:** «1 drone, 6 avdelinger …».
- **Prosjektdronen:** intro om organisasjonen og byggeloggen
  (Konsept → Design → Prototyp → Testflyging → Konkurranse).
- **Akkurat nå:** fylles **automatisk** med de fire nyeste postene. Her skal
  du ikke skrive saker manuelt.
- **Avdelinger:** kortene man kan sveipe gjennom, som lenker til avdelingssiden.
- **Bli med** og **Samarbeid/sponsor**.

Øverst i filen står `layout: default` mellom to `---`-linjer. Det forteller
Jekyll at siden skal bruke felles meny og bunntekst. Ikke fjern disse linjene.

#### `avdelinger.html` – avdelingssiden
Én seksjon per avdeling (Software, Elektronikk, Mekatronikk, Event,
Markedsføring, Ledelse) med beskrivelse, arbeidsoppgaver og hvem den passer
for. Under Ledelse står navn og roller. Portrettbilder kan legges inn der
bokstavene står (forklart i en kommentar i filen).

#### `poster/index.html` – oversikten over alle saker
Siden `/poster/`. Viser alle poster som kort, med knapper for å filtrere på
avdeling. Listen lages automatisk. Filen trenger sjelden endres.

### Innhold

#### `_posts/` – nyhetssakene
Én Markdown-fil per sak. Filnavnet må følge mønsteret
`ÅÅÅÅ-MM-DD-kort-tittel.md`. Datoen blir publiseringsdatoen, resten blir
adressen (`/poster/kort-tittel/`). Øverst i hver fil står feltene `title`,
`ingress`, `avdeling`, `bilde`, `bildetekst`, `forfatter` og eventuelt
`fremhevet`. Under kommer selve teksten.

De fire sakene som ligger der nå, er **eksempler** med oppdiktet innhold og
stockbilder. De bør erstattes med ekte saker.

#### `_maler/ny-post.md` – malen for nye saker
Kopier innholdet herfra når du lager en ny post. Alle felt er forklart i filen.
Mappen blir ikke publisert på nettsiden.

#### `bilder/poster/` – bilder til sakene
Last opp bilder hit og skriv stien i `bilde`-feltet, f.eks.
`/bilder/poster/testflyging.jpg`. Filen `.gitkeep` sørger bare for at den tomme
mappen finnes på GitHub, og kan ignoreres.

#### `HVORDAN-POSTE.md` – bruksanvisning for poster
Steg-for-steg-guide for å lage, endre og slette saker, laste opp bilder,
lage utkast og feilsøke. Pek nye skribenter hit.

### Utseende og felles deler

#### `_layouts/default.html` – rammen rundt alle sider
Inneholder alt som er likt på hver side: `<head>` (tittel, beskrivelse,
skrifttype, forhåndsvisning ved deling på sosiale medier), menyen, bunnteksten
og JavaScript. Innholdet fra hver side settes inn i midten.

#### `_layouts/post.html` – malen for én nyhetssak
Bestemmer hvordan en sak ser ut: tilbake-lenke, avdelingsmerke, dato,
lesetid, overskrift, ingress, stort bilde, selve teksten, forfatter og «Les
også» med tre andre saker nederst. Endres denne, endres alle saker samtidig.

#### `_includes/nav.html` – menyen
Logoen og lenkene øverst på hver side, inkludert mobilmenyen.

#### `_includes/footer.html` – bunnteksten
Kolonnene med lenker, e-post og sosiale medier nederst på hver side.
Årstallet oppdateres automatisk.

#### `_includes/post-kort.html` – kortet for én sak
Den lille boksen med bilde, avdelingsmerke, dato, tittel og ingress. Brukes
på forsiden, på `/poster/` og under «Les også».

#### `_includes/dato.html` – norske datoer
Gjør om datoer til formatet «20. oktober 2026».

#### `_includes/bilde-url.html` – riktig bildeadresse
Sørger for at både opplastede bilder (`/bilder/...`) og bilder fra nettet
(`https://...`) får riktig adresse, også når siden ligger i en undermappe.

#### `css/style.css` – all styling
Farger, skrift, avstander og oppsett for mobil og PC. Øverst ligger
variabler (`--brand`, `--ink`, `--paper` osv.) som styrer fargene for hele
siden. Filen er delt inn i seksjoner med overskrifter (Navigasjon, Hero,
Akkurat nå, Avdelinger, Poster, Footer …).

#### `js/main.js` – litt interaktivitet
- Åpner og lukker mobilmenyen.
- Lar elementer gli rolig inn når man scroller.
- Filtrerer saker etter avdeling på `/poster/`.
- Pilknappene på avdelingskarusellen.

Nettsiden fungerer også uten JavaScript, bare uten disse effektene.

### Oppsett og publisering

#### `_config.yml` – innstillinger
Nettsidens navn og beskrivelse, kontaktinfo (e-post, søknadsskjema,
Instagram, LinkedIn), adressemønsteret for poster og hvilke filer som **ikke**
skal publiseres (f.eks. denne README-filen og malene).

#### `Gemfile` – versjon av Jekyll
Forteller byggingen at den skal bruke samme Jekyll-versjon som GitHub Pages.
Skal ikke endres.

#### `.github/workflows/static.yml` – den automatiske byggingen
Oppskriften GitHub Actions følger hver gang noe lagres: hente koden →
installere Jekyll → bygge siden → publisere. Den finner selv ut om siden ligger
på `/Aerobot/` eller på eget domene, så lenkene alltid blir riktige.

> **Viktig:** Det skal bare ligge **én** workflow i `.github/workflows/`. Ligger
> det flere, publiserer de om kapp, og siden kan miste CSS-en. Trykk derfor ikke
> på ferdige maler som «Jekyll» eller «Static HTML» under Settings → Pages.

#### `README.md` – denne filen
Vises på forsiden av repoet på GitHub, men ikke på nettsiden.

---

## Publisering og GitHub Pages

Oppsettet i repoet (**Settings → Pages**):

- **Source:** GitHub Actions
- **Workflow:** `.github/workflows/static.yml` («Bygg og publiser nettsiden»)

Status for hver publisering finner du under fanen **Actions**:

- 🟡 gul sirkel – bygger
- ✅ grønn hake – publisert
- ❌ rødt kryss – noe feilet (se [Når noe går galt](#når-noe-går-galt))

Man kan starte en ny publisering manuelt med **Actions → Bygg og publiser
nettsiden → Run workflow**.

**Tips:** Gjør du mange endringer på én gang, er [GitHub Desktop](https://desktop.github.com)
enklere enn nettleseren. Da får du med alle filer, også skjulte mapper som
`.github`.

---

## Eget domene

Domenet `aerobottechnologies.no` peker i dag til den gamle nettsiden i et annet
repo. For å flytte det hit:

1. I det **gamle** repoet: Settings → Pages → fjern domenet under
   **Custom domain**.
2. I **dette** repoet: Settings → Pages → skriv `aerobottechnologies.no` under
   **Custom domain** → **Save**.
3. Vent til GitHub viser **DNS check successful**, og kryss av for
   **Enforce HTTPS**.
4. Kjør workflowen på nytt. Lenkene tilpasser seg automatisk.

DNS hos domeneleverandøren skal ha A-poster til `185.199.108.153`,
`185.199.109.153`, `185.199.110.153` og `185.199.111.153`. Det er allerede
satt opp slik for den gamle siden.

---

## Forhåndsvise lokalt (for de tekniske)

Du trenger ikke dette for å legge ut saker. Det er nyttig hvis du endrer
design eller maler og vil se resultatet før det publiseres.

**Med Docker:**

```bash
docker run --rm -p 4000:4000 -v "$PWD:/site" -w /site ruby:3.3 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --force_polling"
```

**Med Ruby installert:**

```bash
bundle install
bundle exec jekyll serve
```

Åpne deretter http://localhost:4000.

---

## Når noe går galt

| Symptom | Sannsynlig årsak | Løsning |
|---|---|---|
| Siden er uten farger og oppsett (mangler CSS) | Flere workflows i `.github/workflows/`, eller feil workflow | Sørg for at bare `static.yml` ligger der, og kjør den på nytt |
| Du ser `---` og `{{ }}` som tekst på siden | Siden publiseres uten at Jekyll kjører | Settings → Pages → Source skal være **GitHub Actions**, og workflowen må være `static.yml` |
| Rødt kryss i Actions: *Could not locate Gemfile* | `Gemfile` mangler i repoet | Last opp `Gemfile` |
| Rødt kryss etter at en post er lagt til | Feil i feltene øverst i posten | Se feilmeldingen. Ofte mangler `---`, eller tittelen har kolon uten anførselstegn |
| Ny sak vises ikke | Datoen i filnavnet er frem i tid, eller filnavnet har feil format | Sjekk at navnet er `ÅÅÅÅ-MM-DD-tittel.md` og at datoen har passert |
| Endringen vises ikke | Nettleseren viser en lagret versjon | Oppdater med **Ctrl + F5** |

---

## Ting som gjenstår

- [ ] Erstatte eksempelsakene i `_posts/` med ekte saker
- [ ] Erstatte stockbildene (Unsplash) med egne bilder, særlig på avdelingene
- [ ] Legge inn portretter av ledelsen i `avdelinger.html`
- [ ] Oppdatere tallene i dronetegningen når designet er bestemt
- [ ] Laste opp logofilen `alene_svartbakgrunn.png` til roten av repoet (fane-ikonet)
- [ ] Flytte domenet `aerobottechnologies.no` hit
- [ ] Slette mappen `.claude` fra repoet (brukes bare til lokal testing)
