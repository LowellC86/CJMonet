import React from 'react';

const Bio = () => {
  return (
    <div id="bio" style={{ paddingInline: '2.5vw' }}>
      <h3>Hi there 👋 </h3>
      <img
        src="https://cdn.canvasrebel.com/wp-content/uploads/2022/10/c-PersonalCJMont__3A1D911C77B4403FB5AF4B62B05DEAAE_1664831544559-1536x1536.jpeg"
        alt="Artist"
        style={{ width: '60%', maxWidth: '600px', margin: '0 auto' }}
      />
      <p>My work explores the relationship between words, music, art, and movement. A picture is worth a thousand words, but what if that picture could actually be a thousand words or more? My work has evolved over time from just painting and drawing to portraits made completely out of words.</p>
      <p>My background is not in studio art, but in art theory, art history, and neuroscience. I learned a lot about how art and music are perceived by people, both societally and biologically. My art is the madness to the method; my love for method is the routine to the madness found in the art I create.</p>
      <p>Above all, I create art to honor moments. Whether that is a feeling that I want to evoke in an abstract painting, or a legendary artist memorialized by the words that they sing—my art is found at the intersection of a moment and what makes the moment unique from another.</p>
    </div>
  );
};

export default Bio;