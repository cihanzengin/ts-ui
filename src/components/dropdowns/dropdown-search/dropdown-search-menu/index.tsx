import React, { useRef, forwardRef, createRef } from "react";
import cn from "classnames";
import DropdownOption from "../../common/dropdown-option";
import useMenuCloseListener from "../../common/use-menu-close-listener";
import useMenuPosition from "../../common/use-menu-position";
import s from "./dropdown-search-menu.module.scss";

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

const DropdownSearchMenu = forwardRef<HTMLDivElement, IDropdownMenuProps>(
  (
    {
      isMultiple,
      onSelect,
      options,
      toggleOpen,
      triggerRef,
      scrollRef,
      children,
      selected,
      isOpen,
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

export default DropdownSearchMenu;
