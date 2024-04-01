import './AboutBrands.scss';
import br1 from '../../../../assets/brand-1.png'
import br2 from '../../../../assets/brand-2.png'
import br3 from '../../../../assets/brand-3.png'
import br4 from '../../../../assets/brand-4.png'
import br5 from '../../../../assets/brand-5.png'
import br6 from '../../../../assets/brand-6.png'
import br7 from '../../../../assets/brand-7.png'
import br8 from '../../../../assets/brand-8.png'
import br9 from '../../../../assets/brand-9.png'

const AboutBrands = () => {

    return (
        <div className="AboutBrands">
            <div className="container">
                <div className="AboutBrands__in">
                    <h2 className="AboutBrands__head">Производители, с которыми мы работаем</h2>
                    <div className="AboutBrands__body">
                        <div className="AboutBrands__body_item">
                            <img src={br1} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br2} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br3} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br4} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br5} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br6} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br7} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br8} alt="" />
                        </div>
                        <div className="AboutBrands__body_item">
                            <img src={br9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBrands;