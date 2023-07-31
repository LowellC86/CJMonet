import React from 'react';

const Home = () => {
  return (
    <div>
      <p className='font-bold text-6xl my-16' style={{ fontStyle: 'italic' }}>CJ Monet</p>
      {/* Remove the Bio component and YouTube links */}
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
