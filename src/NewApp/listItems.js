import React,{Component} from 'react';

class listItems extends Component{
    constructor(props){
        super(props); 
        this.state = {
            value:this.props.value
        }  
        this.handleDelete = this.handleDelete.bind(this); 
    }
    // createItems(item) {
    //     return <li key={item.key}>{item.text}</li>
    // }
    handleDelete(){

    }
    handleEdit(){
        
    }
    render(){
        const {items} = this.props
        console.log(items);
        // var listEntries = this.props.entries;
        // var listItems = listEntries.map(this.createItems)
        return(
             <div>
                <li>
                <input type= "text" value ={this.state.value}/>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                </li> 
                {/* <ul>
                    {listItems}
                    </ul> */}
            </div>
        )
    }
}
export default listItems;