import React from 'react';
import ReactDOM from 'react-dom'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'

const App = () => {
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic1} alt="profile picture" />
                </a>
                <div className="content">
                    <a hreh="/" className="author">
                        Sarah
                    </a>
                    <div className="metadata">
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        it's amazing
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic3} alt="profile picture" />
                </a>
                <div className="content">
                    <a hreh="/" className="author">
                        Jonny
                    </a>
                    <div className="metadata">
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        The future of Design!
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic3} alt="profile picture" />
                </a>
                <div className="content">
                    <a hreh="/" className="author">
                        Jonas
                    </a>
                    <div className="metadata">
                        <span className='date'>
                            Today at 4:05PM
                        </span>
                    </div>
                    <div className='text'>
                        Super!
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic4} alt="profile picture" />
                </a>
                <div className="content">
                    <a hreh="/" className="author">
                        Kadaf
                    </a>
                    <div className="metadata">
                        <span className='date'>
                            Today at 12:30AM
                        </span>
                    </div>
                    <div className='text'>
                        Breaking all the rules! Love It!
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)