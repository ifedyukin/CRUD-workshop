import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ title, subtitle }) => (
  <header>
    <div className="header-titles">
      {title ? <div className="title"><Link to="/">{title}</Link></div> : null}
      {subtitle ? <div className="subtitle">{subtitle}</div> : null}
    </div>
  </header>
);
