import React, {Component} from 'react';

class Review extends Component {

    goToConfirmation = () => {
        this.props.history.push('/ConfirmSubmit')
    }
  render() {
    return (
      <div>
            <h1><u>Review Your Feedback</u></h1>
            <p>Feeling: </p>
            <p>Understanding: </p>
            <p>Support: </p>
            <p>Comments: </p>
            <button onClick={this.goToConfirmation}>Submit</button>
      </div>
    )
  }
}

export default Review;