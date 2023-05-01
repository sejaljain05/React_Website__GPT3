import React from 'react' ;
import './header.css' ;
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding ' id='Home'>
        <div className='gpt3__header-content'>
            <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAl</h1> 
            <p>Lorem ipsum dolorus illum corrupti asperiores dolor! Nisi iste magni nemo doloribus officia exercitationem rem veniam modi quae at quos asperiores eveniet deserunt quidem suscipit totam placeat eligendi atque aut, magnam ea quibusdam.</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Enter Your Email Address'/>
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt3__header-content__people'> 
            <img src={people}  alt='people_image'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, illo.</p>
          </div>
        </div>
        {/* <div className='gpt3__header-image'>
            <img src={ai} alt='ai_img'/>
        </div> */}
    </div>
  )
}

export default Header