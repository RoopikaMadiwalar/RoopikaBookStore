import React,{Component} from 'react';
import ListItems from './listItems';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            nForm: {
                id: '',
                name: '',
                description: ''
            },
            notes: [{
                    id: 'test-1001',
                    name: 'Note 1',
                    description: 'Description for note 1'
                }, {
                    id: 'test-1002',
                    name: 'Note 2',
                    description: 'Description for note 2'
                }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e){
        this.setState({
           addValue : e.target.value,
        })
    }
    handleAdd(e){
      var addValue = this.state.addValue;
      this.setState({
          value : addValue,
          addValue:'',
          addFlag: true,
          items:[]
      })
    }
    render(){
        let showlistItems = null;

        if (this.state.addFlag){
            showlistItems = (
                <li>
                <input type= "text" value ={this.state.value}/>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                </li>
            );
        }
        return(
            <div>
                <input></input>
              <input type="text" onChange={this.handleChange} value={this.state.addValue} ></input>
              <button onClick={this.handleAdd} >Add</button>
             <li>
                <input type= "text" value ={this.state.value}/>
                <button>Edit</button>
                <button>Delete</button>
                </li>
                {showlistItems}
                {(this.state.addFlag)? <ListItems items={this.state.notes}/>:''} 
                {/* <ListItems entries={this.state.items}/> */}
            </div>
        )
    }
}

export default Display;