import './Checkbox.scss';

const Checkbox  = ({name, id, label, checked, onChange}) => {

    return (
        <div className="Checkbox">
            <input onChange={onChange} type="checkbox" name={name} id={id} checked={checked}/>
            <label htmlFor={id} className="Checkbox__body">
                <div className="Checkbox__body_icon"></div>
                <div className="Checkbox__body_text">{label}</div>
            </label>
        </div>
    )
}

export default Checkbox;