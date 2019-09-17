import React, { Component } from 'react'
import ItemPreview from './components/store/ItemPreview'

class Store extends Component {

    items = {

        0:{
            title: 'Northwest (PINK) Cursive Star T-Shirt',
            img: `${require('./img/img_merch/IMG-2805_512.png')}`,
            altText: 'hot pink t-shirt with silver northwest cursive star logo',
            description: 'hot pink t-shirt with silver northwest cursive star logo',
            price: '12'
        },

        1:{
            title: 'Northwest (YELLOW) Cursive Star T-Shirt',
            img: `${require('./img/img_merch/IMG-2801_512.png')}`,
            altText: 'happy yellow t-shirt with red northwest cursive star logo',
            description: 'happy yellow t-shirt with red northwest cursive star logo',
            price: '12'
        },

        2:{
            title: 'Northwest (RED) Cursive Star Crewneck',
            img: `${require('./img/img_merch/IMG-2808_512.png')}`,
            altText: 'comfy crewneck with navy northwest cursive star logo',
            description: 'mega comfy crewneck with navy northwest cursive star logo',
            price: '20'
        }

    }

    mapCatalog = () => {

        const items = this.items

        let catalog = []

        for (let i = 0; i < Object.keys(items).length; i++) {
            console.log(items[i].title)
            catalog.push( <ItemPreview 
                title={items[i].title} 
                img={items[i].img} 
                altText={items[i].altText} 
                description={items[i].description} 
                price={items[i].price}
            /> )

        }

        // catalog = <div> {catalog} </div>

        return catalog

    }

    render () {

        

        

        return (

            <div className="merch" style={styles.main}>

                {this.mapCatalog()}

            </div>

        )

    }

}

const styles = {

    main: {
        backgroundColor: '#e8e1b3',
        height: 'calc(100vh - 8vh - 40px)',
        paddingTop: 'calc(8vh + 40px)',
        // marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
    }

}

export default Store