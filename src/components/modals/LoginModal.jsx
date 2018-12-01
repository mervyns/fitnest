import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import LoginForm from "../auth/LoginForm";
import { closeModal } from "../../actions/modalActions";
const actions = { closeModal };

class LoginModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>Login to FitNest</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  null,
  actions
)(LoginModal);
