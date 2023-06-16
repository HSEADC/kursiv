import React, { Component } from 'react'
import './C_FooterTextSection.scss'
import C_FooterTextColumn from '../C_FooterTextColumn/C_FooterTextColumn.jsx'
export default function C_FooterTextSection() {
  return (
    <div className="C_FooterTextSection">
      <C_FooterTextColumn
        title="Следи за новостями:"
        firstLink="телеграм →"
        secondLink="вконтакте →"
        firstHref="https://ya.ru/"
        secondHref="https://ya.ru/"
        thirdLink=""
        thirdHref=""
      ></C_FooterTextColumn>
      <C_FooterTextColumn
        title="Команда:"
        firstLink="Матвей"
        secondLink="Соня"
        thirdLink="Даша"
      ></C_FooterTextColumn>
      <C_FooterTextColumn
        title="Кураторы:"
        firstLink="Захар День"
        secondLink="Соня Каем"
        thirdLink=""
      ></C_FooterTextColumn>
    </div>
  )
}
