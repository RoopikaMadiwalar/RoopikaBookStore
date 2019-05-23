import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions';

class reduxLearning extends Component{
    render(){
        return(
            <div>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={ this.props.onAgeUp}>Age Up</button>
                <button onClick={ this.props.onAgeDown}>Age Down</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        age : state.age,
        loading : state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxLearning);