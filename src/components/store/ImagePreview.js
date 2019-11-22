import React, { Component } from 'react'

class ImagePreview extends Component {

    constructor(props) {
        super (props)

        this.state = {
            color: 'white',
        }

    }

    componentDidMount () {
        const color = this.props.color
        this.setState({color: color})

    }

    getPathFromModel = model => {
        let remainder

        switch (model) {

            case 'classic-tee':
                remainder = `classic-${this.state.color}`
                break
            case 'suburban-dogs-tee':
                remainder = `${this.state.color}sd`
                break
            case 'et-tee':
                remainder = `${this.state.color}et`
                break
            case 'suburban-dogs-hoodie':
                remainder = `${this.state.color} hoodie`
                break
            default:
                console.log("error")
                remainder = `classic-black-on-white`
                break

        }

        return remainder
    }

    

    render () {

        return (

            <div className="image-preview-contanier" styles={styles.main}>

                <img src={require(`../../img/img_merch/img_500x500/${this.getPathFromModel(this.props.model)}.png`)} 
                    alt="default image"
                    style={styles.mainImage}
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