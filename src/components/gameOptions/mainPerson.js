
import '../../assets/actions.scss';
import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const MainPerson = (props) => {

    const {display, click} = props;
    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
        <div className={display === false ? "main-person main-person-hidden" : "main-person main-person-show"}>
            <div className="header">
                <div className="left">
                    <i class="fa fa-triangle-exclamation"></i>
                </div>
                <p className="center">DudeLaoksLikeAlady</p>
                <div className="right">
                    <img src="./images/lottery.png" />
                </div>
            </div>
            <div className="body">
                <div className="person-info">
                    <div className="person">
                        <img src="./pAvarts/avart.png" />
                        <img src="./images/1.png" />
                    </div>
                    <div className="desc">
                        <div className="header">
                            <h5>Good day sunshine. Good day, Good day</h5>
                            <p>Laaaaa: 123123123</p>
                            <p>Laaaaa: 123123123</p>
                        </div>
                        <div className="body">
                            <div>
                                <h5>Achievemeets</h5>
                                <p>199992/999999</p>
                            </div>
                            <div>
                                <h5>Achievemeets</h5>
                                <p>199992/999999</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="badges mt-3">
                    <div className="header">
                        <p>Badges & Groups</p>
                        <i className="fa fa-play"></i>
                    </div>
                    <div className="body">
                        <div className="mt-3">
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                        </div>
                        <div className="mt-3">
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                        </div>
                    </div>
                </div>
                <div className="rooms mt-3">
                    <div className="header">
                        <p>Rooms</p>
                        <i className="fa fa-play"></i>
                    </div>
                    <div className="body">
                        <div className="mt-3">
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                        </div>
                        <div className="mt-3">
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                            <img src="./images/1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPerson;