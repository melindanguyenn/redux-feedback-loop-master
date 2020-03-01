import React, {Component} from 'react';

class Feelings extends Component {

    goToUnderstanding = () => {
        this.props.history.push('/Understanding')
    }

  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
            <form onSubmit={this.goToUnderstanding}>
                <label>Feeling: 
                <select>
                    <option defaultValue>-- Select a Value --</option>
                    <option value='1'>1 - Horrible</option>
                    <option value='2'>2 - Not Too Good</option>
                    <option value='3'>3 - Okay</option>
                    <option value='4'>4 - Good</option>
                    <option value='5'>5 - Great</option>
                    </select>
                 </label>   
                <input type='submit' value='Next'/>
            </form>
      </div>
    )
  }
}

export default Feelings;