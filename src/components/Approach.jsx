import React from 'react'
import one from '../assets/Approach-1.png'
import two from '../assets/Approach-2.png'
import three from '../assets/Approach-3.png'
import four from '../assets/Approach-4.png'
import Container from './Container';
const Approach = () => {
  return (
    <div className='py-30'>
      <Container>
      <div className="">
        <h2 className="text-5xl font-bold uppercase text-center">Our Approach to fashion design </h2>
        <p className='w-150 mx-auto text-center text-xl py-3'>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
      </div>
      <div className="py-20 flex justify-between">
        <div className="">
          <img src={one} alt="one" />
        </div>
        <div className="pt-20">
          <img src={two} alt="two" />
        </div>
        <div className="">
          <img src={three} alt="three" />
        </div>
        <div className="pt-20">
          <img src={four} alt="four" />
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Approach
