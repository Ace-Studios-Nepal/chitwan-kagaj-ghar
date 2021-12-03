import React, { useState, useRef } from 'react';
import { Zoom } from 'react-slideshow-image';
// import style from './carousel.module.css';
import 'react-slideshow-image/dist/styles.css';

import ReactImageGallery from 'react-image-gallery';
import data from '../carousel';

// const CarouselImage = () => {
//   console.log(data);
//   const slideRef = useRef();
//   const [cr, setCr] = useState(data);
//   const zoomInProperties = {
//     indicators: true,

//     scale: 1.4,
//     canSwipe: true,
//     duration: 2000,
//     transitionDuration: 800,
//     pauseOnHover: true,
//   };
//   const goto = (id) => {
//     slideRef.current.goTo(id);
//   };
//   console.log(data);
//   return (
//     <div className='content-center self-center pt-5 '>
//       <Zoom {...zoomInProperties} ref={slideRef}>
//         {cr.map((each, index) => (
//           <>
//             <div key={index} style={{ width: '100%' }}>
//               <img
//                 style={{
//                   objectFit: 'cover',
//                   width: '100%',
//                   maxHeight: '500px',
//                 }}
//                 src={`/carousel/${index}.jpg`}
//               />
//               {/* <div className=''>
//                 <p className={style.text}>{each.name}</p>
//               </div> */}
//             </div>
//           </>
//         ))}
//       </Zoom>
//       {/* <div className={style.container}>
//         {cr.map((ss) => (
//           <div key={ss.id}>
//             <img
//               src={`/carousel/${ss.id}.jpg`}
//               alt={ss.name}
//               onClick={goto(ss.id)}
//             />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default CarouselImage;

const Carousel = () => {
  const images = [
    data.map((ss, index) => ({
      original: `https://www.chitwankagaj.com.np/services/${index}.jpg`,
      thumbnail: `https://www.chitwankagaj.com.np/services/${index}.jpg`,
    })),
  ];
  console.log(images);
  return (
    <div style={{ zIndex: '0' }}>
      <ReactImageGallery
        items={data.map((ss, index) => ({
          original: `/carousel/${index}.jpg`,
          thumbnail: `/carousel/${index}.jpg`,
        }))}
        autoPlay={true}
        slideInterval={5000}
        swipingTransitionDuration={1000}
        zIndex={0}
      />
      ;
    </div>
  );
};

export default Carousel;
