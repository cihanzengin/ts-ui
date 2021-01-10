import React, { forwardRef } from "react";
import cn from "classnames";
import onBlurMenu from "../on-blur-menu";
import s from "./dropdown-trigger.module.scss";

interface IDropdownTriggerProps {
  name: string;
  isOpen: boolean;
  toggleOpen: (a: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  error?: string;
  selected: string[];
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
}

const DropdownTrigger = forwardRef<HTMLDivElement, IDropdownTriggerProps>(
  (
    {
      name,
      isOpen,
      toggleOpen,
      label,
      placeholder,
      error,
      menuRef,
      selected,
      isMultiple,
    },
    ref
  ) => {
    const getValue = (): string => {
      if (!isMultiple && selected.length) return selected[0];
      return "";
    };

    return (
      <div className={cn(s.wrap)}>
        {label && (
          <label htmlFor={name} className={s.label}>
            {label}
          </label>
        )}
        <div ref={ref} className={cn(s.trigger, { [s.open]: isOpen })}>
          <input
            id={name}
            placeholder={placeholder}
            className={s.input}
            onFocus={() => toggleOpen(true)}
            onBlur={() => onBlurMenu({ menuRef, toggleOpen })}
            readOnly
            value={getValue()}
          />
        </div>
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    );
  }
);

export default DropdownTrigger;
