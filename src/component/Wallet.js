import React, { Component } from "react";
import { connect } from "react-redux";

// export both the wallet component and the connect so we can test both
export class Wallet extends Component {
    constructor(){
        super();
        this.state = {
            balance: undefined
        }
    }

    updateBalanace = (evt) => {
        this.setState({ balance: parseInt(evt.target.value, 10) })
    }

    render(){
        return(
            <div>
                <h3 data-test="balance">Wallet Balance: {this.props.balance}</h3>
                <br />
                <input data-test="input-wallet" onChange={this.updateBalanace} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { balance: state }
  }

export default connect(mapStateToProps, null)(Wallet);