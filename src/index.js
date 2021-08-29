import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DmkSelect } from './DmkSelect';

let selected = { value: '1', text: 'Resultado 1' };
let optionsUrl = 'http://localhost:8080/?query=';

ReactDOM.render(
    <div id="container"><DmkSelect selected={selected} optionsUrl={optionsUrl} /></div>,
    document.getElementById('root')
);
