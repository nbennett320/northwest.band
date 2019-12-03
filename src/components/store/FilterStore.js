import React, { Component } from 'react'
import Select from 'react-select'
import { throwStatement } from '@babel/types'

class FilterStore extends Component {

    constructor (props) {

        super (props)

        this.state = {

            scope: null,
            styleOptions: null,

        }

    }

    filterOptions = [
        {value: 'none', label: '(no filter)'},
        {value: 'subcategory', label: 'category'},
        {value: 'style', label: 'style'},
    ]

    setStyleOptions = newFilter => {

        const subcategoryOptions = [
            {value: 'none', label: '(no filter)'},
            {value: 'short-sleeve', label: 't-shirts'},
            {value: 'hoodie', label: 'sweatshirts'},
        ]

        const styleOptions = [
            {value: 'none', label: '(no filter)'},
            {value: 'classic', label: 'classic box logo'},
            {value: 'suburban-dogs', label: 'suburban dogs'},
        ]

        switch (newFilter.value) {

            case 'subcategory':
                this.setState({styleOptions: subcategoryOptions})
                
                break
            case 'style':
                this.setState({styleOptions: styleOptions})
                break
            default:
                this.props.setFilterScope(newFilter.value)
                this.props.setFilterType(newFilter.value)
                this.setState({styleOptions: null})
                break

        }

        this.setState({scope: newFilter.value})

    }

    handleFilterChange = newFilter => {

        if(newFilter.value === 'none') {

            this.props.setFilterScope(newFilter.value)
            this.props.setFilterType(newFilter.value)
            this.setState({styleOptions: null})

        }

        this.props.setFilterScope(this.state.scope)
        this.props.setFilterType(newFilter.value)
        
    }

    showSecondFilter = () => {

        if(this.state.styleOptions !== null) return <div className="select-container" style={styles.selectContainer} id="store-filter-selector">

                <Select
                    name="secondary-filter-select"
                    options={this.state.styleOptions}
                    placeholder="second filter"
                    onChange={this.handleFilterChange}
                />

            </div>

    }

    render () {

        return (

            <div className="store-filter" style={styles.main}>

                <div className="select-container" style={styles.selectContainer} id="store-filter-selector">

                    <Select
                        name="filter-select"
                        options={this.filterOptions}
                        placeholder="filter"
                        onChange={this.setStyleOptions}
                    />

                </div>

                {this.showSecondFilter()}

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