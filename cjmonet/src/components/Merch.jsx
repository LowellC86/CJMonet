import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Merch = () => {
  const [merchData, setMerchData] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [paintingOptions, setPaintingOptions] = useState([]);
  const [stickerOptions, setStickerOptions] = useState([]);
  const [cart, setCart] = useState([]); // Shopping cart

  useEffect(() => {
    const apiUrl = 'https://cj-api-production.up.railway.app/artists/';

    async function getMerch() {
      try {
        const response = await axios.get(apiUrl);
        setMerchData(response.data);
        console.log("response data:", response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getMerch();

    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleViewButtonClick = (item) => {
    window.open(item.preview_url || item.image_url, '_blank');
  };

  const handleBuyButtonClick = async (item) => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setPurchaseSuccess(true);
    }, 2000);
  };

  // Function to add item to cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove item from cart
  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  useEffect(() => {
    async function fetchPaintingOptions() {
      try {
        const response = await axios.get('https://cj-api-production.up.railway.app/paintings/');
        setPaintingOptions(response.data);
      } catch (error) {
        console.error('Error fetching painting options:', error);
      }
    }
    fetchPaintingOptions();

    async function fetchStickerOptions() {
      try {
        const response = await axios.get('https://cj-api-production.up.railway.app/sticker/');
        setStickerOptions(response.data);
      } catch (error) {
        console.error('Error fetching sticker options:', error);
      }
    }
    fetchStickerOptions();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}!</h2>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Sign up to view merch!</p>
          <div className='flex flex-col gap-y-4'>
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={async () => {
              console.log("email is:", email)
              console.log("password is:", password)
              try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("user is:", userCredential.user);
                setUser(userCredential.user);
              } catch (error) {
                console.log("error is:", error);
                alert(error.message);
              }
            }}>
              Sign Up
            </button>
          </div>
        </div>
      )}

      {merchData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>Merch</h3>
          <ul>
            {merchData.map((item, index) => (
              <li key={index} className='flex flex-col items-center justify-center px-8'>
                <h4>{item.name}</h4>
                <img className='rounded-xl my-2' src={item.photo_url} style={{ width: '40%' }} alt={item.name} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleViewButtonClick(item)}>View</button>
                <button onClick={() => handleBuyButtonClick(item)}>Buy Now</button>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isLoading && <p>Loading...</p>}
      {purchaseSuccess && <p>Payment successful! Thank you for your purchase.</p>}

      {/* Display painting options */}
      <h3>Painting Options</h3>
      {paintingOptions.length === 0 ? (
        <p>Loading painting options...</p>
      ) : (
        <ul>
          {paintingOptions.map((option) => (
            <li key={option.id}>
              <h4>{option.title}</h4>
              <img
                className='rounded-xl my-2'
                src={option.preview_url}
                style={{ width: '40%' }}
                alt={option.title}
              />
              <p>{option.description}</p>
              <p>Price: ${option.price}</p>
              <button onClick={() => handleViewButtonClick(option)}>View</button>
              <button onClick={() => handleBuyButtonClick(option)}>Buy Now</button>
              <button onClick={() => handleAddToCart(option)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}

      {/* Display sticker options */}
      <h3>Sticker Options</h3>
      {stickerOptions.length === 0 ? (
        <p>Loading sticker options...</p>
      ) : (
        <ul>
          {stickerOptions.map((option) => (
            <li key={option.id}>
              <h4>{option.title}</h4>
              <img
                className='rounded-xl my-2'
                src={option.image_url}
                style={{ width: '40%' }}
                alt={option.title}
              />
              <p>{option.description}</p>
              <p>Price: ${option.price}</p>
              <button onClick={() => handleViewButtonClick(option)}>View</button>
              <button onClick={() => handleBuyButtonClick(option)}>Buy Now</button>
              <button onClick={() => handleAddToCart(option)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}

      {/* Shopping Cart */}
      <div>
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <img
                  className='rounded-xl my-2'
                  src={item.preview_url || item.image_url}
                  style={{ width: '40%' }}
                  alt={item.title}
                />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleViewButtonClick(item)}>View</button>
                <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Merch;
