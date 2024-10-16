import './Header.css';
import { Link }from 'react-router-dom';
import image from '../Assets/Images/budget-icon.png';


const Menu = () => {

    return (
        <header className="header-top">
            <div className="header-firstdiv">
                <img className="header-img" src={image} width="50" height="50" alt="Logo"/>
                <span className="header-span">|</span>
                <h2 className="header-h2">BudgetPlan</h2>
            </div>
        </header>
    );
}

export default Menu;