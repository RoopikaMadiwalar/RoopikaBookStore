import React, {Component , Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import { get } from '../actions/books/';

class ListItem extends Component {
  render() {
    let { books } = this.props;
    return(
      <div
        className={`col-md-6 mb-3 px-2`}>
        <div
          className={'card shadow'}>
          <div
            className={'card-body'}>
            <h5
              className={'card-title text-center'}>
              {books.title}
            </h5>
            <h6
              className={'card-subtitle mb-2 text-muted text-center'}>
              {`By `}<strong>{books.author}</strong>
            </h6>
            <p
              className={'card-text border-bottom mb-3 pb-2'}>
              {books.description}
            </p>
            <Link
              to={`Edit/${books.book_id}`}
              className={'card-link'}>
              {'Edit'}
            </Link>
            <Link
              to={`Delete/${books.book_id}`}
              className={'card-link text-danger'}>
              {'Delete'}
            </Link>
            <Link
              to={`View/${books.book_id}`}
              className={'card-link float-right'}>
              {'View'}
            </Link>
          </div>
        </div>
      </div>
    );
  };
};

class List extends Component {
  componentDidMount() {
    this.props.get();
  };
  render() {
    let { books } = this.props;
    return (
      <Fragment>
        <div
          className={'row'}>
          {books && books.map((books, k)=>
            <ListItem
              key={k}
              books={books}
            />
          )}
        </div>
        {!books && <li className={'list-group-item font-weight-bold text-center'}>{'Loading Books, Please wait ..'}</li>}
        {books && !books.length && <li className={'list-group-item font-weight-bold text-center'}>{'No Product Added!'}</li>}
      </Fragment>
    );
  }
}

export default connect((state) => {
    return {
      books: state.books
    }
  },
  {
    get
  }
)(List);