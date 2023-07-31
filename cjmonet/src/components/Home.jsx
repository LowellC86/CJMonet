import React from 'react';
import Bio from './Bio';

const Home = () => {
  return (
    <div>
      <p className='font-bold text-6xl my-16' style={{ fontStyle: 'italic' }}>CJ Monet</p>
      <Bio />
      <div className='songs'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SupnCh4RKIE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>"Cosmic Girl"</p>
      </div>
      <div className='songs'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ltVzoKegbYg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>"Ask About Me"</p>
      </div>
      <div id="footer">
        <a href="https://www.instagram.com/cj.monet/?hl=en" target="_blank" className="sqs-svg-icon--wrapper youtube" aria-label="CJ Monet">
          <img
            src="https://img.icons8.com/?size=512&id=32292&format=png"
            className="icon"
            style={{ width: '32px', height: '32px', filter: 'invert(1) saturate(1.2)' }}
            alt="YouTube"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCwZsyKztBoHY9XO-9Qn7lQQ" target="_blank" className="sqs-svg-icon--wrapper instagram" aria-label="CJ Monet">
          <img
            src="https://img.icons8.com/?size=512&id=37326&format=png"
            className="icon"
            style={{ width: '32px', height: '32px', filter: 'invert(1) saturate(1.2)' }}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
