import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/configurationActions';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ConfigurationEditModal extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.openModal();
    }

    closeModal() {
        this.props.closeModal();
    }

    handleCancel(e) {
        this.props.handleCancel();
        this.closeModal.apply(this);
    }

    handleUpdate(e) {
        this.props.handleUpdate();
        this.closeModal.apply(this);
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <div className="tileConfigurationItem">
                        <span>Key: </span>
                        <span>{this.props.keyName}</span>
                        <div>Name</div>
                        <input
                            className="itemName"
                            value={this.props.tempData.name || this.props.name}
                            onChange={this.props.handleNameChange} />
                        <div>Value</div>
                        <textarea className="value"
                            value={this.props.tempData.value || this.props.value}
                            onChange={this.props.handleValueChange}
                        ></textarea>
                        <div>
                            <div>Description</div>
                            <textarea className="description"
                                value={this.props.tempData.description || this.props.description}
                                onChange={this.props.handleDescriptionChange}
                            ></textarea>
                        </div>
                        <div className="itemType">
                            <div>Type</div>
                            <select value={this.props.tempData.type || this.props.type} onChange={this.props.handleTypeChange}>
                                <option value="TEXT">TEXT</option>
                                <option value="XML">XML</option>
                                <option value="ENC_PASSWORD">ENC_PASSWORD</option>
                            </select>
                        </div>
                        <div className="buttonContainer">
                            <button type="button"
                                onClick={this.handleCancel.bind(this)}
                                className="cancel btn btn-default btn-sm">
                                Cancel
                            </button>
                            <button type="button"
                                onClick={this.handleUpdate.bind(this)}
                                className="update btn btn-primary btn-sm">
                                Update
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(store) {
  return {
     modal: store.configurationReducer.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationEditModal);