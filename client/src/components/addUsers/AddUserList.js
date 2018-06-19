import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddUsers } from '../../actions';

class AddUserList extends Component {
  componentDidMount() {
    this.props.fetchAddUsers();
  }

  renderAddUsers() {
    return this.props.addUsers.reverse().map(addUser => {
      return (
        <div className="card darken-1" key={addUser._id}>
          <div className="card-content">
            <span className="card-title">{addUser.title}</span>
            <p>
              {addUser.body}
            </p>
            <p className="right">
              Sent On: {new Date(addUser.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {addUser.yes}</a>
            <a>No: {addUser.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderAddUsers()}
      </div>
    );
  }
}

function mapStateToProps({ addUsers }) {
  return { addUsers };
}

export default connect(mapStateToProps, { fetchAddUsers })(AddUserList);