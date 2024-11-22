import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Home = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch('/api/location')
      .then((res) => res.json())
      .then((data) => setLocation(data.currentLocation));
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Welcome to SMACKS</h1>
        <p>Current Location: {location || 'Loading...'}</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
