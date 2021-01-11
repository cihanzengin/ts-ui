import React, { forwardRef } from 'react';
import cn from 'classnames';
import { InputEvent } from "../../../constants/types.constants";

import s from './input.module.scss';

interface IInputProps {
  label?: string;
  name: string;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange: (e: InputEvent) => void
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({
  label, name, error, className, placeholder, onChange,
}, ref) => (
  <div className={cn(s.wrap, className, {
    [s.error]: error,
  })}
  >
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <input
      id={name}
      className={s.input}
      name={name}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
    />
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

export default Input;
