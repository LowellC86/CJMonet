import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Merch = () => {
  const [data, setData] = useState({
    merchData: [],
    paintingOptions: [],
    stickerOptions: [],
  });

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [cart, setCart] = useState([]); // Shopping cart

  useEffect(() => {
    const apiUrl = 'https://cj-api-production.up.railway.app/';
    
    async function fetchData() {
      try {
        const [merchResponse, paintingResponse, stickerResponse] = await Promise.all([
          axios.get(apiUrl + 'artists/'),
          axios.get(apiUrl + 'paintings/'),
          axios.get(apiUrl + 'sticker/'),
        ]);

        setData({
          merchData: merchResponse.data,
          paintingOptions: paintingResponse.data,
          stickerOptions: stickerResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

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

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const renderItemList = (items) => {
    if (items.length === 0) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} className='flex flex-col items-center justify-center px-8'>
            <h4>{item.name || item.title}</h4>
            <img className='rounded-xl my-2' src={item.photo_url || item.preview_url || item.image_url} style={{ width: '40%' }} alt={item.name || item.title} />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleViewButtonClick(item)}>View</button>
            <button onClick={() => handleBuyButtonClick(item)}>Buy Now</button>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    );
  };

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
              console.log("email is:", email);
              console.log("password is:", password);
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

      <div>
        <h3>Merch</h3>
        {renderItemList(data.merchData)}
      </div>

      {isLoading && <p>Loading...</p>}
      {purchaseSuccess && <p>Payment successful! Thank you for your purchase.</p>}

      <h3>Painting Options</h3>
      {renderItemList(data.paintingOptions)}

      <h3>Sticker Options</h3>
      {renderItemList(data.stickerOptions)}

      <div>
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          renderItemList(cart)
        )}
      </div>
    </div>
  );
};

export default Merch;
