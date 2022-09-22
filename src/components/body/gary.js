
import '../../assets/body.scss';

const Gary = (props) => {
    
    const {display} = props;

    return (
        <div className={display == false ? "gary gary-hidden" : "gary gary-show"}>
            <div className="header">
                Gary the GlueStick
            </div>
            <div className="body">
                <div className="horse">
                    <div className="desc">
                        <p>I'm afwere by:</p>
                        <p className="bold mb-3">I'm afwere by33l4k3j4l3k4j</p>
                        <p>level<span>age</span></p>
                        <p>eerere<span>445</span></p>
                    </div>
                    <div className="img">
                        <img src="./pAvarts/avart.png" />
                    </div>
                </div>
                <div className="rarity">
                    <p>Rarity</p>
                    <div className="first mt-2">
                        <p>8</p>
                        <span>12322</span>
                    </div>
                    <p>Level</p>
                    <div className="second mt-2">
                        <h5>20/20</h5>
                        <span>scoenrnnere: 9900.</span>
                    </div>
                    <p>Skills</p>
                    <div className="third mt-2">
                        <div>
                            <i className="fa fa-eye"></i>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-eye"></i>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-eye"></i>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-eye"></i>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <p>Options</p>
                    <div className="first mt-2">
                        <div>
                            <p></p>
                        </div>
                        <p>12312312312312</p>
                    </div>
                    <div className="imgs mt-4">
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                    </div>
                    <div className="imgs mt-4">
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                        <img src="./images/1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gary;