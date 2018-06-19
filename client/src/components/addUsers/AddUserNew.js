// AddUserNew shows AddUserForm and AddUserFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddUserForm from './AddUserForm';
import AddUserFormReview from './AddUserFormReview';

class AddUserNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <AddUserFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <AddUserForm
        onAddUserSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'addUserForm'
})(AddUserNew);