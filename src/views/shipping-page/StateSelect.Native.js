import React, { Component } from 'react'
import {
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core'
import states from '../../assets/data/States.json'

export default class StateSelect extends Component {
  render() {
    return (
      <div style={styles.form}>
        <FormControl variant="outlined"
          style={styles.selector}
        >
          <InputLabel> state </InputLabel>
          <Select
            native
            onChange={this.props.handleSetState}
            label={"state"}
            required
          >
            {Object.values(states).map((state, i) => (
              <option 
                value={state["State"]}
                key={i}
              >
                {state["State"]}
              </option>
            ))}
          </Select>  
        </FormControl>
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '20px 0',
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },

  form: {
    padding: '20px 0',
    margin: '0',
  },

  selector: {
    width: '100%'
  }
}