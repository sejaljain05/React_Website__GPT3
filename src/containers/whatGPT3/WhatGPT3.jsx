import React from 'react' ;
import './whatGPT3.css' ;
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
           <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas consectetur vitae in tenetur illo voluptatum quod voluptates facere odio."/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="ChatBox" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas consectetur vitae in tenetur illo voluptatum quod voluptates facere odio."/>
          <Feature title="Knowledge" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas consectetur vitae in tenetur illo voluptatum quod voluptates facere odio."/>
          <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas consectetur vitae in tenetur illo voluptatum quod voluptates facere odio."/>
        </div>
    </div>
  )
}

export default WhatGPT3
