import './AboutTeam.scss';
import img1 from '../../../../assets/team-1.png'
import img2 from '../../../../assets/team-2.png'
import img3 from '../../../../assets/team-3.png'

const AboutTeam = () => {
    return (
        <div className="AboutTeam">
            <div className="container">
                <div className="AboutTeam__in">
                    <h2 className="AboutTeam__head">команда</h2>
                    <div className="AboutTeam__body">
                        <div className="AboutTeam__body_item">
                            <div className="AboutTeam__body_item_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="AboutTeam__body_item_descr">
                                <div className="AboutTeam__body_item_descr_pr">
                                Специалист по монтажу тепловых насосов
                                </div>
                                <div className="AboutTeam__body_item_descr_name">
                                Копылов А. М.
                                </div>
                            </div>
                        </div>
                        <div className="AboutTeam__body_item">
                            <div className="AboutTeam__body_item_img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="AboutTeam__body_item_descr">
                                <div className="AboutTeam__body_item_descr_pr">
                                Специалист по монтажу тепловых насосов
                                </div>
                                <div className="AboutTeam__body_item_descr_name">
                                Александров П. А.
                                </div>
                            </div>
                        </div>
                        <div className="AboutTeam__body_item">
                            <div className="AboutTeam__body_item_img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="AboutTeam__body_item_descr">
                                <div className="AboutTeam__body_item_descr_pr">
                                Специалист по монтажу тепловых насосов
                                </div>
                                <div className="AboutTeam__body_item_descr_name">
                                Соколов И. А.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam;