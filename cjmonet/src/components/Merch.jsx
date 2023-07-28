import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import { auth } from '../firebase';

const Merch = () => {
  const [merchData, setMerchData] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  })

  useEffect(() => {
    const apiUrl = 'https://cj-api-production.up.railway.app/artists/';

    async function getMerch() {
      await axios
        .get(apiUrl)
        .then((response) => {
          setMerchData(response.data);
          console.log("response data:", response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
    getMerch();
    
    const unsubscribe = onAuthStateChanged(auth, setUser); 
    return () => unsubscribe(); 
  }, []);

  return (
    <div>
      <h3>Merch</h3>
      {user ? (
        merchData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {merchData.map((item, index) => (
              <li key={index} className='flex flex-col items-center justify-center px-8'>
                <h4>{item.name}</h4>
                <img className='rounded-xl my-2' src={item.photo_url} style={{ width: '40%' }} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button
                  // onClick={() => fetch('https://cj-api-production.up.railway.app/checkout', {')}
                >
                  Buy Now
                </button>
              </li>
            ))}
          </ul>
        )
      ) : (
        <div>
          <p>Sign up to view merch!</p>
          <div className='flex flex-col gap-y-4'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={async() => {
              console.log("email is:", email)
              console.log("password is:", password)
              await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  console.log("user is:", userCredential.user);
                  setUser(userCredential.user);
                })
                .catch((error) => {
                  console.log("error is:", error);
                  alert(error.message);
                })
            }}>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merch;
