---
title: "PX4 eller ArduPilot?"
ingress: "Software-teamet tester begge i simulator før vi bestemmer hvilken autopilot dronen skal fly på."
avdeling: Software
bilde: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&q=80&auto=format&fit=crop"
bildetekst: "Simuleringene kjøres i Gazebo før noe som helst får lov til å lette."
forfatter: "Software-teamet"
---

Autopiloten er hjernen i dronen, og valget vi tar nå kommer til å følge oss lenge. Derfor tar vi oss tid til å teste begge de store åpen kildekode-alternativene grundig.

## Slik tester vi

Begge autopilotene kjøres i simulatoren Gazebo med samme dronemodell. Vi sammenligner hvor enkelt det er å:

1. Sette opp en autonom rute med GPS-punkter
2. Legge til egen kode, for eksempel bildegjenkjenning
3. Logge og analysere data etter en flytur

## Foreløpig konklusjon

PX4 ligger litt foran på arkitektur og muligheter for egen kode, mens ArduPilot har et enormt brukermiljø og mange ferdige funksjoner. Vi lander på et endelig valg i løpet av november – følg med!
