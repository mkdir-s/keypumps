import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { motion } from "framer-motion";
//parts
import AboutMain from "./components/AboutMain/AboutMain";
import AboutWh from "./components/AboutWh/AboutWh";
import AboutInd from "./components/AboutInd/AboutInd";
import AboutBrands from "./components/AboutBrands/AboutBrands";
import AboutTeam from "./components/AboutTeam/AboutTeam";
import AboutFb from "./components/AboutFb/AboutFb";

const AboutPage = () => {
    return (
        <motion.div 
            className="AboutPage body-part"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
             >
            {/* <Breadcrumbs/> */}
            <AboutMain/>
            <AboutWh/>
            <AboutInd/>
            <AboutBrands/>
            <AboutTeam/>
            <AboutFb/>

        </motion.div>
    )
}

export default AboutPage;