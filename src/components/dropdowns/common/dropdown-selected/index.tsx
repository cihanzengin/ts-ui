import React from "react";
import Remove from "../../../icons/remove";
import s from "./dropdown-selected.module.scss";

interface IDropdownSelectedProps {
  unselect: (a: string) => void;
  selected: string[];
}

const DropdownSelected = ({ unselect, selected }: IDropdownSelectedProps) => (
  <div className={s.wrap}>
    {selected?.map((option: string) => (
      <div key={option} className={s.tag}>
        <span className={s.value}>{option}</span>
        <Remove onClick={() => unselect(option)} />
      </div>
    ))}
  </div>
);

export default DropdownSelected;
