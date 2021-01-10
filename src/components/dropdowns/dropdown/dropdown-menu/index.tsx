import React, { useRef, forwardRef, createRef } from "react";
import cn from "classnames";
import useMenuCloseListener from "../../common/use-menu-close-listener";
import useMenuPosition from "../../common/use-menu-position";
import onBlurMenu from "../../common/on-blur-menu";
import DropdownCheckbox from "../../common/dropdown-checkbox";
import s from "./dropdown-menu.module.scss";
import DropdownOption from "../../common/dropdown-option";

interface IDropdownMenuProps {
  onSelect: (a: string) => void;
  options: Array<string>;
  toggleOpen: (a: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  selected: string[];
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
                  <DropdownOption
                    ref={optionsRef.current[i]}
                    option={option}
                    options={options}
                    onSelect={onSelect}
                    toggleOpen={toggleOpen}
                    isActive={selected.includes(option)}
                    isMultiple={isMultiple}
                    index={i}
                    menuRef={ref}
                  />
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
