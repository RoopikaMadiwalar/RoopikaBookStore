import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      title2:''
    };
  };
  onAdd(type,e) {
    e.preventDefault();
    let newTitle = this.state.title;
    let newTitle2 = this.state.title2;
     let item = {
      name: newTitle,
      sname: newTitle2
    };
    if(type === "Add"){
    this.props.onAdd(item);
    }else{
      this.props.onUpdate(item);
    }
    this.setState({
      title: '',
      title2:''
    });
  };
  onChangeTitle(e) {
    let newTitle = e.target.value;
    let sname = this.state.title1 ? this.state.title1 : this.props.editItems
    this.setState({
      title: newTitle
    });
  };
onChangeTitle2(e){
  let newTitle = e.target.value;
    this.setState({
      title2: newTitle
    });  
}
  render() {
    let typeMode = this.props.editItems ? "Update" : "Add";
    let title = this.state.title;
    let title2 = this.state.title2;
    return (
      <form     
        onSubmit={this.onAdd.bind(this,typeMode)}>
        <input
          onChange={this.onChangeTitle.bind(this)}
          value={title}
          type={'text'}
          placeholder={'Title'} />
           <input
          onChange={this.onChangeTitle2.bind(this)}
          value={title2}
          type={'text'}
          placeholder={'Title'} />
        <button
          type={'submit'}>
          {this.props.editItems?"Update":"Add"}
        </button>
      </form>
    );
  }
}

export default AddItem;
