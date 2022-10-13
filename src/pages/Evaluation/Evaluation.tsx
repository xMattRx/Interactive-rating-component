import { useState } from 'react'
import { Link } from 'react-router-dom'
import star from '../../assets/icon-star.svg'
import Number from '../../components/Number/Number'
import './Evaluation.scss'

export function Evaluation() {
    const [selected, setSelected] = useState(0);


    return (
        <div className='container-rating'>
            <form action="">
                <img src={star} className="star-image" alt="orange-star" />
                <h1 className="title">How did we do?</h1>
                <p className='paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className='container-number'>
                    <Number number={1} selected={selected} setSelected={setSelected} />
                    <Number number={2} selected={selected} setSelected={setSelected} />
                    <Number number={3} selected={selected} setSelected={setSelected} />
                    <Number number={4} selected={selected} setSelected={setSelected} />
                    <Number number={5} selected={selected} setSelected={setSelected} />
                </div>

                {selected === 0 ? <Link to={`/`}><button className="submit">SUBMIT</button></Link> :
                    <Link to={`/thank/${selected}`}><button className="submit">SUBMIT</button></Link>
                }

            </form>
        </div>
    )
}
