import React, { forwardRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './textarea.module.scss';

const Textarea = forwardRef(({
  label, name, error, ...props
}, ref) => (
  <div className={cn(s.wrap, {
    [s.error]: error,
  })}
  >
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <textarea
      {...props}
      id={name}
      className={s.textarea}
      name={name}
      ref={ref}
    />
    {error && <span className={s.errorMessage}>{error}</span>}
  </div>
));

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
  error: '',
};

export default Textarea;
