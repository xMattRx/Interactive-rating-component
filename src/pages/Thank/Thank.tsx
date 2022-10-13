import { useParams } from 'react-router-dom';
import thank from '../../assets/illustration-thank-you.svg';
import './Thank.scss';

export function Thank() {
    const { id } = useParams();

    return (
        <div className='container-thank'>
            <form action="">
                <img src={thank} className="thank-image" alt="phone" />


                <p className="selected">You selected {id} out of 5</p>
                <h1>Thank you!</h1>
                <p className="paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </form>
        </div>
    )
}

