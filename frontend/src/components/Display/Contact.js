import React from 'react'
import p1 from '../../Img/lec1.jpg'
import p2 from '../../Img/lec2.jpg'
import p3 from '../../Img/lec3.jpg'
import p4 from '../../Img/lec4.jpg'
import p5 from '../../Img/lec5.jpg'
import p6 from '../../Img/lec6.jpg'
import about from '../../CSS/about.module.css'

function Contact() {
  return (
    <div>
      <h1>We have experienced mentors in YogaMantra</h1>
      <h2>You can Mail to Our Mentors for any queries</h2>

      <div className={about.articles}>
      <article>
        <h2>Mr.Mahesh </h2>
        <img src={p3} alt='' height='5%'/>
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
       <div className={about.bio}>
       <p>Batch-Id: 1</p>
        <p className={about.p1}>Email:<span className={about.email}>mahesh@yogamantra.com</span></p>
       </div>
      </article>
      <article >
      <h2>Mr.Deepak Kumar</h2>
        <img src={p4} alt=''/>
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
       <div className={about.bio}>
       <p>Batch-Id: 2</p>
        <p className={about.p1}>Email:<span className={about.email}>deepakk@yogamantra.com</span></p>
       </div>
      </article>  
      <article >
        <h2>Priya Prakash</h2>
        <img src={p5} alt='' />
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className={about.bio}>
        <p>Batch-Id: 3</p>
        <p className={about.p1}>Email:<span className={about.email}>priyap@yogamantra.com</span></p>
        </div>
      </article>
      </div>
      <div className={about.articles}>
      <article>
        <h2>Samantha</h2>
        <img src={p1} alt=''/>
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
       <div className={about.bio}>
       <p>Batch-Id: 4</p>
        <p className={about.p1}>Email:<span className={about.email}>samantha@yogamantra.com</span></p>
       </div>
      </article>
      <article >
      <h2>Emma Waston</h2>
        <img src={p2} alt=''/>
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className={about.bio}>
        <p className={about.p1}>Head of YogaMantra</p>
        <p className={about.p1}>Email:<span className={about.email}>emmawaston@yogamantra.com</span></p>
        </div>
      </article>
      <article>
        <h2>Mr.Alex</h2>
        <img src={p6} alt='' />
        <p>There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
        </p>
         <div className={about.bio}>
         <p className={about.p1}>Head of yogamantra</p>
        <p className={about.p1}>Email:<span className={about.email}>alex@yogamantra.com</span></p>
         </div>
      </article> 
      </div>

      
      
    </div>
  )
}

export default Contact