import React, {Component} from 'react';

class Comments extends Component {

    goToReview = () => {
        this.props.history.push('/Review')
    }
  render() {
    return (
      <div>
            <h1>Any comments you'd like to add?</h1>
            <form onSubmit={this.goToReview}>
                <label>
                    Comments:
                    <textarea placeholder='Leave a comment here'></textarea>
                </label>
                <input type='submit' value='Next'/>
            </form>
      </div>
    )
  }
}

export default Comments;