import '../../assets/actions.scss';

import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const Actions = (props) => {
    const {display, click} = props;
    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
        <div id="actions" className={display === false ? "actions_dropdown hidden" : "actions_dropdown show"}>
            <h3 id="actionName">Actions</h3>
            <ul id="actionList">
                <li>Idea</li>
                <li>Idea</li>
                <li>Idea</li>
                <li>Idea</li>
                <li>Idea</li>
                <li>Idea</li>
                <li>Sing
                    <i className="fa fa-play"></i>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>  
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}  

export default Actions;