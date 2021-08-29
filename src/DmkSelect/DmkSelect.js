import React from 'react';
import { useState } from 'react';
import { Display } from './Display';
import { Options } from './Options';
import './DmkSelect.css';

export function DmkSelect(props) {
  const [selected, setSelected] = useState(props.selected ? props.selected : null);
  const [areOptionsOpen, setAreOptionsOpen] = useState(false);

  const onClickDisplay = () => {
    setAreOptionsOpen(!areOptionsOpen);
  };

  const onClickOption = (option) => {
    setSelected(option);
    setAreOptionsOpen(false);
  };

  return (
    <div className="dmk-select">
      <input type="hidden" value={selected ? selected.value : ''}/>
      <Display text={selected ? selected.text : null} onClick={onClickDisplay} areOptionsOpen={areOptionsOpen}>
        <Options display={areOptionsOpen} onClickOption={onClickOption} optionsUrl={props.optionsUrl} />
      </Display>
    </div>
  );
}
