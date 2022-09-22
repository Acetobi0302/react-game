import { useState } from 'react';
import Actions from './actions';
import MainPerson from './mainPerson';
import Loloness from './loloness';
import ChatStyles from './chatStyles';
import ChatHistory from './chatHistory';
import RoomOptions from '../gameOptions/roomOptions';
import Faq from './faq';

const MainAvart = () => {
    const [isShow, setShow] = useState(false);
    const [mainPerson, setMainPerson] = useState(false);
    const [loloness, setLoloness] = useState(false);
    const [chatStyle, setChatStyle] = useState(false);
    const [chatHistory, setHistory] = useState(false);
    const [room, setRoom] = useState(false);
    const [faq, setFaq] = useState(false);

    return (
        <>
            <div className="leftAvarts">
                <div className="mainAvart">
                    <div className="avart">
                        <button onClick={() => setMainPerson(!mainPerson)}>
                            <img src="./pAvarts/pr.png" />
                        </button>
                        <MainPerson display={mainPerson} click={(val) => setMainPerson(val)} />
                        {
                            mainPerson && 
                                <div id="back" className="fixed"></div>
                        }
                    </div>
                    <div className="icons icon_trophy">
                        <button onClick={() => setHistory(!chatHistory)}>
                            <i className="fa fa-trophy"></i>
                        </button>
                        <ChatHistory display={chatHistory} click={(val) => setHistory(val)} />
                        {
                            chatHistory && 
                                <div id="back" className="fixed"></div>
                        }
                    </div>
                    <div className="icons icon_btmlft">
                        <button>
                            <i className="fa fa-building"></i>
                        </button>
                    </div>
                    <div className="icons icon_btmlft1">
                        <div className="actions">
                            <button onClick={()=> setShow(!isShow)}>
                                <i className="fa fa-black-tie"></i>
                            </button>
                            <Actions id="action" display={isShow} click={(val) => setShow(val)} />
                            
                        </div>
                            {
                                isShow && 
                                    <div id="back" className="fixed"></div>
                            }
                    </div>
                    <div className="icons icon_task">
                        <button>
                            <i className="fa fa-tasks"></i>
                        </button>
                    </div>
                    <div className="icons icon_circle">
                        <button onClick={() => setRoom(true)}>
                            <i className="fa fa-dot-circle-o"></i>
                        </button>
                        <RoomOptions display={room} click={() => setRoom(false)} />
                    </div>                
                </div>
                <div className="shops">
                    <div className="icon_shping">
                        <button>
                            <i class="fa fa-shopping-cart"></i>
                        </button>
                    </div>
                    <div className="icon_basket">
                        <button>
                            <i class="fa fa-shopping-basket"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="center">
                <button onClick={() => setChatStyle(!chatStyle)}>
                    <img src="./images/1.png" />
                </button>
                <p>You're a wizard Harry.
                    <button onClick={() => setLoloness(!loloness)}>
                        <img src="./images/1.png" />
                    </button>
                    <Loloness display={loloness} click={(val) => setLoloness(val)} />
                    {
                        loloness && 
                            <div id="back" className="fixed"></div>
                    }
                </p>
                <ChatStyles display={chatStyle} click={(val) => setChatStyle(val)} />
                {
                    chatStyle && 
                        <div id="back" className="fixed"></div>
                }
            </div>
            <div className="rightAvarts">
                <div className="icon_questin_sec">
                    <button onClick={() => setFaq(true)}>
                        <i class="fa fa-question"></i>
                    </button>
                    {
                        faq == true &&
                            <Faq click={(val) => setFaq(val)} />
                    }
                </div>
                <div className="icon_questin_sec">
                    <button>
                        <i class="fa fa-mobile"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default MainAvart;