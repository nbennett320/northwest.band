import React, { Component } from 'react'
import Select from 'react-select'

import '../../css/product-details-panel.css'

class ProductDetailsPanel extends Component {

    constructor(props) {
        super (props)

        this.state = {
            item: this.props.item
        }

    }

    componentDidMount () {

        let item = this.props.item

        item.attributes.size = 'm'

        this.setState({
            item: item
        })

    }

    sizeOptions = [
        {value: 'xs', label: 'x-small'},
        {value: 's', label: 'small'},
        {value: 'm', label: 'medium'},
        {value: 'l', label: 'large'},
        {value: 'xl', label: 'x-large'},
        {value: 'xxl', label: 'xx-large'}
    ]

    colorOptions = () => {

        const availableColors = this.props.availableColors
        let colorList = []

        for(let i = 0; i < Object.keys(availableColors).length; i++) {

            colorList.push({value: availableColors[i], label: availableColors[i]})

        }

        return colorList

    }

    putSizeObjectInValue = size => {
        const options = this.sizeOptions

        for(let i = 0; i < options.length; i++) {

            if(options[i].value === size) {

                return options[i]

            }

        }

    }

    putColorObjectInValue = color => {
        const options = this.colorOptions()

        for(let i = 0; i < options.length; i++) {

            if(options[i].value === color) {

                return options[i]

            }

        }

    }

    placeDecimals = price => price.toFixed(2)

    handleAddToCart = () => this.props.addItemToCart(this.state.item)

    changeSize = newSize => {
        let item = this.state.item

        item.attributes.size = newSize.value

        this.setState({item: item})
    }

    changeColor = newColor => {
        let item = this.state.item

        item.attributes.color = newColor.value

        this.props.setColorOnProductPage(newColor.value)

        this.setState({item: item})
    }

    com

    render () {

        return (

            <div className="product-details-right-panel" style={styles.main} >
                
                <h1 className="right-panel-header" style={styles.title}>
                    {this.props.title}
                </h1>

                <h2 className="right-panel-price" style={styles.price}>
                    ${this.placeDecimals(this.props.price)}
                </h2>

                <div className="select-container" style={styles.selectContainer} id="top-detail-panel-selector">
                    <Select
                        name="size-select"
                        value={this.putSizeObjectInValue(this.state.item.attributes.size)}
                        options={this.sizeOptions}
                        placeholder="size"
                        onChange={this.changeSize}
                    />
                </div>

                <div className="select-container" style={styles.selectContainer} id="middle-detail-panel-selector">
                    <Select
                        name="color-select"
                        value={this.putColorObjectInValue(this.props.getColor)}
                        options={this.colorOptions()}
                        placeholder="color"
                        onChange={this.changeColor}
                    />
                </div>

                <button className="panel-button" style={styles.buttonContainer} id="middle-detail-panel-selector"
                    onClick={this.handleAddToCart}
                >

                    <span>add to cart</span>

                </button>

                {/* <button className="panel-button" style={styles.buttonContainer} id="middle-detail-panel-selector"
                    onClick={this.handleAddToCart}
                >

                    <span>checkout with google pay</span>

                </button> */}

            </div>

        )

    }

}

const styles = {

    main: {
        width: '50% auto',
    },

    title: {
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '800',
        margin: '0 50px',
        color: '#3d4246',
    },

    price: {
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '800',
        fontSize: '1.75em',
        margin: '25px 50px',
        color: '#69727b',
    },

    selectContainer: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400', 
        fontSize: '1em',
    },

    buttonContainer: {
        color: 'hsl(0, 0%, 50%)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        minHeight: '38px',
        width: '75%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2px 8px',
        position: 'relative',
        outline: '0 !important',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
    },

}

export default ProductDetailsPanel