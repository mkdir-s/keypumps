import './Button.scss';import { LoadingOutlined } from '@ant-design/icons';

const Button = ({text, disabled, variant, style, onClick, type, load}) => {
    return (
        <button type={type ? type : 'button'} disabled={disabled} onClick={onClick} className={"Button " + variant + ` ${load ? ' load ' : ''}`} style={style}>
            {
                load ? (
                    <div className="Button__load">
                        <LoadingOutlined spin/>
                    </div>
                ) : null
            }
            <span className="Button__text">
                {text}
            </span>
        </button>
    )
}


export default Button;