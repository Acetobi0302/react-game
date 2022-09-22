
import '../../assets/actions.scss';

const Faq = (props) => {

    const {click} = props;

    return (
        <div className="faq">
            <i className="fa fa-triangle-exclamation"></i>
            <h1>Thanks for your call</h1>
            <p>A member of our Community Staff will investigate the situation and take appropriate action.</p>
            <p>Please check <a>Service updates on the FAQs</a> for known technical problems.</p>
            <button onClick={() => click(false)}><i class="fa fa-check" aria-hidden="true"></i></button>
        </div>
    );
}

export default Faq;