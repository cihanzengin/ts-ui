import React from 'react';
import s from './dropdown-checkbox.module.scss';

interface IDropdownCheckboxProps {
  isActive: boolean;
}

const DropdownCheckbox = ({ isActive }: IDropdownCheckboxProps) => (
  <div className={s.wrap}>
    {isActive ? '-' : '+'}
  </div>
);

export default DropdownCheckbox;
