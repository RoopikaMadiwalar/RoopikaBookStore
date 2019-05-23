import React, {Component} from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this
            .handleEdit
            .bind(this);
            this.state = {
                edittedValue : '',
                id:''
            }
    }
    handleEdit(e) {
        console.log(e.target.value);
        console.log(this.props.notes);
        let notes = this.props.notes;
        let id = e.target.id;
        for(let i=0;i<notes.length;i++){
            if(notes[i].id === id){
              this.setState({
                  edittedValue : notes[i].name,
                  id : notes[i].id
            })
        }
        this.props.handleEdit(this.state.edittedValue,this.state.id)
    }
    }
handleDelete(id){
    this.props.handleDelete(id);
}
    render() {
        const {notes} = this.props;
        return (
            <React.Fragment>
                <ul>
                    {notes && notes.length > 0 && notes.map((item, index) => {
                        return (
                            <li key={item.id}>{item.name}
                                <button id={item.id} onClick={this.handleEdit}>Edit</button>
                                <button id={item.id} onClick={this.handleDelete.bind(this, index)}>Delete</button>
                            </li>
                        )
                    })
}
                </ul>
            </React.Fragment>
        )
    }
}
export default ListItems;