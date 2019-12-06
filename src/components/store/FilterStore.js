import React, { Component } from 'react'
import Select from 'react-select'

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

        if(this.state.styleOptions !== null) return <div className="select-container" style={styles.filterTypeContainer} id="store-filter-selector">

                <Select
                    name="secondary-filter-select"
                    options={this.state.styleOptions}
                    placeholder="filter type"
                    onChange={this.handleFilterChange}
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            borderRadius: '0',
                            borderLeftWidth: '0.5px',
                            borderRightWidth: '0',
                            borderBottomWidth: '0',
                            borderColor: 'hsl(0,0%,80%) !important',
                            boxShadow: '0 !important',
                            // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 8px 2px',
                        }),

                        singleValue: (provided) => ({
                            ...provided,
                            color: 'hsl(0,0%,50%) !important'
                        }), 

                        menu: (provided) => ({
                            ...provided,
                            color: 'hsl(0,0%,50%) !important',
                            zIndex: '20',
                        }),

                        input: (provided) => ({
                            ...provided,
                            color: 'hsl(0,0%,50%) !important'
                        })

                    }}
                />

            </div>

    }

    checkCornerRadius = () => {

        if (this.state.styleOptions !== null) return {
            control: (provided) => ({
                ...provided,
                borderRadius: '0',
                borderLeftWidth: '0',
                borderRightWidth: '0.5px',
                borderBottomWidth: '0',
                borderColor: 'hsl(0,0%,80%) !important',
                boxShadow: '0 !important',
            }),

            singleValue: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important'
            }),

            menu: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important',
                zIndex: '20',
            }),

            input: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important'
            })
        
        }

        else return {
            control: (provided) => ({
                ...provided,
                backgroundColor: '#fff',
                borderRightWidth: '1px',
                borderLeftWidth: '0',
                borderBottomLeftRadius: '0',
                borderTopLeftRadius: '0',
                borderBottomWidth: '0',
                borderColor: 'hsl(0,0%,80%) !important',
                boxShadow: '0 !important',
            }),

            container: (provided) => ({
                ...provided,
                borderBottomRightRadius: '0',
            }),

            singleValue: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important'
            }),

            menu: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important',
                zIndex: '20',
            }),

            input: (provided) => ({
                ...provided,
                color: 'hsl(0,0%,50%) !important'
            })
            
        }

    }

    render () {

        return (

            <div className="store-filter" style={styles.main}>

                <div className="select-container" style={styles.filterContainer} id="store-filter-selector">

                    <Select
                        name="filter-select"
                        options={this.filterOptions}
                        placeholder="filter"
                        onChange={this.setStyleOptions}
                        styles={this.checkCornerRadius()}
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
        display: 'flex',
        flexDirection: 'row',
        // zIndex: '20',
    },

    filterContainer: {
        width: '50%',
        marginLeft: '0',
        marginRight: 'auto',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400', 
        fontSize: '1em',
        // backgroundColor: '#fff',
    },

    filterTypeContainer: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: '0',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400', 
        fontSize: '1em',
        backgroundColor: '#fff',
    }

}

export default FilterStore