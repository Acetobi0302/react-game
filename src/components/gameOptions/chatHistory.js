
import '../../assets/actions.scss';
import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const ChatHistory = (props) => {
    
    const {display, click} = props;

    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
        <div className={display == false ? "chat-history chat-history-hidden" : "chat-history chat-history-show"}>
            <div class="header">
                CHAT HISTORY
            </div>
            <div className="body">
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
                <p><span>user:</span>Good morning</p>
            </div>
        </div>
    );
}

export default ChatHistory;