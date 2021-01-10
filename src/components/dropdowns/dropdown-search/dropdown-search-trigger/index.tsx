import React, { forwardRef } from "react";
import cn from "classnames";
import onBlurMenu from "../../common/on-blur-menu";
import { InputEvent } from "../../../../constants/types.constants";
import s from "./dropdown-search-trigger.module.scss";

interface IDropdownTriggerProps {
  name: string;
  isOpen: boolean;
  toggleOpen: (a: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
  error?: string;
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
  onSearch: (e: InputEvent) => void;
}

const DropdownSearchTrigger = forwardRef<HTMLDivElement, IDropdownTriggerProps>(
  (
    { name, label, onSearch, error, placeholder, isOpen, menuRef, toggleOpen },
    ref
  ) => (
    <div className={cn(s.wrap, { [s.error]: error })}>
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
          onChange={onSearch}
          onFocus={() => toggleOpen(true)}
          onBlur={() => onBlurMenu({ menuRef, toggleOpen })}
        />
      </div>
      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
);

export default DropdownSearchTrigger;
