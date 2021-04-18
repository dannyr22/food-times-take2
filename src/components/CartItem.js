const CartItem = ({ product, removeItem }) => {
  console.log(product)
  return (
    <div>
      <div className="card m-2" style={{width: "18rem"}}>
        <div className="card-media" >
          <img src={product.image} alt={product.title} className="card-img-top" style={{height: "20rem", objectFit: "cover"}}/>
        </div>
        <div className="card-content">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary" onClick={() => removeItem(product.id)}>
              Remove item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
