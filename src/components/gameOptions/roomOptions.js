
import '../../assets/dropdown.scss';

const RoomOptions = (props) => {

    const {display, click} = props;

    return (
        <div className={display == false ? "room-options room-options-hidden" : "room-options room-options-show"}>
            <div className="header">
                <div className="left">
                    <i class="fa fa-triangle-exclamation"></i>
                </div>
                <p className="center">Room Options</p>
                <div className="right">
                    <img src="./images/lottery.png" />
                </div>
                <button className="close-button" onClick={() => click()}>
                    <i class="fa fa-circle-chevron-left"></i>
                </button>
            </div>
            <div className="body">
                <div className="room-property">
                    <div className="left">
                        <img src="./images/lottery.png" />
                    </div>
                    <div className="right">
                        <p>I'mddfldk by:</p>
                        <h5>DudeLoolknRickeld</h5>
                        <div className="mt-2">
                            <img src="./images/1.png" />
                            <p>lkjlkjloiji</p>
                        </div>
                    </div>
                </div>
                <div className="room-property-actions mt-2">
                    <button>asdfasdfasd</button>
                    <button>asdfasdfasd</button>
                    <button>asdfasdfasd</button>
                </div>
                <div className="settings">
                    <div className="header">
                        <p>Settings</p>
                        <button>
                            <i className="fa fa-caret-up"></i>
                        </button>
                    </div>
                    <div className="lists">
                        <p>HUTI ALL</p>
                        <p>HUTI ALL</p>
                        <p>HUTI ALL</p>
                        <p>HUTI ALL</p>
                    </div>
                </div>
                <div className="history">
                    <div className="chat">
                        <div className="header">
                            <p>Chat History</p>
                        </div>
                        <div className="lists">
                            <p><span>Time: </span>That's... Colne....I supposed</p>
                            <p><span>Time: </span>That's... Colne....I supposed</p>
                            <p><span>Time: </span>That's... Colne....I supposed</p>
                            <p><span>Time: </span>That's... Colne....I supposed</p>
                            <button className="see-all">See All</button>
                        </div>
                    </div>
                    <div className="room">
                        <div className="header">
                            <p>Room History</p>
                        </div>
                        <div className="lists">
                            <p>That's... Colne....I supposed</p>
                            <p>That's... Colne....I supposed</p>
                            <p>That's... Colne....I supposed</p>
                            <p>That's... Colne....I supposed</p>
                            <button className="see-all">See All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomOptions;