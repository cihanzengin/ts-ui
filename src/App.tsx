import React, { useState } from "react";
import Dropdown from "./components/inputs/dropdown";
import DropdownSearch from "./components/inputs/dropdown-search";
import { InputEvent } from "./constants/types.constants";
import s from "./app.module.scss";

const options = ["test1", "test2", "test3"];

function App() {
  const [selected, setSelected] = useState([] as string[]);

  // const onSelect = (option: string): void => {
  //   setSelected([option]);
  // };

  const onSelectMultiple = (option: string): void => {
    if (!selected.includes(option)) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter((el) => el !== option));
    }
  };

  const onSearch = (e: InputEvent) => {
    console.log('koko', e);
    
  }

  return (
    <div className={s.wrap}>
      <Dropdown
        label="Dropdown"
        placeholder="Dropdown test placeholder"
        name="dropdownTest"
        options={options}
        selected={selected}
        isMultiple
        onSelect={(option) => onSelectMultiple(option)}
      />
      <DropdownSearch
        label="Dropdown search"
        placeholder="Dropdown test placeholder"
        name="dropdownSearchTest"
        options={options}
        selected={selected}
        isMultiple
        onSelect={(option) => onSelectMultiple(option)}
        onSearch={onSearch}
      />
    </div>
  );
}

export default App;
