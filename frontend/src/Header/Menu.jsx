import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    return (
        <header className="header-top">
            <Link to={'/home'}>
                <div className="header-firstdiv">
                    <h2 className="header-h2">BudgetPlan dashboard</h2>
                    <div className='logout-header' class="fa fa-sign-out">
                        <Link to="/logout"  style={{ color: 'white', fontSize: '22px', fontWeight: '400' }}>
                            Logout
                        </Link>
                    </div>
                </div>
            </Link>
        </header>
    );
}

export default Menu;