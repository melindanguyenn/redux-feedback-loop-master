import React, {Component} from 'react';

class Understanding extends Component {

    goToSupport = () => {
        this.props.history.push('/Support')
    }
  render() {
    return (
      <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={this.goToSupport}>
                <label>Understanding: 
                <select>
                    <option defaultValue>-- Select a Value --</option>
                    <option value='1'>1 - I don't know what's happening</option>
                    <option value='2'>2 - I could use some guidence</option>
                    <option value='3'>3 - I understand this just enough</option>
                    <option value='4'>4 - I might be able to help</option>
                    <option value='5'>5 - I can teach this</option>
                    </select>
                 </label>   
                <input type='submit' value='Next'/>
            </form>
      </div>
    )
  }
}

export default Understanding;