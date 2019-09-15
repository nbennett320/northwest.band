import React, { Component } from 'react'

class ItemPreview extends Component {

    render () {

        return (

            <div class="product-preview">
                <div class="preview-header">{this.props.title}</div>
                    <img class="product-img"
                        src={this.props.img}
                        alt={this.props.altText}
                    />
                <p class="preview-description">{this.props.description}</p>
                <div class="price-preview">
                    add to cart...............${this.props.price}
                </div>
            </div>

        )

    }

}

export default ItemPreview