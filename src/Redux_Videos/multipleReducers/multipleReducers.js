import React, { Component } from 'react';
import {connect} from 'react-redux';

class multipleReducers extends  Component{
 render() {
     return(
        <div>
            <div>
                 <span>A:</span><span>{this.props.a}</span>
                 <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
            </div>
            <div>
                 <span>B:</span><span>{this.props.b}</span>
                 <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
            </div>
        </div>
     )
 }
}

const mapStoreToProps = (store) => {
    return {
        a:store.rA.a,
        b:store.rB.b
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        updateA: (b) => dispatch({type: 'UPDATE_A',b:b}),
        updateB: (a) => dispatch({type: 'UPDATE_B',a:a})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(multipleReducers);