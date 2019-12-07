import React, { Component } from 'react'

import '../../css/visual-options-array.css'

class VisualOptionsArray extends Component {


    handleMouseClick = id => this.props.setColorOnProductPage(id)

    optionIsSelected = elem => {

        if(elem === this.props.selectedColor) return true
        else return false

    }

    buildArray = () => {

        const availableColors = this.props.availableColors

       //  console.log(availableColors)

        let arr = []
        let arrayImage
        let className

        for(let i = 0; i < Object.keys(availableColors).length; i++) {

            if(this.optionIsSelected(availableColors[i])) className="array-option-image selected-option"
            else className="array-option-image"

            arrayImage = <img src={require(`../../img/img_merch/img_150x150/${this.props.getPathFromModel(this.props.model, availableColors[i])}.png`)} 
                    alt={`${availableColors[i]} color option`}
                    className={className}
                    style={styles.arrayImage}
                    id={`${availableColors[i]}`}
                    onClick={e => this.handleMouseClick(e.target.id)}
                    key={i}
                />

            arr.push(arrayImage)

        }

        // console.log(arr)

        return arr

    }

    render () {

        return (

            <div className="visual-options-array-container" style={styles.main}>

                {this.buildArray()}

            </div>

        )

    }

}

const styles = {

    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: '10px',
        paddingBottom: '10px',
    },

    arrayImage: {
        height: '50px',
        width: '50px',
        cursor: 'pointer',
    },

}

export default VisualOptionsArray