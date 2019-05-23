import React, { Component } from 'react';
import { connect } from 'react-redux';

class reduxBasicsLearning extends Component {
   
    render() {
         let history = this.props.history;
        return(
            <div>
            <div>Count: <span>{this.props.age}</span></div>
            <button onClick={this.props.onPageUp}>Page Up</button>
            <button onClick={this.props.onPageDown}>Page Down</button>
            <hr/>
            <div>History</div>
            <div>
                <ul>
                    {
                    history.map(el => (
                        <li key={el.id} onClick={() => this.props.handleDelete(el.id)}>
                            {el.age}
                            </li>
                    )
                    )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
    const mapDispatchToProps = (dispatch) => {
        return{
          onPageUp : () => dispatch({type: "AGE_UP", value:20}),
          onPageDown : () => dispatch({type: "AGE_DOWN", value:10}),
          handleDelete : (id) => dispatch({type: "DELETE", key:id})
        }
    }

    const mapStateToProps = (state) => {
        return{
           age : state.age,
           history: state.history
        }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(reduxBasicsLearning);