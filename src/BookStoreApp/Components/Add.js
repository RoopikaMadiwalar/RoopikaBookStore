import React, { Component } from 'react';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';
import ajax from '../utils/ajax';


class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            book_id : this.props.match.params.book_id,
            title:'',
            description:'',
            author: '',
            busy: false
        }
    }
    componentDidMount(){
        let { book_id } = this.state;

        if(book_id) {
            ajax({
                url: '/Books',
                postUrl: `&book_id=${book_id}`
            }).then(({s,d})=>{
                if(s === 's'){
                    let {title, description, author } = d;
                    this.setState({
                        title,description,author
                    })
                }
            })
        }
    }
   onAdd(e) {
    e.preventDefault();
    let { book_id, title, description, author } = this.state;
    this.setState({
      busy: true
    });
    if (book_id) {
      ajax({
        url: '/Books',
        type: 'PUT',
        data: { book_id, title, description, author }
      }).then(({ s })=> {
        if (s === 's') {
          this.setState({
            title: '',
            description: '',
            author: ''
          });
        }
        this.setState({
          busy: false
        });
        this.props.history.push(`/`);
      });
    } else {
      ajax({
        url: '/Books',
        type: 'POST',
        data: { title, description, author }
      }).then(({ s })=> {
        if (s === 's') {
          this.setState({
            title: '',
            description: '',
            author: ''
          });
        }
        this.setState({
          busy: false
        });
        this.props.history.push(`/`);
      });
    }
    ReactDOM.findDOMNode(this.refs.title).focus();
  };
    onChangeForm(input,{target}){
        console.log('onchange');
        this.setState({
            [input]: target.value
        });
    };
    
    render(){
        let { book_id, title, description, author, busy} = this.state;
        return(
            <form
                onSubmit={this.onAdd.bind(this)}>
                <div className={'form-row'}>
                <div className={'form-group col-md-5'}>
                    <input 
                    ref={'title'}
                    disabled={busy}
                    autoFocus
                    onChange={this.onChangeForm.bind(this,'title')}
                    className={'form-control'}
                    type={'text'}
                    value={title}
                    placeholder={'Book Title'}/>
                </div>

                 <div className={'form-group col-md-5'}>
                    <input
                    disabled={busy}
                    onChange={this.onChangeForm.bind(this,'author')}
                    className={'form-control'}
                    value = {author}
                    type={'text'}
                    placeholder={'Book Author'}/>
                </div>

                 <div className={'form-group col-md-8'}>
                    <input onChange={this.onChangeForm.bind(this,'description')}
                    disabled={busy}
                    className={'form-control'}
                    type={'text'}
                    value={description}
                    placeholder={'Book Description'}/>
                </div>

                <div className={'form-group col-md-2'}>
                    <button className={'btn btn-primary btn-block'}
                    disabled={busy}
                    type={'submit'}>
                    {book_id ? 'Update' : 'Add'}</button>
                </div>
                </div>
            </form>
        )
    }
}

export default connect()(Add);