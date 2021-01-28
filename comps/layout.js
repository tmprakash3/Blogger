import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;