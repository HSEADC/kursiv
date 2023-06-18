import React, { Component } from 'react'
import './Q_SplashBackground.scss'
export default function Q_SplashBackground({ isImage }) {
  return (
    <img
      className="Q_SplashBackground"
      src={
        isImage
          ? 'https://v5.airtableusercontent.com/v1/18/18/1687060800000/Ld7o68tBXc9Hhvg5hrK7SQ/_qnA3VaQvMTVPiPwwRkpNC84hCWO64mYOoGBOtrgJiEoxHznewR-ZcXlCxe_hfF5tQe59SnjgWSzC595u5JyxeykcIFrTn76-vaH2fqHqGc/og5aAL1S7B8CqxlB6jz2RfDb6lvL0VqHCcCkkvUwzWU'
          : ''
      }
    ></img>
  )
}
