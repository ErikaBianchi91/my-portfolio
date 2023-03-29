import React, { useState } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

function Time() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2012/2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Humanistisches Gymnasyum "Nazareth",Rom. In italien dauert das
          Gymnasium 5 jahre
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2011- Mai 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Bachelor, Abschluss in "Informationstechnologie und Sprachen", an der
          Universität Tor Vergata, Rom. Abschluss mit 1{' '}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Februar 2014/Mai 2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Webdesigner, Studio Monaco&Rossitto, Rom. Erstellung einer statischen
          Website für zwei Architekten (www.mrarchitetti.it). Dieses war mein
          erster Job und die Kunden hatten eine Leidenschaft für die Farbe grau!
          Ein Kollege fügte später ein sekundäres Menü hinzu. Bis zu diesem
          Zeitpunkt kannte ich nur HTML und CSS.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Mai 2014/Juli 2014
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Praktikum Data Entry, Bibliothek Luigi Chiarini, Rom. Datenbanken
          bearbeitet, Informationnen über Bücher und Skripte hinzugefügt und
          aktualisiert.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Mai 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Weiterbildung Java und Android Programmierung. DsTech,Rom
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Oktober 2017/September 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Software Engineer, Commprove, Firenze. Hier habe ich ein altes in
          Python geschriebenes Programm der Firma korrigiert und aktualisiert.
          Ich wurde in React und Redux geschult und habe damit das GUI der
          Verwaltungssoftware erstellt.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Oktober 2018/Februar 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Ich verließ Italien und zog mit einem Working-Holiday- Visum nach
          Australien, um mein Englisch zu verbessern. Ich wollte ein Jahr
          bleiben und dann wieder als Programmiererin in Italien arbeiten.
          Aufgrund der Pandemie hat dies nicht funktioniert.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          September 2019/ Dezember 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Ehrenamtliche Englischlehrerin für eine kambodschanische
          Dorfgrundschule in Kamboscha.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Januar 2020/ Marz 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Freelancer Web designer , "Bimbi Sperduti" podcast. Ich habe Enrico
          Zicari bei seinem Podcast-Project unterstützt, die offizielle Website
          erstellt und aktualisiert, seine Artikel gepostel und neue Funktionen
          hinzugefügt.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
export default Time
