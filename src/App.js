import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor (){
    super();
    this.state = {
        products:[
            {
                price:99,
                title:' watch',
                qty:3,
                img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
                id:1
            },
            {
                price:999,
                title:' Mobile phone',
                qty:5,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id:3
            }
        ]
        
    }
    // this.increaseQuantity= this.increaseQuantity.bind(this);
}
handleIncreaseQuantity=(product)=>{
    const { products }=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products
    })

}
handleDecreaseQuantity=(product)=>{
    const { products }=this.state;
    const index=products.indexOf(product);
    if (products[index].qty==0){
        return;
    }
    products[index].qty-=1;

    this.setState({
        products
    })
  }
  handleDeleteProduct=(id)=>{
      const{products}= this.state;
      const items= products.filter((item)=> item.id !==id);
      this.setState({
          products:items
      })
  }

  getCartCount =()=> {
    const { products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const { products}= this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal =cartTotal+ product.qty* product.price
    })
    return cartTotal;
  }

  render(){
    const {products}= this.state
    return (
      <div className="App">
        <Navbar count= {this.getCartCount()} />
       
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize : 20}}>Total: {this.getCartTotal()}</div>
      </div>
    );

  }
  
}

export default App;
