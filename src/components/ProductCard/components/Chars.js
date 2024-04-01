import './Chars.scss';

const Chars = ({list}) => {
    return (
        <div className="Chars">
            {
                list?.length > 0 ? (
                    list.map((item,index) => (
                        <div className="Chars__item" key={index}>
                            <div className="Chars__item_name">{item.key}</div>
                            <div className="Chars__item_value">{item.value}</div>
                        </div>
                    ))
                ) : null
            }
            
        </div>
    )
}

export default Chars;