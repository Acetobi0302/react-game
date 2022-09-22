
import {UserContext} from '../provider/UserProvider';
import {useContext, useEffect, useState} from 'react';

const ChatStyles = (props) => {

    const {display, click} = props;

    const {target} = useContext(UserContext);

    useEffect(() => {
        if(target == document.getElementById("back")) {
            click(false);
        }
    }, [target]);

    return (
        <div className={display == false ? "chat-styles chat-styles-hidden" : "chat-styles chat-styles-show"}>
            <div className="header">
                <div className="icons">
                    <img src="./images/1.png" />
                    <div>
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                    </div>
                </div>
                <p>CHAT STYLES</p>
                <div className="icons icons-hidden">
                    <img src="./images/1.png" />
                    <div>
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                    </div>
                </div>
            </div>
            <div className="contain">
                <div className="body">
                    <button className="gray">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="pink">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="blue">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="dark">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="gray">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="pink">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="blue">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="dark">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="gray">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="pink">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="blue">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                    <button className="dark">
                        <p>The quick boekkdfdkjjdjfdfkjdkfjdkfdjfjdkfjd</p>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default ChatStyles;