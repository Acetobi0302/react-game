

import '../../assets/slider.scss';

import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const LeftSlider = (props) => {

    const {display, click} = props;
    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
       <div className={display == false ? "slider slider-hidden" : "slider slider-show"}>
            <div className="left-part">
                <ul>
                    <li>
                        <i className="fa fa-search"></i>
                        <input placeholder="Search" />
                    </li>
                    <li>
                        <img src="./images/side-bar1.png" />
                    </li>
                    <li>
                        <button>My Rooms</button>
                    </li>
                    <li>
                        <button>Official Rooms</button>
                    </li>
                    <li>
                        <button>Top Rooms</button>
                    </li>
                    <li>
                        <button>All Rooms</button>
                    </li>
                </ul>
                <div className="plus">
                    <img src="./images/side-bar2.png" />
                </div>
            </div>
            <div className="right-part">
                <div className="logo">
                    <img src="./images/amazing.png" />
                </div>
                <ul>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>10</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>

                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>
                    <li>
                        <div className="item-card">
                            <img src="./images/item.png" />
                            <span>250</span>
                        </div>
                        <div className="content">
                            <h5>Super Room Name</h5>
                            <p>Tommy TuTone</p>
                            <div className="stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star empty"></i>
                                <i className="fa fa-star empty"></i>
                            </div>
                        </div>
                        <div className="info">
                            <img src="./images/info.png" />
                        </div>
                    </li>

                </ul>
            </div>
       </div>
    );
}

export default LeftSlider;