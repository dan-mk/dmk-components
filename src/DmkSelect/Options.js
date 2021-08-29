import { useState, useEffect } from 'react';
import { Search } from './Search';

export function Options(props) {
    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState('');
    const [neverLoaded, setNeverLoaded] = useState(true);
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(null);

    const onChangeQuery = (newQuery) => {
        setQuery(newQuery);
    };

    const fetchOptions = () => {
        fetch(props.optionsUrl + query)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((data) => {
            setOptions(data);
            setLoading(false);
        });
    };

    let queryChanged = false;
    useEffect(() => {
        queryChanged = true;
    }, [query]);

    useEffect(() => {
        if (props.display === true && (neverLoaded || queryChanged)) {
            setNeverLoaded(false);
            setLoading(true);

            clearTimeout(timer);
            const newTimer = setTimeout(() => {
                fetchOptions();
            }, neverLoaded ? 0 : 500);
            setTimer(newTimer);
        }
    }, [props.display, query]);

    if (props.display === false) {
        return <></>;
    }

    return (<div className="dmk-select-options-container">
        <Search value={query} onChange={onChangeQuery} />
        <ul className="dmk-select-options-list-container">
            {
                loading ?
                <li>...</li> :
                (
                    options.length === 0 ?
                    <li>No options found</li> :
                    options.map(
                        (option, i) => <li key={option.value} onClick={() => props.onClickOption(option)}>{option.text}</li>
                    )
                )
            }
        </ul>
    </div>);
}