import './App.modules.css'
import star from './assets/icon-star.svg'

function App() {

  return (
    <div className="App">
      <div className='container-rating'>
        <form action="">
          <img src={star} className="star-image" alt="" />
          <h1 className="title">How did we do?</h1>
          <p className='paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='container-number'>
            <p className='number'>1</p>
            <p className='number'>2</p>
            <p className='number'>3</p>
            <p className='number'>4</p>
            <p className='number'>5</p>
          </div>
          <button className="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default App
