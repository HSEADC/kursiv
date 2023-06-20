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
        firstHref="https://t.me/kursiv_media"
        secondHref="https://vk.com/kursiv_media"
        thirdLink=""
        thirdHref=""
      ></C_FooterTextColumn>
      <C_FooterTextColumn
        title="Команда:"
        firstLink="Матвей"
        firstHref="https://t.me/hounsout"
        secondLink="Соня"
        secondHref="https://t.me/kochuka"
        thirdLink="Даша"
        thirdHref="https://t.me/klimovaddasha"
      ></C_FooterTextColumn>
      <C_FooterTextColumn
        title="Кураторы:"
        firstLink="Захар День"
        firstHref="https://t.me/dayglobal"
        secondLink="Соня Каем"
        secondHref="https://t.me/sonia_kaem"
      ></C_FooterTextColumn>
    </div>
  )
}
