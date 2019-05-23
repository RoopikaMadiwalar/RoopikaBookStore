import React,{Component} from 'react';
import List from './List';
import AddItem from './AddItem';

class Body extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
           <div>
               <AddItem onAdd={this.props.onAdd} editItems={this.props.editItems} onUpdate={this.props.onUpdate}/>
               <List items={this.props.items} onDelete={this.props.onDelete} onEdit={this.props.onEdit} />
            </div>
        )
    }
}

export default Body;