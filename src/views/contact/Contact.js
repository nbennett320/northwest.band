import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import validateEmail from '../../scripts/ValidateEmail'
// import StoreHeader from './components/store/StoreHeader'
// import Footer from '../../components/Footer'

// class Contact extends Component {

//   constructor (props) {
//     super (props)

//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//       funEndText: null,
//     }

//   }

//   componentWillMount () {

//     this.props.setHeaderLink('/')

//     this.props.setShowCart(false)
    
//   }

//   componentDidMount () {

//     this.setState({funEndText: this.funEndText()})

//   }

//   displayWarning = warningString => <span className="warning-string" style={styles.warningString}> {warningString} </span>

//   validateEmailInput = warningString => { 
//     if(
//       !this.isBlank(this.state.email) && 
//       !validateEmail(this.state.email)
//     ) {
//       return this.displayWarning(warningString)
//     }
//   }

//   isBlank = input => {
//     if(input !== '') return false
//     else return true
//   }

//   handleChange = ev => {
//     ev.preventDefault()
//     this.setState({ [ev.target.name]: ev.target.value } )
//   }

//   randomNum = max => Math.floor(Math.random() * Math.floor(max))

//   funEndText = () => {
    
//     const texts = [
//       "(please)",
//       "(pweaasee)",
//       "please", 
//       "pretty please",
//       "(pretty please)", 
//       "(plz)"
//     ]

//     return texts[this.randomNum(texts.length)]

//   }

//   generateBody = () => this.state.message + `<br />from ${this.state.name}<br />at ${this.state.email}`

//   render () {

//     return (

//       <div className="contact-page" style={styles.main}>

//         <Helmet>

//           <meta charset="utf-8" />
//           <meta name="keywords" 
//             content="
//               northwest, 
//               northwest the band, 
//               northwest band,
//               north west, 
//               band, 
//               nwi, 
//               219, 
//               contact, 
//               email, 
//               goodies, 
//               art
//             "
//           />
//           <link rel="canonical" href="http://northwest.band" />

//           <meta name="author" content="Noah Bennett" />

//           <meta name="description" content="
//             Reach out for general inquiries, booking, or just to say hi.
//           " />
//           <meta name="robots" content="index" />
//           <meta name="url" content="http://northwest.band/contact" />

//           <title>northwest the band | contact </title>

//         </Helmet>

//         <StoreHeader textInPhoto={"contact"} />

//         <div style={styles.form}>

//           <p style={{marginBottom: '2vh'}}>
//             feel free to reach out for any general inquiries, booking,
//             or just to say hi :)
//           </p>

//           <span style={styles.txt1}> name </span>
//           <input
//             type='text'
//             name='name'
//             style={styles.textBox}
//             value={this.state.name}
//             onChange={this.handleChange}
//           />

//           <span style={styles.txt1}> email </span>
//           <input
//             type='text'
//             name='email'
//             style={styles.textBox}
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//           {this.validateEmailInput(`enter a valid email ${this.state.funEndText}`)}

//           <span style={styles.txt1}> subject </span>
//           <input
//             type='text'
//             name='subject'
//             style={styles.textBox}
//             value={this.state.subject}
//             onChange={this.handleChange}
//           />

//           <span style={styles.txt1}> message </span>
//           <textarea
//             type='text'
//             name='message'
//             rows="10"
//             style={styles.bodyBox}
//             value={this.state.message}
//             onChange={this.handleChange}
//           />

//           <a href={`mailto:northwestband9@gmail.com?subject=${this.state.subject}&body=${this.generateBody()}`} 
//             style={styles.button}
//           >
//             submit
//           </a>
        
//         </div>

//         <Footer />

//       </div>

//     )

//   }

// }

// const styles = {

//   main: {
//     width: '100%',
//     height: 'auto',
//     minHeight: '100%',
//     backgroundColor: '#fff',
//     display: 'flex',
//     top: '0',
//     position: 'absolute',
//     flexDirection: 'column',
//     color: 'hsl(0,0%,50%)',
//     fontFamily: '"Work Sans",sans-serif',
//     fontWeight: '400',
//     fontSize: 'auto',
//   },

//   form: {
//     width: '50%',
//     margin: 'auto',
//     marginTop: '4vh',
//     marginBottom: '4vh',
//     display: 'flex',
//     flexDirection: 'column'
//   },

//   txt1: {
//     marginBottom: '2.5px',
//   },

//   textBox: {
//     padding: '10px',
//     color: 'hsl(0, 0%, 50%)',
//     borderStyle: 'solid',
//     borderWidth: '1px',
//     borderColor: 'hsl(0,0%,80%)',
//     borderBottomLeftRadius: '4px',
//     borderBottomRightRadius: '4px',
//     borderTopLeftRadius: '4px',
//     borderTopRightRadius: '4px',
//     marginBottom: '15px',
//     fontFamily: '"Work Sans",sans-serif',
//     fontWeight: '400',
//     fontSize: 'auto',
//   },

//   bodyBox: {
//     padding: '10px',
//     color: 'hsl(0, 0%, 50%)',
//     borderStyle: 'solid',
//     borderWidth: '1px',
//     borderColor: 'hsl(0,0%,80%)',
//     borderBottomLeftRadius: '4px',
//     borderBottomRightRadius: '4px',
//     borderTopLeftRadius: '4px',
//     borderTopRightRadius: '4px',
//     marginBottom: '15px',
//     fontFamily: '"Work Sans",sans-serif',
//     fontWeight: '400',
//     fontSize: 'auto',
//     resize: 'none',
//   },

//   button: {
//     color: '#69727b',
//     backgroundColor: '#f7f7f7',
//     width: 'auto',
//     margin: 'auto',
//     padding: '10px 20px',
//     borderStyle: 'solid',
//     borderWidth: '1px',
//     borderColor: 'hsl(0,0%,80%)',
//     borderBottomLeftRadius: '4px',
//     borderBottomRightRadius: '4px',
//     borderTopLeftRadius: '4px',
//     borderTopRightRadius: '4px',
//     fontFamily: '"Work Sans",sans-serif',
//     fontWeight: '400',
//     fontSize: 'auto',
//   },

//   warningString: {
//     color: 'red',
//     marginTop: '-7.5px',
//     marginBottom: '15px',
//   },

// }

// export default Contact