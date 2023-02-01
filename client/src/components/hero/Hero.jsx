import React from 'react'
import classes from './hero.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../../assets/man-having-his-meal.svg'

const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave healthy and delicious alternatives to your favorite food</h2>
          <p className={classes.firstMsg}>But going out or cooking it yourself<span> costs time and money....</span></p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br /> <span>delicious </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
            Our restaurant always puts the clients health and above all else.
            We create healthy alternatives to your favorite junk food.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonOrder}>Order now!</button>
            <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero