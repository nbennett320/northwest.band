import React, { Component } from 'react'
import Select from 'react-select'

class FilterStore extends Component {

    filterOptions = [
        {value: 'none', label: 'none'},
        {value: 'subcategory', label: 'category'},
        {value: 'model', label: 'style'},
    ]

    render () {

        return (

            <div className="store-filter" style={styles.main}>

                <div className="select-container" style={styles.selectContainer} id="store-filter-selector">
                    <Select
                        name="color-select"
                        value={'none'}
                        options={this.filterOptions}
                        placeholder="filter"
                        // onChange={this.changeColor}
                    />
                </div>

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
    },

    selectContainer: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400', 
        fontSize: '1em',
    },

}

export default FilterStore