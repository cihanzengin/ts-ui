import React, { useRef, forwardRef, createRef } from "react";
import cn from "classnames";
import useMenuCloseListener from "./use-menu-close-listener";
import useMenuPosition from "./use-menu-position";
import onBlurMenu from "../on-blur-menu";
import DropdownCheckbox from "../dropdown-checkbox";
import s from "./dropdown-menu.module.scss";

interface IDropdownMenuProps {
  onSelect: (a: string) => void;
  options: Array<string>;
  toggleOpen: (a: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  selected: string[]
}

const DropdownMenu = forwardRef<HTMLDivElement, IDropdownMenuProps>(
  (
    {
      isOpen,
      isMultiple,
      onSelect,
      options,
      toggleOpen,
      triggerRef,
      scrollRef,
      children,
      selected,
    },
    ref
  ) => {
    const { menuPosition } = useMenuPosition({
      menuRef: ref,
      scrollRef,
      triggerRef,
    });

    useMenuCloseListener({
      menuRef: ref,
      toggleOpen,
      triggerRef,
    });

    const optionsRef = useRef(
      options.map(() => createRef<HTMLButtonElement>())
    );

    return (
      <div className={s.reverse}>
        <div className={cn(s.wrap, s[menuPosition])}>
          {isOpen && (
            <div ref={ref} className={s.options}>
              {!options.length ? (
                <span className={s.empty}>No results</span>
              ) : (
                options.map((option, i) => (
                  <button
                    key={option}
                    ref={optionsRef.current[i]}
                    type="button"
                    className={cn(s.option, {
                      [s.active]: selected.includes(option),
                    })}
                    onClick={() => {
                      onSelect(option);
                      if (!isMultiple) toggleOpen(false);
                    }}
                    onBlur={() =>
                      i === options.length - 1
                        ? onBlurMenu({
                            menuRef: ref,
                            toggleOpen,
                          })
                        : null
                    }
                  >
                    {isMultiple && (
                      <DropdownCheckbox isActive={selected.includes(option)} />
                    )}
                    {option}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
        {children}
      </div>
    );
  }
);

export default DropdownMenu;
