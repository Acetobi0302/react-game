import '../../assets/body.scss';
import {useState} from 'react';
import Gary from './gary';

const Body = () => {

    const [isShow, setShow] = useState(false);

    return (
        <div id="body" className="body container mt-5">
            <div className="game-field">
                <div className="contain">
                    <img src="./images/field.JPG"/>
                    <button className={isShow == false ? "hidden" : ""} onClick={() => setShow(!isShow)}>
                        <div>
                            <button className="check"><i className="fa fa-check"></i></button>
                            <button className="cancel">&times;</button>
                        </div>
                    </button>
                </div>
                <Gary display={isShow} />
            </div>
        </div>
    );
}

export default Body;