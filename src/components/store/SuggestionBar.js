import React , { Component } from 'react'
import ItemPreview from './ItemPreview'

import '../../css/suggestion-bar.css'

class SuggestionBar extends Component {

    constructor (props) {

        super (props)

        this.state = {
            suggestionList: null
        }

    }

    getSuggestionsList = () => {

        const items = this.props.filteredItems

        let suggestions = []

        for (let i = 0; i < items.length; i++) {
            suggestions.push( <ItemPreview
                    title={items[i].title}
                    defaultImg={items[i].defaultImg}
                    hoverImg={items[i].hoverImg}
                    altText={items[i].altText}
                    description={items[i].description}
                    attributes={items[i].attributes}
                    price={items[i].price}
                    key={i * 2}
                    zIndex={i}
                    needsToUpdate={this.props.needsToUpdate}
                />
            )
        }

        return suggestions

    }

    render () {

        return (

            <div className="suggestion-container" style={styles.main}>

                <span style={styles.span}>you might also like</span>

                <div className="suggestion-bar" style={styles.suggestions}>

                    {this.getSuggestionsList()}

                </div>
                
            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 !important',
    }, 

    suggestions: {
        width: 'auto',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0 !important',
    },

    span: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px',
        color: 'hsl(0,0%,30%)',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: '1.1em',
    },

}

export default SuggestionBar