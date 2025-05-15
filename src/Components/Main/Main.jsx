import React, {useEffect} from 'react'
import './main.css'
import './main.scss'

//import icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

//Let me import the images so we dont have this error on the browser
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'
//Let me paste the array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is a remote island in the Pacific Ocean.The island is a popular holiday destination for both locals and visitors from around the world. The island is a popular holiday destination for both locals and visitors from around the world.'
},

{
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a city and a municipality in the southern Andean region of Peru. Located on the western bank of the Río de la Plata in the Andes Mountains, it is the largest city in the Andes and the capital of the Andean Country. Huayna Picchu is a city and a municipality in the southern Andean region of Peru.'
},

{
  id: 3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'One of the most beautiful places on Earth, the Great Barrier Reef is a giant coral reef that sits at the mouth of the Sugarloaf River in the North Atlantic Ocean. The barrier is 2,200 metres (7,700 ft) long and is the largest barrier reef in the world. It is located in the Strait of Gibraltar, in the North Atlantic Ocean.'

},

{
  id: 4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'According to the World Tourism Ranking, Cappadocia is the most visited tourist destination in the world. The city is located in the northwestern part of Turkey, in the Anatolian Plateau. The city is located in the northwestern part of Turkey, in the Anatolian Plateau.'
},

{
  id: 5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade: 'CULTURAL RELAX',
  fees: '$1100',
  description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and the industrialization of the region. The city is located in the state of Guanajuato, in the state of Jalisco.'
},

{
  id: 6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Italy',
  grade: 'CULTURAL RELAX',
  fees: '$840',
  description: 'The vibrant hues of the houses are its benchmark color palette, while the soothing tones of the trees and the lush greenery of the meadows make this a truly unique destination.'
},

{
  id: 7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX',
  fees: '$790',
  description: 'Angkor Wat is a rocky island in the south-eastern part of the Koh Lipe Province of Cambodia. It is the largest island in the world and the second largest in the world after Java. The island is located in the northwestern part of the province.'
},

{
  id: 8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'An inmense mausoleum of white marble in the centre of the city of Tah Mahal, in the state of Uttar Pradesh, India. The mausoleum is located in the state of Uttar Pradesh, India.'
},

{
  id: 9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description: 'Bali is an Indonesian Island and one of the best holiday destinations in the world. The island is a popular holiday destination for both locals and visitors from around the world. The island is a popular holiday destination for both locals and visitors from around the world.'
},

]

const Main = () => {
  //Lets create a react hook to add a scroll animation...
useEffect(() => {
  Aos.init({duration: 2000})
}, [])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/**So guys, here we are going to use high order array method(map). 
         * To do we shall use a list of object in one array. I'm going to 
         * create an array named data and from that we shall .map() array to
         * fecth each destination at once. I hope this will make sense to you */}
      
        {
          Data.map(({id, imgSrc, destTitle,location, grade, fees, description })=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/**Here ir will return single id from the map array */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
              </div>
            )
          })
        }
      
      </div>

    </section>
  )
}

export default Main