import './Header.css';
import { Link }from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

    return (
        <header className="header-top">
            <div className="header-firstdiv">
                <h2 className="header-h2">BudgetPlan dashboard</h2>
                <span className='header-span' onClick={() => navigate(-1)}>
                🔙
                </span>
            </div>
        </header>
    );
}

export default Menu;