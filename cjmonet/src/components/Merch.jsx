import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Merch = () => {
  const [merchData, setMerchData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://cj-api-production.up.railway.app/artists/';

    axios
      .get(apiUrl)
      .then((response) => {
        setMerchData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h3>Merch</h3>
      {merchData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {merchData.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button>Buy Now</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Merch;
