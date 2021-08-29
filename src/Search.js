import { useState } from 'react';

export function Search(props) {
    const [value, setValue] = useState(props.value);

    const onChangeQuery = function (e) {
        setValue(e.target.value);
        props.onChange(e.target.value);
    };

    return (
        <input 
            className="dmk-select-options-search"
            type="text"
            value={value}
            placeholder="Search options..."
            autoFocus
            onChange={onChangeQuery} />
    );
}