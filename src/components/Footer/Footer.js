import './Footer.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import soc1 from '../../assets/svg/vk.svg';
import soc2 from '../../assets/svg/twitter.svg';
import soc3 from '../../assets/svg/fb.svg';


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__main">
                <div className="container">
                    <div className="Footer__main_in">
                        <div className="Footer__main_part">
                            <Link to={'/'} className="Footer__main_logo">
                                <img width={'200px'} src={'https://i.ibb.co.com/mtpJCsX/Group-13.png'} alt="" />
                            </Link>
                            <div className="Footer__main_soc">
	    {/* <a href="#" className="Footer__main_soc_item">
                                    <img src={soc1} alt="" />
                                </a>
                                <a href="#" className="Footer__main_soc_item">
                                    <img src={soc2} alt="" />
                                </a>
                                <a href="#" className="Footer__main_soc_item">
                                    <img src={soc3} alt="" />
                                </a> */}
                            </div>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Навигация</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><Link to={'/'}>Главная</Link></li>
                                <li className="Footer__main_list_item"><Link to={'/catalog'}>Каталог</Link></li>
                                <li className="Footer__main_list_item"><Link to={'/faq'}>Вопрос-ответ</Link></li>
                                <li className="Footer__main_list_item"><Link to={'/about'}>О нас</Link></li>
                            </ul>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Наши контакты</h3>
                            <div className="Footer__main_link">
                                <div className="Footer__main_link_name">Телефоны</div>
                                <a href="tel:+79886526888" className="Footer__main_link_val">+7 (988) 652 68 88</a>
                            </div>
                            <div className="Footer__main_link">
                                <div className="Footer__main_link_name">Email</div>
                                <a href="mailto:info@keypumps.ru" className="Footer__main_link_val">info@keypumps.ru</a>
                            </div>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Наш адрес</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><a href="#">
                                    Россия,<br></br>
                                    ООО "КЕЙ БИЛД", <br/> Сочи, Ленина, 298Б 
помещение 48Н, офис 4 
                                </a></li>
                            </ul>
                        </div>
                        <div className="Footer__main_part">
                            <h3 className="Footer__main_head">Информация</h3>
                            <ul className="Footer__main_list">
                                <li className="Footer__main_list_item"><Link to={'/delivery'}>Доставка и оплата</Link></li>
                                <li className="Footer__main_list_item"><a href="https://docs.google.com/document/d/1sNqiQu-HaoEXusGgeltchW4QTofAPUQ7_1NChMJjkEs/edit?usp=sharing" target='_blank' rel='noreferrer'>Политика конфиденциальности</a></li>
                                <li className="Footer__main_list_item"><a href="https://docs.google.com/document/d/1l3rws0IfLeWTW0_4AU24KAUKp1QkmkjODTz6lsHWNlI/edit?usp=sharing" target='_blank' rel='noreferrer'>Пользовательское соглашение</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer__ex">
                <div className="container">
                    <div className="Footer__ex_in">
                    © 2022  All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
