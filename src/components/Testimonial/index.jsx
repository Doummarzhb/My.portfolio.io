import React from 'react'
import "./testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'Swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {profile3,profile4,profile5,profile6} from '../../images'

const data = [
  {
    avatar:profile3,
    name:'Company:Softwave',
    review:``
  },
  {
    avatar:profile4,
    name:'company: telepaty',
    review:``
  },
  // {
  //   avatar:profile5,
  //   name:'dadada',
  //   review:`dff`
  // },
  // {
  //   avatar:profile6,
  //   name:'dadada',
  //   review:`dff`
  // },

]
function Testimonial() {
  return (
    <section id='testimonial'>
      <div className='section__wrapper'>
        <div className='section__header'>
          <h2 className='primary__title'>Testimonial</h2>
          <p className='text__muted description'>
          Discover what clients are saying about their experiences working 
          with me as their trusted web developer. From startups to established businesses, my dedication 
          to crafting exceptional online experiences shines through in their words. 
          </p>
        </div>
        <Swiper className='testimonial__container'
          modules={{Pagination}}
          spaceBetween={40}
          slidesPerView={1}
          pagination = {{clickable:true}}
          breakpoints={{
            700:{
              slidesPerView:2,
            }
          }}
           >
            {
              data.map(({avatar,name,review},index)=>(
                <SwiperSlide className='testimonial' key={index}>
                  <div className='client__avatar'>
                    <img src={avatar} alt={review}/>
                  </div>
                  <h3 className='client__name'>{name}</h3>
                  <small className='client__review'>{review}</small>

                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
      
    </section>
  )
}

export default Testimonial
