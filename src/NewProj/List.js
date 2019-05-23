import React, {Component} from 'react';

class List extends Component{
    onDelete(ind){
     this.props.onDelete(ind);
    };
    onEdit(ind){
        this.props.onEdit(ind);
    }
    render(){
        let items = this.props.items;
        return(
            <ul>
                {items.map((item,ind) =>
                <li>
                    {item.name}
                    {item.sname}
                    <button onClick={this.onDelete.bind(this,ind)} type={'button'}>Delete</button>
                    <button onClick={this.onEdit.bind(this,ind)} type={'button'}>Edit</button>
                    </li>)}
                </ul>
        )
    }
}

export default List;