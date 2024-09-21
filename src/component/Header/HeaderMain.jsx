import NavbarMain from "./Navbar";
import Header from "./Header";
import BusinessCard from "./BusinessCard";


const HeaderMain = () => {
    return (
        //In this component is the store of all header component;
        <div>
            <NavbarMain></NavbarMain>
            <Header></Header>
            <BusinessCard></BusinessCard>
        </div>
    );
};

export default HeaderMain;