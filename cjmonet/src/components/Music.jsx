import React from 'react';

const Music = () => {
  return (
    <div>
      <h3>New Music!</h3>
      <div className='songs' style={{ maxWidth: '560px', margin: '0 auto' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MyTBJ93sPaw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>"Clementine"</p>
      </div>
      <div className='songs' style={{ maxWidth: '560px', margin: '0 auto' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h3bO-uadS4g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>"Say Grace"</p>
      </div>
      <div id="footer">
        <a
          href="https://www.instagram.com/cj.monet/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="sqs-svg-icon--wrapper youtube"
          aria-label="CJ Monet"
        >
          <img
            src="https://img.icons8.com/?size=512&id=32292&format=png"
            alt="YouTube"
            className="icon"
            style={{ width: '32px', height: '32px', filter: 'invert(1) saturate(1.2)' }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCwZsyKztBoHY9XO-9Qn7lQQ"
          target="_blank"
          rel="noopener noreferrer"
          className="sqs-svg-icon--wrapper instagram"
          aria-label="CJ Monet"
        >
          <img
            src="https://img.icons8.com/?size=512&id=37326&format=png"
            alt="Instagram"
            className="icon"
            style={{ width: '32px', height: '32px', filter: 'invert(1) saturate(1.2)' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Music;