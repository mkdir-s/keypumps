import './Radio.scss';


const Radio = ({name, checked, id, label, onChange}) => {

    return (
        <div className="Radio">
            <input onChange={onChange} defaultChecked={checked} name={name} type="radio" className="Radio__input" id={id}/>
            <label htmlFor={id} className="Radio__body">
                <div className="Radio__body_icon"></div>
                <div className="Radio__body_text">{label}</div>
            </label>
        </div>
    )
}

export default Radio;