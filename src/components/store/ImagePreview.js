import React, { Component } from 'react'
import VisualOptionsArray from './VisualOptionsArray'

class ImagePreview extends Component {

    constructor(props) {
        super (props)

        this.state = {
            color: 'white',
        }

    }

    componentDidMount () {
        let color = this.props.color
        this.setState({color: color})
    }

    // componentDidUpdate () {
    //     let color = this.props.getColor
    //     this.setState({color: color})

    // }

    getPathFromModel = (model, color) => {
        let remainder

        switch (model) {

            case 'classic-tee':
                remainder = `classic-${color}`
                break
            case 'suburban-dogs-tee':
                remainder = `${color}sd`
                break
            case 'et-tee':
                remainder = `${color}et`
                break
            case 'suburban-dogs-hoodie':
                remainder = `${color} hoodie`
                break
            default:
                remainder = `classic-black-on-white`
                break

        }

        return remainder

    }

    render () {

        return (

            <div className="image-preview-contanier" styles={styles.main}>

                <img src={require(`../../img/img_merch/img_500x500/${this.getPathFromModel(this.props.model, this.props.color)}.png`)} 
                    alt="default image"
                    style={styles.mainImage}
                />

                {/* array of all options */}
                <VisualOptionsArray 
                    getPathFromModel={this.getPathFromModel}
                    model={this.props.model}
                    availableColors={this.props.availableColors}
                    selectedColor={this.props.color}
                    setColorOnProductPage={this.props.setColorOnProductPage}
                />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '50%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },

    mainImage: {
        display: 'flex',
        height: '75%',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

}

export default ImagePreview