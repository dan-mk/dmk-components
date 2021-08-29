export function Display(props) {
    let placeholder = props.placeholder || 'Select an option';
    let text = props.text || placeholder;
    return (<div className="dmk-select-display-container">
        <div className={"dmk-select-display " + (props.areOptionsOpen ? 'dmk-select-display-open-options' : '')} onClick={props.onClick}>
            {text}  
        </div>
        {props.children}  
    </div>);
}