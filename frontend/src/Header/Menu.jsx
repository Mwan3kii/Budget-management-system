import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    return (
        <header className="header-top">
            <Link to={'/home'}>
                <div className="header-firstdiv">
                    <h2 className="header-h2">BudgetPlan dashboard</h2>
                    {/* <span className='header-span' onClick={() => navigate(-1)}>
                🔙
                </span> */}
                    <Link to="/logout" style={{ color: 'black', fontSize: '22px' }}>
                        Logout
                    </Link>
                </div>
            </Link>
        </header>
    );
}

export default Menu;