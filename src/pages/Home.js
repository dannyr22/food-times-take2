import React from 'react'



const Home = ({ products, addItem }) => {

 
 

  return (
  <>
     <h1 className="text-secondary text-center mt-4" >Welcome to the glorious <span className="text-success">Food Times</span> shop</h1> 
   <div className="grid">
          {products.map(product => (
          <div className="card m-2" style={{width: '18rem'}} key={product.id}>
            <div className="card-media">
                <img src={product.image} alt={product.title} className="card-img-top" style={{height: "20rem", objectFit: "cover"}}/>
            </div>
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary" onClick={() => addItem(product.title, product.description, product.image, product.id)}><i className="bi bi-cart"></i>  Add to cart</button>
            </div>
         </div>
          ))}
      </div>
      </>
  )
}

export default Home
