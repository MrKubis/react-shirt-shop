import {Outlet,useLocation} from "react-router-dom"
import { AnimatePresence,motion } from "framer-motion"
import NavBar from "../Navbar.jsx"
import { ToastContainer, toast } from 'react-toastify';

function Layout(){
    
    const location = useLocation()
    return(
        <>
        <NavBar />
        <AnimatePresence mode = "wait" initial={false}>
            <motion.div
            key = {location.pathname}
 
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={{opacity:0}}
            transition={{duration:0.2}}
            >            
                <Outlet/>
            </motion.div>
            </AnimatePresence>
                <ToastContainer
                position="bottom-right"
                />
        </>
    );

}

export default Layout