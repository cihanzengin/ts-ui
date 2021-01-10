import React, { forwardRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './input.module.scss';

const Input = forwardRef(({
  label, name, error, className, ...props
}, ref) => (
  <div className={cn(s.wrap, className, {
    [s.error]: error,
  })}
  >
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <input
      {...props}
      id={name}
      className={s.input}
      name={name}
      ref={ref}
    />
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
