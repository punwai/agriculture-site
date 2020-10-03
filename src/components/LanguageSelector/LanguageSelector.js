import React from "react";
import { useTranslation } from "react-i18next";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container, } from 'react-bootstrap';
import './LanguageSelector.scss';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector" className="outButton">
      <div className="inButton" onClick={() => changeLanguage("th")}><img className="inSVG" src={require('./th.svg')}/></div>|
      <div className="inButton" onClick={() => changeLanguage("en")}><img className="inSVG" src={require('./uk.svg')}/></div>
    </div>
  );
}
