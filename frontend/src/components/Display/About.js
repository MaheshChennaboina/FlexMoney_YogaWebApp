import React from 'react'
import p1 from '../../Img/person1.jpg'
import p2 from '../../Img/person2.jpg'
import p3 from '../../Img/person3.jpg'
import p4 from '../../Img/person4.jpg'
import p5 from '../../Img/person5.jpg'
import p6 from '../../Img/person6.jpg'
import about from '../../CSS/about.module.css'


function About() {
  let color = []
  return (
    <div className={about.overall}>
      <h1><span className={about.highlight}>YogaMantra</span> is a secret to healthy and successfull Life </h1>
      <p style={{color:"green",fontSize:"1.2rem", fontFamily:"cursive"}}> YogaMantra beings your inner peace and make your day awesome</p>
      <h1>Here our some our users about <span className={about.highlight}>YogaMantra</span></h1>
      <div className={about.articles}>
      <article>
        <h2>Improves Digestion issues</h2>
        <img src={p3} alt='' height='5%'/>
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article>
      <article >
      <h2> Teaches you right way to breath</h2>
        <img src={p4} alt=''/>
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article>  
      <article >
        <h2>Increase mental power</h2>
        <img src={p5} alt='' />
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article>
      </div>
      <div className={about.articles}>
      <article>
        <h2>Making Myself Best Than Before</h2>
        <img src={p1} alt=''/>
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article>
      <article >
      <h2>Increased Life Quality</h2>
        <img src={p2} alt=''/>
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article>
      <article>
        <h2>More Energetic and alive</h2>
        <img src={p6} alt='' />
        <p>Yoga is a peaceful and healthy routine. 
       I have been doing yoga for 6months and experienced terrific results.
        As you do many stretches in yoga and get more flexibility in your body.
         It will help to work on your digestive system. 
        You can see results every single day.
        </p>
      </article> 
      </div>
    </div>
  )
}

export default About