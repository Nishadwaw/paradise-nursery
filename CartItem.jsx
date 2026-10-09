import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.items);

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const totalItems = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const handleQuantityChange = (item, quantity) => {
dispatch(
updateQuantity({
id: item.id,
quantity
})
);
};

const handleCheckout = () => {
window.alert('Thank you for shopping with Paradise Nursery! Checkout is Coming Soon.');
};

return ( <div style={styles.page}> <nav style={styles.navbar}> <a href="/" style={styles.brand}>🌿 Paradise Nursery</a> <div style={styles.navLinks}> <a href="/" style={styles.link}>Home</a> <a href="/plants" style={styles.link}>Plants</a> <a href="/cart" style={styles.link}>
Cart ({totalItems}) </a> </div> </nav>

```
  <main style={styles.container}>
    <h1 style={styles.heading}>Shopping Cart</h1>
    <p style={styles.subtitle}>
      Review your plants and manage your order.
    </p>

    {cartItems.length === 0 ? (
      <div style={styles.emptyCart}>
        <h2>Your cart is empty 🌱</h2>
        <p>Discover beautiful plants for your home.</p>
        <a href="/plants" style={styles.continueButton}>
          Continue Shopping
        </a>
      </div>
    ) : (
      <>
        <div style={styles.itemsList}>
          {cartItems.map(item => (
            <article key={item.id} style={styles.item}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />

              <div style={styles.details}>
                <h2 style={styles.name}>{item.name}</h2>
                <p style={styles.unitPrice}>
                  Unit price: ${item.price.toFixed(2)}
                </p>
                <p style={styles.lineTotal}>
                  Item total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div style={styles.controls}>
                <div style={styles.quantityControls}>
                  <button
                    style={styles.quantityButton}
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() =>
                      handleQuantityChange(item, item.quantity - 1)
                    }
                  >
                    −
                  </button>

                  <span style={styles.quantity}>
                    {item.quantity}
                  </span>

                  <button
                    style={styles.quantityButton}
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      handleQuantityChange(item, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  style={styles.deleteButton}
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <section style={styles.summary}>
          <p>Total unique plants: {cartItems.length}</p>
          <p>Total items: {totalItems}</p>
          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <button
            style={styles.checkoutButton}
            onClick={handleCheckout}
          >
            Checkout
          </button>

          <a href="/plants" style={styles.continueLink}>
            Continue Shopping
          </a>
        </section>
      </>
    )}
  </main>
</div>
```

);
}

const styles = {
page: {
minHeight: '100vh',
background: '#f5f8f3',
color: '#253b2b',
fontFamily: 'Arial, sans-serif'
},
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
container: {
maxWidth: '1000px',
margin: '0 auto',
padding: '30px 20px'
},
heading: {
color: '#245b35',
fontSize: '32px'
},
subtitle: {
color: '#607365',
marginBottom: '28px'
},
itemsList: {
display: 'flex',
flexDirection: 'column',
gap: '16px'
},
item: {
display: 'flex',
alignItems: 'center',
flexWrap: 'wrap',
gap: '20px',
padding: '18px',
background: '#ffffff',
border: '1px solid #dce5dc',
borderRadius: '10px'
},
image: {
width: '120px',
height: '120px',
objectFit: 'cover',
borderRadius: '8px'
},
details: {
flex: '1',
minWidth: '150px'
},
name: {
marginTop: 0,
fontSize: '20px'
},
unitPrice: {
color: '#607365'
},
lineTotal: {
color: '#226b3b',
fontWeight: 'bold'
},
controls: {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
gap: '12px'
},
quantityControls: {
display: 'flex',
alignItems: 'center',
gap: '14px'
},
quantityButton: {
width: '34px',
height: '34px',
border: '1px solid #287a43',
borderRadius: '6px',
background: '#ffffff',
color: '#287a43',
cursor: 'pointer',
fontSize: '20px'
},
quantity: {
fontWeight: 'bold',
minWidth: '15px',
textAlign: 'center'
},
deleteButton: {
border: 'none',
background: 'transparent',
color: '#b42318',
cursor: 'pointer',
textDecoration: 'underline'
},
summary: {
marginTop: '28px',
padding: '24px',
background: '#ffffff',
border: '1px solid #dce5dc',
borderRadius: '10px',
textAlign: 'right'
},
checkoutButton: {
display: 'block',
width: '100%',
padding: '14px',
marginTop: '18px',
background: '#287a43',
color: '#ffffff',
border: 'none',
borderRadius: '7px',
cursor: 'pointer',
fontSize: '16px',
fontWeight: 'bold'
},
continueLink: {
display: 'inline-block',
marginTop: '18px',
color: '#287a43',
fontWeight: 'bold',
textDecoration: 'none'
},
emptyCart: {
textAlign: 'center',
padding: '50px 20px',
background: '#ffffff',
borderRadius: '10px'
},
continueButton: {
display: 'inline-block',
padding: '12px 20px',
marginTop: '12px',
background: '#287a43',
color: '#ffffff',
borderRadius: '6px',
textDecoration: 'none'
}
};

export default CartItem;
