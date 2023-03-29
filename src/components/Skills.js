import React, { useState } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as DiIcons from 'react-icons/di'
import * as SiIcons from 'react-icons/si'
import Writing from './TypeEffect'

const text = 'JJunior Software Engineer'
function Skills() {
  return (
    <div className="container">
      <div className="presentation-area">
        <h1>
          {' '}
          <Writing txt={text} />
        </h1>
        <p className="presentation-content">
          Ich bin eine enthusiastische, verantwortungsbewusste und hart
          arbeitende IT-Person. Ich habe hauptsächlich in der Front
          End-Entwicklung gearbeitet, aber ich möchte eine Full-Stack-Entwickler
          werden, da jeder Aspekt des Berufes faszinierend ist. Ich bin vor
          einem Jahr nach Deutschland gekommen, um mit meinem deutschen Partner
          zusammen zu leben. Da Ich jetzt anfange Deutsch zu sprechen würde Ich
          gerne das richtige Unternehmen finden, um mich auf meine Karriere zu
          konzentrieren.
        </p>
      </div>
      <div className="icon-area">
        <div className="header-skill">Skills:</div>
        <hr></hr>
        <FaIcons.FaPython color="#131341" />
        <DiIcons.DiDjango color="#131341" />
        <DiIcons.DiSqllite color="#131341" />
        <DiIcons.DiJqueryLogo color="#131341" />
        <DiIcons.DiJava color="#131341" />
        <FaIcons.FaCss3 color="#131341" />
        <DiIcons.DiSass color="#131341" />
        <SiIcons.SiFirebase color="#131341" />
      </div>
    </div>
  )
}
export default Skills
