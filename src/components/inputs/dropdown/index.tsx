import React, { useState, useRef } from "react";
import cn from "classnames";
import DropdownTrigger from "./dropdown-trigger";
import DropdownMenu from "./dropdown-menu";
import DropdownSelected from "./dropdown-selected";
import s from "./dropdown.module.scss";

interface IDropdownProps {
  name: string;
  options: string[];
  onSelect: (a: string) => void;
  selected: string[];
  className?: string;
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  isMultiple,
  onSelect,
  name,
  label,
  placeholder,
  scrollRef,
  className,
  selected,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div className={cn(s.wrap, className)}>
      <DropdownTrigger
        name={name}
        label={label}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        ref={triggerRef}
        selected={selected}
        menuRef={menuRef}
        isMultiple={isMultiple}
      />
      <DropdownMenu
        isOpen={isOpen}
        ref={menuRef}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={options}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        selected={selected}
      >
        {isMultiple && (
          <DropdownSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
