import React from 'react';
import Logo from '../../assets/logo.png';

export default function HeaderComp() {
  return (
    <div className="header-comp-main">
      <img src={Logo} alt="logo" className="header-logo" />
      <h3 className="header-text">SUTTARWALA CONSTRUCTION</h3>
    </div>
  );
}
