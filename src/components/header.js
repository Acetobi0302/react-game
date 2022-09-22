
import '../assets/header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="coins_cen">
                    <div className="coins_sec">
                        <ul>
                            <li><img src="/avatars/1.png" />9999999</li>
                            <li><img src="/avatars/2.png" />9998</li>
                            <li><img src="/avatars/3.png" />650</li>
                        </ul>
                    </div>
                    <div className="coins_sec">
                        <ul>
                            <li><img src="/avatars/4.png" />12m</li>
                            <li><img src="/avatars/4.png" />active</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;