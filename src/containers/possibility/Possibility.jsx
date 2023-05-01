import React from 'react' ;
import './possibility.css' ;
import possibilityImage from '../../assets/possibility.png';
const possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility_image'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1 className='gradient__text' >The Possibilities are beyond your Imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quae at vitae amet dicta adipisci molestiae dolore ullam accusantium! Molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum exercitationem possimus inventore. Amet, ducimus!</p>
        <h4>Lorem ipsum dolor sit amet Lorem ipsum dolor sit..</h4>

      </div>
    </div>
  )
}

export default possibility