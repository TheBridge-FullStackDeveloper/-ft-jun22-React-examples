import React, { Component } from 'react'
import './ProductItem.css'
export class ProductItem extends Component {
//rconst
  constructor(props) {
    super(props)
  
    this.state = {
       name:this.props.data.name || "Producto Medias Query"
    }
  }

  render() {
    const {info,price,image} = this.props.data;
    let url_img = image || "https://images.hola.com/imagenes/cocina/recetas/20210511189370/coctel-caipirinha/0-950-898/caipirinha-adobe-m.jpg"

    return (
      <article>
        <h2>{this.state.name}</h2>
        <img src={url_img} alt={this.state.name} className="image_item" />
        <h3>{info}</h3>
        <p>Price: {price} €</p>
        <button onClick={this.props.delete}>Borrar</button>
      </article>
    )
  }
}

export default ProductItem