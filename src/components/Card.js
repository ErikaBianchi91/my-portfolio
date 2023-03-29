import React, { Component } from 'react'
function CardSet() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-picture-1 ">
          {' '}
          <h4 className="card-heading">
            <span className="card-span">Hermes</span>
          </h4>
        </div>

        <div className="card-details">
          <ul>
            <li>Web-App für die Restaurantverwaltung</li>
            <li>
              Es sendet Bestellungen an die Küche und informiert den Kellner
              über die Bestellung Status und schickt die Rechnung an die Kasse
            </li>
            <li>Geschrieben in Python mit Django</li>
            <li>Ajax-Aufrufe und sqlite3-fokussiertes Projekt</li>
          </ul>
          <a href="https://github.com/ErikaBianchi91/hermes.git">
            <button className="button">siehe Code</button>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-picture-2 ">
          <h4 className="card-heading">
            <span className="card-span">My money box</span>
          </h4>
        </div>

        <div className="card-details">
          <ul>
            <li>Ausgaben-Tracker</li>
            <li>Es verfolgt alle Ausgaben</li>
            <li>
              Es unterteilt Ausgaben in Kategorien und gibt Ihnen einen Bericht
            </li>
            <li>Geschrieben in Python mit Flask</li>
            <li className="last">CSV-fokussiertes Projekt</li>
          </ul>
          <a href="https://github.com/ErikaBianchi91/MyMoneyBank.git">
            <button className="button">siehe Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default CardSet
