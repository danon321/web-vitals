import './Header.css';
import { useEffect, useState } from 'react';

import img from '../assets/optimalized/img-header.webp';

const Header = () => {
    const [isAdReady, setIsAdReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAdReady(true);
        }, 1500)
    }, [])

    const someOnClickFunction = () => {console.log()}

    return (
        <header className='header'>
            <h1>Some very important title of the site</h1>
            <div className='header-img-container'>
                {isAdReady && <img className='header-img' fetchpriority="high" width="1000" height="600" src={img} alt='asd' />}
            </div>
            <button className="button" onClick={someOnClickFunction}>Login</button>
        </header>
    );
}

export default Header;