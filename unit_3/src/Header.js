import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/about'>О сайте</Link></li>
                <li><Link to='/cat'>Категории</Link></li>
            </ul>
        </>
    );
}

export default Header;