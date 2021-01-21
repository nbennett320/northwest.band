import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import { Divider } from '@material-ui/core'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'
import Helmet from './Helmet'
// import SuggestionBar from './SuggestionBar'
import server from '../../server.config'

const ProductPage = props => {
  const [item, setItem] = React.useState()
  const [model, setModel] = React.useState(props.match.params.model)
  const [color, setColor] = React.useState()
  const [size, setSize] = React.useState()
  const [info, setInfo] = React.useState()

  const setUrl = url => {
    props.history.push(url)
  }

  React.useEffect(() => {
    // in the future: server/products?num_of_items=20&other_param=something
    const fetchModel = async () => fetch(`${server}/products/${model}`, { method: 'GET' })
      .then(async res => {
        const newItem = await res.json()
        setItem(newItem)
        setModel(props.match.params.model)
        setInfo({
          title: newItem.title,
          color: newItem.selectedColor,
          description: newItem.description,
          model: newItem.attributes.model
        })
      })
    fetchModel()
  }, [props.match.params.model, color, size])
  props.setHeaderLink()
  console.log("item", item)
  return item ? (
    <div className="view padding-for-header">
      <Helmet info={info} />
      <ProductOverview
        item={item}
        model={model}
        setColor={setColor}
        setSize={setSize}
        setUrl={setUrl}
        addItemToCart={props.addItemToCart}
        match={props.match}
        device={props.device}
        scale={() => (
          props.device.vpWidth > 1920 
            ? "lg"
            : props.device.isMobile 
              ? "sm"
              : "m"
        )}
      />
      <Divider />
      <ProductDetails 
        item={item}
      />
      {/* <SuggestionBar 
        item={item} 
        device={device}
      /> */}
    </div>
  ) : <div>loading</div>
}

// class ProductPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       model: props.match.params.model,
//       item: undefined,
//     }
//   }

//   componentDidMount() {
//     this.props.setHeaderLink('/merch')
//     const { match } = this.props
//     this.getProduct(match.params.model)
//       .then(() => {
//         const { item } = this.state
//         const selectedColor = item.attributes.colors.includes(match.params.color)
//           ? match.params.color
//           : item.attributes.colors[0]
//         // color defaults to first listing in the 
//         // Products.json file if nothing defined in url params,
//         // size defaults to "medium"
//         const newItem = {
//           ...item,
//           selectedColor: selectedColor,
//           selectedSize: "medium"
//         }
//         if(newItem) 
//           this.setState({
//             item: newItem,
//           })
//       })
    
//     const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
//     // uses boolean as string
//     if(hasShownBlmPanel === "false") {
//       this.props.setDestination({from: this.props.match.path})
//       this.props.history.push('/blm')
//     }
//   }

//   componentDidUpdate(prevProps) {
//     const { match } = this.props
//     if(this.props !== prevProps) {
//       // handle route changed
//       this.setState({
//         model: match.params.model,
//       })
//     }
//   }

//   // get product data
//   getProduct = async (model) => {
//     // in the future: server/products?num_of_items=20&other_param=something
//     const item = await fetch(`${server}/products/${model}`,
//       {
//         method: 'GET',
//       }).then(res => res.json())
//     this.setState({ item })
//   }

//   setColor = color => {
//     const item = {
//       ...this.state.item,
//       selectedColor: color
//     }
//     this.setState({
//       item: item
//     })
//   }

//   setSize = size => {
//     const item = {
//       ...this.state.item,
//       selectedSize: size
//     }
//     this.setState({
//       item: item
//     })
//   }

//   // push url into history when color updates
//   setURL = url => {
//     this.props.history.push(url)
//   }

//   render() {
//     const { match, device, location } = this.props
//     const { item, model } = this.state
//     const info = item && {
//       title: item.title,
//       color: item.selectedColor,
//       description: item.description,
//       model: item.attributes.model
//     }
//     return (
//       <div className="view padding-for-header">
//         <Helmet info={info} />

//         {item && <ProductOverview
//           item={item}
//           model={model}
//           setColor={this.setColor}
//           setSize={this.setSize}
//           setURL={this.setURL}
//           addItemToCart={this.props.addItemToCart}
//           match={match}
//           device={device}
//           scale={() => (
//             device.vpWidth > 1920 
//               ? "lg"
//               : device.isMobile 
//                 ? "sm"
//                 : "m"
//           )}
//         />}

//         <Divider />
//         {item && <ProductDetails 
//           item={item}
//         />}

//         {/* <SuggestionBar 
//           item={item} 
//           device={device}
//         /> */}
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return {
    device: state.device
  }
}

const mapDispatchToProps = dispatch => ({
  setHeaderLink: () => dispatch({
    type: SET_HEADER_LINK,
    payload: {
      headerLink: '/'
    }
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)
