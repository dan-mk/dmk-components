import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DmkSelect } from './DmkSelect/DmkSelect';

let selected = { value: '1', text: 'First option' };
let optionsUrl = 'http://localhost:8080/?query=';

ReactDOM.render(
    <div id="container"><DmkSelect selected={selected} optionsUrl={optionsUrl} /></div>,
    document.getElementById('root')
);
