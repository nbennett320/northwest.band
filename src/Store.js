import React, { Component } from 'react'
import ItemPreview from './components/store/ItemPreview'

class Store extends Component {

    items = {

        0:{
            title: 'Northwest (PINK) Cursive Star T-Shirt',
            img: './img/img_merch/IMG-2805_512.png',
            altText: 'hot pink t-shirt with silver northwest cursive star logo',
            description: 'hot pink t-shirt with silver northwest cursive star logo',
            price: '12'
        },

        1:{
            title: 'Northwest (YELLOW) Cursive Star T-Shirt',
            img: './img/img_merch/IMG-2801_512.png',
            altText: 'happy yellow t-shirt with red northwest cursive star logo',
            description: 'happy yellow t-shirt with red northwest cursive star logo',
            price: '12'
        },

        2:{
            title: 'Northwest (RED) Cursive Star Crewneck',
            img: './img/img_merch/IMG-2808_512.png',
            altText: 'mega comfy crewneck with navy northwest cursive star logo',
            description: 'mega comfy crewneck with navy northwest cursive star logo',
            price: '20'
        }

    }

    mapCatalog = () => {

        const items = this.items

        

        let catalog

        for (let i = 0; i < Object.keys(items).length; i++) {
            console.log(items[i].title)
            catalog += <ItemPreview 
                title={items[i].title.toString()} 
                img={items[i].img} 
                altText={items[i].altText} 
                description={items[i].description} 
            />

        }

        return catalog

    }

    render () {

        

        

        return (

            <div className="merch">

                {this.mapCatalog()}

            </div>

        )

    }

}

export default Store