import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faComments, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
    function showMenuMob() {
        if(document.getElementById('navMob').classList.contains('show')) {
            document.getElementById('background_cont').classList.remove('background_show');
            document.getElementById('navMob').classList.remove('show');
        } else {
            document.getElementById('navMob').classList.add('show');
            document.getElementById('background_cont').classList.add('background_show');
        }
    }
    
    return (
        <div className="Header">
            <div className='inner_width'>
                <h2>QuizzApp</h2>
                <nav className='navBar'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#'>em breve...</a></li>
                    <li><a href='/Feedback'>Feedback</a></li>
                    <li><a href='#'>em breve...</a></li>
                </nav>
                <FontAwesomeIcon onClick={showMenuMob} icon={faBars} className='faBars' />
            </div>
            <div className='navBar_mob'>
                <div id='background_cont' className='backgroundCont'></div>
                <nav id='navMob'>
                    <li><a href='/'><FontAwesomeIcon icon={faHouse} className='faHouse' /></a></li>
                    <li><a href='#'>em breve...</a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faComments} className='faComments' /></a></li>
                    <li><a href='#'>em breve...</a></li>
                    <li><span><FontAwesomeIcon onClick={showMenuMob} icon={faXmark} className='faXmark' /></span></li>
                </nav>
            </div>

        </div>
    );
}

export default Header;