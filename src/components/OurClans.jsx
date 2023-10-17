import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OurClans() {
  const [clans, setClans] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  useEffect(() => {
    axios.get('http://localhost:3002/clans')
      .then(response => {
        // Split the clans array into two separate arrays, one for each row
        const middleIndex = Math.floor(response.data.length / 2);
        const firstRow = response.data.slice(0, middleIndex);
        const secondRow = response.data.slice(middleIndex);
        setClans([firstRow, secondRow]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  if (!clans || clans.length !== 2) {
    return <div>Loading...</div>;
  }

  return (
    <div id="OurClans" className="mt-20">
      <div className='flex justify-start items-center ml-[8.3%]'>
        <img src="/icons/Village.png" alt="Purple Building Icon" className="w-12 h-auto mr-4" />
        <h1 className="max-md:text-3xl text-4xl font-bold drop-shadow-5xl w-full">Our Clans.</h1>
      </div>
      <div className="slider-container mt-8">
        <Slider
          dots={false}
          arrows={false}
          infinite={true}
          speed={1000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1600}
          pauseOnHover={true}
          responsive={[
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]}
        >
          {clans[0].map((item, index) => (
            <div
              key={item.tag}
              className="icon-item p-2 relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${item.tag}`} rel="noopener noreferrer">
                <img src={item.badgeUrls.medium} alt={item.description} className={`object-contain h-full w-full rounded-lg ${hoveredIndex === index ? 'opacity-50 blur-sm' : ''}`} />
              </a>
              <div className={`icon-item-text w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 text-white text-center z-10`}>
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <a href={`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${item.tag}`} className="text-lg">{item.description}</a>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          dots={false}
          arrows={false}
          infinite={true}
          speed={1000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1600}
          pauseOnHover={true}
          rtl={true}
          responsive={[
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]}
        >
          {clans[1].map((item, index) => (
            <div
              key={item.tag}
              className="icon-item p-2 relative"
              onMouseEnter={() => handleMouseEnter(index + clans[0].length)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${item.tag}`} rel="noopener noreferrer">
                <img src={item.badgeUrls.medium} alt={item.description} className={`object-contain h-full w-full rounded-lg ${hoveredIndex === index + clans[0].length ? 'opacity-50 blur-sm' : ''}`} />
              </a>
              <div className={`icon-item-text w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${hoveredIndex === index + clans[0].length ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 text-white text-center z-10`}>
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <a href={`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${item.tag}`} className="text-lg">{item.description}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurClans;