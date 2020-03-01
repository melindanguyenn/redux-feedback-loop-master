import React, {Component} from 'react';

class Support extends Component {

    goToComments = () => {
        this.props.history.push('/Comments')
    }
  render() {
    return (
      <div>
            <h1>How well are you being supported?</h1>
            <form onSubmit={this.goToComments}>
                <label>Support: 
                <select>
                    <option defaultValue>-- Select a Value --</option>
                    <option value='1'>1 - I feel abandoned</option>
                    <option value='2'>2 - I don't feel very supported</option>
                    <option value='3'>3 - I feel supported</option>
                    <option value='4'>4 - I feel somewhat supported</option>
                    <option value='5'>5 - I feel completely supported</option>
                    </select>
                 </label>   
                <input type='submit' value='Next'/>
            </form>
      </div>
    )
  }
}

export default Support;