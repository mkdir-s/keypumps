import './FaqPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Collapse } from 'antd';
import {motion} from 'framer-motion';
import Fb from '../../components/Fb/Fb';

const {Panel} = Collapse;


const FaqPage = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="FaqPage">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="FaqPage__in">
                    <h2 className="FaqPage__head">
                        Ответы на часто задаваемые вопросы
                    </h2>
                    <div className="FaqPage__body">
                        <Collapse className='FaqPage__body_acc' expandIconPosition='end'>
                            <Panel className='FaqPage__body_acc_item' header={'Вы осуществляете доставку?'}>
                                <div className="FaqPage__body_acc_item_content">
                                Техническое обслуживание тепловых насосов для отопления и охлаждения — ключевой фактор долговечности климатической системы. Вовремя обнаруженные отклонения рабочих параметров системы от заданных, помогут сохранить работоспособность оборудования, не прибегая к дорогостоящему ремонту.
                                </div>
                            </Panel>
                            <Panel className='FaqPage__body_acc_item' header={'Установка и монтаж облорудования включены в стоимость?'}>
                                <div className="FaqPage__body_acc_item_content">
                                Техническое обслуживание тепловых насосов для отопления и охлаждения — ключевой фактор долговечности климатической системы. Вовремя обнаруженные отклонения рабочих параметров системы от заданных, помогут сохранить работоспособность оборудования, не прибегая к дорогостоящему ремонту.
                                </div>
                            </Panel>
                            <Panel className='FaqPage__body_acc_item' header={'Как оплатить?'}>
                                <div className="FaqPage__body_acc_item_content">
                                Техническое обслуживание тепловых насосов для отопления и охлаждения — ключевой фактор долговечности климатической системы. Вовремя обнаруженные отклонения рабочих параметров системы от заданных, помогут сохранить работоспособность оборудования, не прибегая к дорогостоящему ремонту.
                                </div>
                            </Panel>
                            <Panel className='FaqPage__body_acc_item' header={'Обслуживание тепловых насосов'}>
                                <div className="FaqPage__body_acc_item_content">
                                Техническое обслуживание тепловых насосов для отопления и охлаждения — ключевой фактор долговечности климатической системы. Вовремя обнаруженные отклонения рабочих параметров системы от заданных, помогут сохранить работоспособность оборудования, не прибегая к дорогостоящему ремонту.
                                </div>
                            </Panel>
                            <Panel className='FaqPage__body_acc_item' header={'В какие сроки происходит установка?'}>
                                <div className="FaqPage__body_acc_item_content">
                                Техническое обслуживание тепловых насосов для отопления и охлаждения — ключевой фактор долговечности климатической системы. Вовремя обнаруженные отклонения рабочих параметров системы от заданных, помогут сохранить работоспособность оборудования, не прибегая к дорогостоящему ремонту.
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
            <Fb/>
        </motion.div>
    )
}

export default FaqPage;