import '../../assets/dropdown.scss';
import LeftSlider from './leftSlider';

import { useState } from 'react';

const Dropdown = () => {

    const [isShow, setShow] = useState(false);

    return (
        <>
            <div className="dropdown-button container">
                <button className={isShow == false ? "" : "none"} onClick={() => setShow(true)}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
            <LeftSlider display={isShow} click={(val) => setShow(val)} />
            {
                isShow && 
                    <div id="back" className="fixed"></div>
            }
        </>
    );
}

export default Dropdown;