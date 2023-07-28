import React from 'react';
import Bio from './Bio';

const Home = () => {
  return (
    <div>
      <p className='font-bold text-6xl my-16' style={{ fontStyle: 'italic' }}>CJ Monet</p>
      <Bio />
      <div className='songs'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SupnCh4RKIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>"Cosmic Girl"</p>
      </div>
      <div className='songs'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ltVzoKegbYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>"Ask About Me"</p>
      </div>
      <div id="footer">
        <a href="https://www.youtube.com/channel/UCBZ57GwgpjCjHDhSz5meqhA" target="_blank" class="sqs-svg-icon--wrapper youtube" aria-label="Church Girls FH">
          <img src="https://img.icons8.com/?size=512&id=32292&format=png" />
        </a>
        <a href="http://instagram.com/churchgirlsphl" target="_blank" class="sqs-svg-icon--wrapper instagram" aria-label="Church Girls">
          <img src="https://img.icons8.com/?size=512&id=37326&format=png" />
        </a>
      </div>
    </div>
  );
};

export default Home;