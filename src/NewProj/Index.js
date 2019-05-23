import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class Index extends Component{
    constructor(props){
        super(props);
           this.state = {
            items: [{
                name: 'Name1',
                sname: 'Name1'
            },
        {
            name:'Name2',
            sname:'Name2'
        },
    {
        name: 'Name3',
        sname:'Name3'
    }],
    editItems:"",
    editIndex:""
        };
    };
    onAdd(item) {
        let newItems = this.state.items;
        newItems.splice();
        newItems.push(item);
        this.setState({items: newItems});
    };
    onDelete= (ind)=>{
        let newItems = this.state.items;
        newItems.splice(ind, 1);
        // delete newItems[ind];
        this.setState({items:newItems});
    };
    onEdit(ind){
        let newItems = this.state.items;
        let editItems = this.state.items;
        editItems = newItems[ind];
        this.setState({editItems:editItems,
        editIndex :ind})
    };
    onUpdate(item){
        let editItems = this.state.editItems;
        let editIndex = this.state.editIndex;
        let newItems = this.state.items;
        newItems[editIndex] = item;
        this.setState({items: newItems,
        editItems : ""}
        );
     };
    render(){
        let items = this.state.items;
        return(
            <div>
                <Header items={items}/>
                <Body items={items} onDelete={this.onDelete} onAdd={this.onAdd.bind(this)} onEdit={this.onEdit.bind(this)} editItems={this.state.editItems} onUpdate={this.onUpdate.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}

export default Index;