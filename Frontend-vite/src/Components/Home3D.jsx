import React from 'react';
import '../Css/MiddleContent.css';
import '../Css/Home3D.css';

const Home3D = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh-_BsdiUfnxtsvI8QuMZOAOd1qhIrj5J8Glyvj6OJPjpvORu7PeiabH8Om8-1jxrVGQ&usqp=CAU',
    'https://i.pinimg.com/736x/aa/de/a4/aadea412ac00af5b5f377d2715536431.jpg',
    'https://wallpapercave.com/wp/wp12803886.jpg',
    'https://media5.bollywoodhungama.in/wp-content/uploads/2024/12/Sikandar-1-306x393.jpg',
    'https://www.sonypictures.in/sites/india/files/2024-09/VNM3_INTL_OnLine_6072x9000_TSR_01_1mb.jpg',
    'https://c8.alamy.com/comp/2JHNAP7/madhavan-aamir-khan-sharman-joshi-poster-3-idiots-2009-2JHNAP7.jpg',
    'https://img.rgstatic.com/content/movie/a681e606-c027-4b90-9590-9a0732f84832/poster-342.jpg',
    'https://www.tallengestore.com/cdn/shop/products/Classic_Hindi_Movie_Poster_-_Munna_Bhai_MBBS_-_Tallenge_Bollywood_Poster_Collection_9580c26f-6c8e-4e71-b5d5-987ac47869b1.jpg',
    'https://i.pinimg.com/564x/d6/3b/e9/d63be93c02bb574e7b87816432dba24f.jpg',
  ];

  return (
    <div className="sm:h-4/5 sm:w-full bg-[#000B1F] sm:ml-20 relative ">
      <div className="banner">
        <div className="slider" style={{ '--quantity': images.length }}>
          {images.map((image, index) => (
            <div
              className="items"
              key={index}
              style={{ '--position': index + 1 }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3D;

