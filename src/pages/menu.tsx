import Header from '../components/Header';
import Footer from '../components/Footer';

const Menu = () => {
    const menuItems = [
        { name: 'Sweet potato bowl', price: '$7', allergy: 'Gluten' },
        { name: 'Tofu tempura', price: '$5', allergy: 'Nuts' },
        { name: 'Shehjar Smoothie', price: '$7', allergy: 'Gluten' },
        { name: 'Color Salad', price: '$5', allergy: 'Nuts' },
        { name: 'Avocado Green Bowl', price: '$7', allergy: 'Gluten' },
        { name: 'Okra Fest', price: '$5', allergy: 'Nuts' },
      ];

  return (
    <>
      <Header />
      <main>
        <h1>Our Menu</h1>
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Allergy Info: {item.allergy}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
