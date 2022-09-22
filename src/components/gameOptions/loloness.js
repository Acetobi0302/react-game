
import '../../assets/actions.scss';

import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const Loloness = (props) => {

    const {display, click} = props;
    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
        <div className={display == false ? "loloness loloness-hidden" : "loloness loloness-show"}>
            <div className="header">
                LOLONESS
            </div>
            <div className="body">
                <div>
                    <div>
                        <p></p>
                        <p className="lol-none"></p>
                        <p className="lol-none"></p>
                    </div>
                    <p>Whlopor</p>
                </div>
                <div>
                    <div>
                        <p></p>
                        <p></p>
                        <p className="lol-none"></p>
                    </div>
                    <p>Whlopor</p>
                </div>
                <div>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <p>Whlopor</p>
                </div>
            </div>
        </div>
    );
}   

export default Loloness;