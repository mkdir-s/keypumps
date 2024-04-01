import './IconButton.scss';


const IconButton = ({beforeIcon, afterIcon, text, onlyIcon, variant, onClick}) => {
    return (
        <button onClick={onClick} className={"IconButton " + (variant ? variant : '')}>
            {
                beforeIcon ? (
                    <span className={"IconButton__before " + (onlyIcon ? 'only-icon' : '')}>
                        {beforeIcon}
                    </span>
                ) : null
            }
            <span className="IconButton__text">{text}</span>
            {
                afterIcon ? (
                    <span className={"IconButton__after " + (onlyIcon ? 'only-icon' : '')}>
                        {afterIcon}
                    </span>
                ) : null
            }
        </button>
    )
}

export default IconButton;