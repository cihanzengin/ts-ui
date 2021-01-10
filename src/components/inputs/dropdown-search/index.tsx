import React, { useState, useRef } from "react";
import cn from "classnames";
import DropdownSearchTrigger from "./dropdown-search-trigger";
import DropdownSearchMenu from "./dropdown-search-menu";
import DropdownSearchSelected from "./dropdown-search-selected";
import { searchOptions } from "./functions.helper";
import { InputEvent } from "../../../constants/types.constants";
import s from "./dropdown-search.module.scss";

interface IDropdownSearchProps {
  name: string;
  options: string[];
  onSelect: (a: string) => void;
  selected: string[];
  className?: string;
  placeholder?: string;
  label?: string;
  isMultiple?: boolean;
  scrollRef?: React.RefObject<HTMLDivElement>;
  onSearch: (e: InputEvent) => void;
  searchValue?: string;
}

const DropdownSearch = ({
  options,
  isMultiple,
  onSearch,
  onSelect,
  searchValue,
  name,
  label,
  placeholder,
  scrollRef,
  className,
  selected,
}: IDropdownSearchProps) => {
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className={cn(s.wrap, className)}>
      <DropdownSearchTrigger
        ref={triggerRef}
        label={label}
        name={name}
        onSearch={onSearch}
        placeholder={placeholder}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
        menuRef={menuRef}
      />
      <DropdownSearchMenu
        ref={menuRef}
        selected={selected}
        triggerRef={triggerRef}
        onSelect={onSelect}
        isMultiple={isMultiple}
        options={searchOptions(searchValue || '', options)}
        toggleOpen={toggleOpen}
        scrollRef={scrollRef}
        isOpen={isOpen}
      >
        {isMultiple && (
          <DropdownSearchSelected unselect={onSelect} selected={selected} />
        )}
      </DropdownSearchMenu>
    </div>
  );
};

export default DropdownSearch;
