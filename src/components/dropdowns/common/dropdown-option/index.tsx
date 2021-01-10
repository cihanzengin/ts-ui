import React, { forwardRef, MutableRefObject } from "react";
import cn from "classnames";
import onBlurMenu from "../on-blur-menu";
import DropdownCheckbox from "../dropdown-checkbox";
import s from "./dropdown-option.module.scss";

interface IDropdowOptionProps {
  onSelect: (a: string) => void;
  index: number;
  option: string;
  options: Array<string>;
  toggleOpen: (a: boolean) => void;
  isMultiple?: boolean;
  isActive: boolean;
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
}

const DropdownOption = forwardRef<HTMLButtonElement, IDropdowOptionProps>(
  (
    {
      index,
      menuRef,
      isMultiple,
      onSelect,
      option,
      options,
      toggleOpen,
      isActive,
    },
    ref
  ) => {
    return (
      <button
        key={option}
        ref={ref}
        type="button"
        className={cn(s.option, {
          [s.active]: isActive,
        })}
        onClick={() => {
          onSelect(option);
          if (!isMultiple) toggleOpen(false);
        }}
        onBlur={() =>
          index === options.length - 1
            ? onBlurMenu({
                menuRef,
                toggleOpen,
              })
            : null
        }
      >
        {isMultiple && <DropdownCheckbox isActive={isActive} />}
        {option}
      </button>
    );
  }
);

export default DropdownOption;
