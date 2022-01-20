import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

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

    deposit = () => {
        this.props.deposit(this.state.balance)
    }

    withdraw = () => {
        this.props.withdraw(this.state.balance)
    }

    render(){
        return(
            <div>
                <h3 data-test="balance">Wallet Balance: {this.props.balance}</h3>
                <br />
                <input data-test="input-wallet" onChange={this.updateBalanace} />
                <button data-test="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button data-test="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { balance: state }
}

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);