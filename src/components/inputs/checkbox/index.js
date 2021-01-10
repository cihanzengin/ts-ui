/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './checkbox.module.scss';

const Checkbox = forwardRef(({
  name, label, isActive, type, ...props
}, ref) => (
  <button
    type="button"
    {...props}
    className={cn(s.wrap, { [s.active]: isActive })}
  >
    <span

      ref={ref}
      className={s.checkbox}
    />
    {label && <span className={s.label}>{label}</span>}
  </button>
));

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  isActive: PropTypes.bool,
  type: PropTypes.oneOf(['', 'dropdown']),
};

Checkbox.defaultProps = {
  name: '',
  label: '',
  isActive: false,
  type: '',
};

export default Checkbox;
