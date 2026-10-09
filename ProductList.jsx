import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const categories = [
{
name: 'Indoor Plants',
plants: [
{ id: 1, name: 'Snake Plant', price: 12.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b74?w=500' },
{ id: 2, name: 'Peace Lily', price: 14.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500' },
{ id: 3, name: 'Pothos', price: 9.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500' },
{ id: 4, name: 'Spider Plant', price: 11.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500' },
{ id: 5, name: 'ZZ Plant', price: 16.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2b6b6a72?w=500' },
{ id: 6, name: 'Rubber Plant', price: 13.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' }
]
},
{
name: 'Flowering Plants',
plants: [
{ id: 7, name: 'African Violet', price: 10.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500' },
{ id: 8, name: 'Anthurium', price: 15.99, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' },
{ id: 9, name: 'Hibiscus', price: 12.99, image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500' },
{ id: 10, name: 'Orchid', price: 18.99, image: 'https://images.unsplash.com/photo-1566907225472-514a6bf6a5d1?w=500' },
{ id: 11, name: 'Kalanchoe', price: 11.99, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500' },
{ id: 12, name: 'Begonia', price: 10.99, image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=500' }
]
},
{
name: 'Succulents & Cacti',
plants: [
{ id: 13, name: 'Aloe Vera', price: 8.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500' },
{ id: 14, name: 'Echeveria', price: 9.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500' },
{ id: 15, name: 'Jade Plant', price: 12.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500' },
{ id: 16, name: 'Cactus', price: 7.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500' },
{ id: 17, name: 'Haworthia', price: 10.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500' },
{ id: 18, name: 'String of Pearls', price: 11.99, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500' }
]
}
];

function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.items);
const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

return ( <div className="product-page" id="plants"> <nav style={styles.navbar}> <a href="/" style={styles.brand}>🌿 Paradise Nursery</a> <div style={styles.navLinks}> <a href="/" style={styles.link}>Home</a> <a href="#plants" style={styles.link}>Plants</a> <a href="/cart" style={styles.link}>
🛒 Cart ({cartCount}) </a> </div> </nav>

```
  <header style={styles.header}>
    <h1>Our Plants</h1>
    <p>Discover beautiful plants to brighten your home and life.</p>
  </header>

  <main style={styles.main}>
    {categories.map(category => (
      <section key={category.name} style={styles.category}>
        <h2>{category.name}</h2>
        <div style={styles.grid}>
          {category.plants.map(plant => {
            const added = cartItems.some(
              item => item.id === plant.id
            );

            return (
              <article key={plant.id} style={styles.card}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={styles.image}
                />
                <h3>{plant.name}</h3>
                <p style={styles.price}>
                  ${plant.price.toFixed(2)}
                </p>
                <button
                  style={{
                    ...styles.button,
                    ...(added ? styles.disabledButton : {})
                  }}
                  disabled={added}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {added ? 'Added to Cart ✓' : 'Add to Cart'}
                </button>
              </article>
            );
          })}
        </div>
      </section>
    ))}
  </main>
</div>
```

);
}

const styles = {
navbar: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
flexWrap: 'wrap',
gap: '16px',
padding: '18px 5%',
background: '#ffffff',
borderBottom: '1px solid #dce8dc'
},
brand: {
color: '#226b3b',
fontSize: '22px',
fontWeight: 'bold',
textDecoration: 'none'
},
navLinks: {
display: 'flex',
gap: '24px',
flexWrap: 'wrap'
},
link: {
color: '#244b32',
textDecoration: 'none',
fontWeight: '600'
},
header: {
textAlign: 'center',
padding: '48px 20px',
background: '#e8f3e7',
color: '#245b35'
},
main: {
maxWidth: '1200px',
margin: '0 auto',
padding: '24px'
},
category: {
marginBottom: '40px'
},
grid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
gap: '20px'
},
card: {
border: '1px solid #dce5dc',
borderRadius: '10px',
padding: '14px',
background: '#ffffff',
boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
},
image: {
width: '100%',
height: '170px',
objectFit: 'cover',
borderRadius: '7px'
},
price: {
color: '#226b3b',
fontWeight: 'bold'
},
button: {
width: '100%',
padding: '11px',
background: '#287a43',
color: 'white',
border: 'none',
borderRadius: '6px',
cursor: 'pointer',
fontWeight: 'bold'
},
disabledButton: {
background: '#9aa99d',
cursor: 'not-allowed'
}
};

export default ProductList;
