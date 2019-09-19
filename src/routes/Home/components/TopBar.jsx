import React from 'react';
import './TopBar.scss';
import PropTypes from 'prop-types';

export default function TopBar({
  city, showCitylayer
}) {
  return (
    <div className="topBar">
      <div className="topBar__city" onClick={showCitylayer}>{city}</div>
      <div className="topBar__search"></div>
      <div className="topBar__scan"></div>
    </div>
  );
}

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCitylayer: PropTypes.func.isRequired,
};
