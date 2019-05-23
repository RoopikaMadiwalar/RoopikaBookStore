import React,{Component} from 'react';
import ListItems from './ListItems';

class AddFields extends Component{
    constructor(props){
        super(props);
        this.state = {
            addValue:'',
            editID:'',
            nForm:{
                id:'',
                name: '',
                description: ''
            },
            notes:[{
                id: 'test-1001',
                name: 'Note 1',
                description: 'Description for note 1'
            },{
                    id: 'test-1002',
                    name: 'Note 2',
                    description: 'Description for note 2'
            },
                {
                  id:'',
                  name:''
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(e){
     this.setState({
         addValue : e.target.value
     });
    }
    handleEdit(note,id){
        console.log(note);
        this.setState({
            addValue : note,
            editID:id
        })
    }
    handleAdd(e){
        const {notes} = this.state;
        for(let i=0 ; i<notes.length;i++){
            if(notes[i].id === this.state.editID){
                notes[i].name = this.state.addValue;
                this.setState({
                   addValue:'',
                   editID : ''
                })
            }
        }
          if(this.state.editID === ""){
                notes[notes.length-1].name = this.state.addValue;
                notes[notes.length-1].id = notes[notes.length-1].id++;
            }
        console.log(this.state);
     console.log(e.target.id)
    }

    handleDelete(id){
      let {notes} = this.state;
    //     notes.filter((item, pos) =>{
    //         if(pos === id){
    //             notes.splice(id, 1);
    //         }  
    //         return notes;   
    // });
        notes.splice(id, 1);
        this.setState({notes: notes})
    }
    render(){
        return(
           <div>
               <input type="text" onChange={this.handleChange} value={this.state.addValue}></input>
               <button onClick={this.handleAdd} >Add</button>
               <ListItems notes={this.state.notes} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
               </div>
        )
    }
}
export default AddFields;