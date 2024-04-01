import img1 from '../../../../assets/about-main-1.png';
import img2 from '../../../../assets/about-main-2.png';
import './AboutMain.scss';

const AboutMain = () => {

    return (
        <div className="AboutMain">
            <div className="container">
                <div className="AboutMain__in">
                    <div className="AboutMain__col">
                        <div className="AboutMain__col_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="AboutMain__col_body">
                            <h3 className="AboutMain__col_body_head">О НАС</h3>
                            <div className="AboutMain__col_body_text">
                                <p>
                                Продукция предназначена для стран СНГ с учетом всех особенностей тяжелых зим, резких изменений климата, учитываются все особенности питающих электрических сетей, низкие цены на все тепловые насосы с сохранением всех технологий, полный набор всех режимов в одном изделии (отопление, охлаждение, ГВС), самые современные контроллеры автоматики, двухкомпессорные системы позволяющие одновременную работу в режимах нагрева/охлаждения и ГВС.
 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="AboutMain__col">
                        <div className="AboutMain__col_body">
                            <h2 className="AboutMain__col_body_head AboutMain__col_body_head-mod">
                            Компания <span>KEYPUMPS</span>
                            </h2>
                            <div className="AboutMain__col_body_text">
                                <p>
                                Компания «KEYPUMPS» входит в группу компаний «KEY CORPORATION». Компания имеет более 12 лет опыта в монтаже и внедрении высокоэффективных систем отопления, вентиляции и кондиционирования на базе энергосберегающих технологий.
                                <br></br><br></br>
                                Применение выработанных решений в бизнес-центрах, гостиницах, банкахи прочих жилых и коммерческих зданиях. 
                                </p>
                            </div>
                        </div>

                        <div className="AboutMain__col_img">
                            <img src={img2} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain;