import React,{Component, Fragment} from 'react';
import { getBooksData } from '../actions/index.js';
import { BASE_URL, TOKEN } from '../utils/url.js';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import axios from 'axios';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id : this.props.match.params.book_id,
        };
    };
      componentDidMount(){
        this.props.getBooksData();
    };
       componentDidUpdate(){
        this.props.getBooksData();
    };
onDelete(book){
    console.log(book);
    let bookId = book.book_id,
    {books} = this.props;

    books.map((book)=>{
        if(book.book_id === bookId ){
            axios.delete(`${BASE_URL}/Books?token=${TOKEN}&book_id=${bookId}`)
            .then(res=>{
                if(res.data.m && res.data.m.length){
                    alert(`${res.data.m} - ${book.title} by ${book.author}`)
            }}
               )
        }
            return book;
    })
    this.props.getBooksData();
    return books;

};
    render() {
    console.log(this.props);
    let {books} = this.props;
    console.log(books)
    return (
      <Fragment>
        <div className={'row'}>
          {/* ---------------  Loader --------------------------        */}
          {books && !books.length && <div className="text-center" >
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>}
          {books && books.map((books, k) =>
            <div
              className={`col-md-6 mb-3 px-2`} key={k} >
              <div
                className={'card shadow'}>
                <div
                  className={'card-body .bg-gradient-primary'}>
                  <h5 className={'card-header text-center'}>
                    {books.title}
                  </h5>
                  <h6 className={'card-body card-subtitle mb-2 text-muted text-center'}>
                    {`By `}<strong>{books.author}</strong>
                  </h6>
                  <div>
                    <p className={'card-text border-bottom mb-3 pb-2'}>
                      {books.description}
                    </p>
                  </div>
                  <Link
                    to={`/Edit/${books.book_id}`}
                    title={'Edit Book'}
                    className={'card-link '}>
                    <button>Edit</button>
                  </Link>
                    <Link
                    to={`/List/${books.book_id}`}>
                    <div
                      title={'Delete Book'}
                      className={'card-link center d-inline-block'}>
                    </div>
                    <button onClick={this.onDelete.bind(this, books)}>Delete</button>
                    </Link>
                  <Link to={`/ViewBook/${books.book_id}`}>
                    <div
                      title={'Open Book'}
                      className={'card-link center d-inline-block'}>
                    </div>
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </Fragment>
    );
  }
}


export default connect((state)=>{
    return{
        books:state.booksData
    }
},
{
    getBooksData
})(List);