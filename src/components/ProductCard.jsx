import { useEffect, useState } from 'react';

function ProductsList() {
  console.log('UsersList ran ====');
  const [productsArray, setProductsArray] = useState([]);

  async function getProducts() {
    const resp = await fetch(`https://golden-whispering-show.glitch.me/`);
    const dataInJs = await resp.json();
    setProductsArray(dataInJs);
  }
  useEffect(() => {
    getProducts();
  });
  return (
    <div className='display'>
      {productsArray.length === 0 && <h2>Loading products ...</h2>}
      {productsArray.map((cObj) => (
        <div key={cObj.id} className='card'>
          <img className='img' src={cObj.image} alt='Product' />
          <div className='card-info'>
            <h2 className='desc'>{cObj.title}</h2>
            <p className='price'>€ {cObj.price}</p>
            <button className='btn'>Istrinti</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
