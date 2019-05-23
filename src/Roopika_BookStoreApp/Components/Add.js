import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, TOKEN} from '../utils/url.js';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state= {
            book_id: this.props.match.params.book_id,
            title:'',
            description:'',
            author: '',
            busy:false,
        }
    };
    componentDidMount() {
        let { book_id } = this.state;

        if (book_id) {
            axios.get(`${BASE_URL}/Books?token=${TOKEN}&book_id=${book_id}`)
            .then(res => {
                if(res.data.s === 's'){
                     let { title, description, author } = res.data.d;
                      this.setState({
                        title, description, author
                    })
                }
            })
        }
    };

    onChangeForm(input,{ target}){
        this.setState({
            [input] : target.value
        });
    };
    onAdd(e){
        e.preventDefault();
        let { book_id,title, author, description } = this.state;
        console.log(e);
        let addData = {title,author,description};
        addData.token = TOKEN;
        if(book_id){
             let editData = { book_id, title, description, author },
             url = `${BASE_URL}/Books`;
              editData.token = TOKEN;
              axios({
                  method: 'put',
                  url: url,
                  data:editData,
              })
            .then(function(res){
               if(res.data.m && res.data.m.length){
             alert(`${res.data.m.join(', ')} - ${title}`);
        }
            })

        }else{
                 axios.post(`${BASE_URL}/Books`,addData)
        .then(res => {
            if(res.data.m && res.data.m.length){
             alert(`${res.data.m.join(', ')} - ${title}`);
        }
        if(res.data.s){
            this.setState({
                title:'',
                description:'',
                author:''
            })
        }})

        }
        this.props.history.push(`/`);
    }
    render(){
        let {book_id,busy,title,author,description} = this.state;
            return(
                <form
                onSubmit={this.onAdd.bind(this)}>
                <div
                 className={'form-group shadow-sm field-center col-md-9'}>
                 <br/>
                 <div
                 className={'form-group '}>
                 <label for="formGroupExampleInput font-weight-bold"> Book Title:</label>
                    <input
                    ref={'title'}
                    disabled={busy}
                    autofocus
                    value={title}
                    onChange={this.onChangeForm.bind(this, 'title')}
                    className={'form-control shadow'}
                    type={'text'}
                    placeholder={'Book Title'}/>
                </div>
                <div
                 className={'form-group '}>
                 <label for="formGroupExampleInput font-weight-bold"> Author Name:</label>
                    <input
                    ref={'title'}
                    disabled={busy}
                    autofocus
                    value={author}
                    onChange={this.onChangeForm.bind(this, 'author')}
                    className={'form-control shadow'}
                    type={'text'}
                    placeholder={'Book Author'}/>
                </div>
                <div className={'form-group '}>
                    <label for="formGroupExampleInput font-weight-bold"> Book Description:</label>
                    <textarea
                    disabled={busy}
                    onChange={this.onChangeForm.bind(this, 'description')}
                    value={description}
                    className={'form-control shadow'}
                    placeholder={'Book Description'}/>
                </div>
                <div className={'form-group'}>
                    <button
                        disabled={busy}
                        className={'btn btn-primary btn-block shadow'}
                        type={'submit'}>
                       {book_id ? 'Update' : 'Add'}
                    </button>
                </div>
                <br/>
                </div>
                </form>
            )
        }
}

export default Add;