import React from 'react';
import PropTypes from 'prop-types';
import s from './dropdown-search-checkbox.module.scss';

const DropdownSearchCheckbox = ({ isActive }) => (
  <div className={s.wrap}>
    {isActive ? '-' : '+'}
  </div>
);

DropdownSearchCheckbox.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default DropdownSearchCheckbox;
