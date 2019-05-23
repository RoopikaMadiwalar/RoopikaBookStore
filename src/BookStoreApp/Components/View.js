import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ajax from '../utils/ajax';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book_id: this.props.match.params.book_id,
            book: {

            }
        }
    }
    componentDidMount(){
        let { book_id } = this.state;
        ajax({
            url: '/Books',
            postUrl:`&book_id=${book_id}`
        }).then(({ s,d:book })=>{
            if(s === 's') {
                this.setState({
                    book
                })
            }
        })
    };
    render(){
        let {book} = this.state;
        return(
            <div
            className={`col-md-6 mb-3 px-2`}>
            <div
            className={'card shadow'}>
            <div
            className={'card-body'}>
            <h5
            className={'card-title text-center'}>
            {book.title}
            </h5>
            <h6
            className={'card-subtitle mb-2 text-muted text-center'}>
            {`By`}<strong>{book.author}</strong>
            </h6>
            <p
             className={'card-text border-bottom mb-3 pb-2'}>
             {book.description}
            </p>
            <Link
            to={`/`}
            className={'card-link'}>
            {'Back'}
            </Link>
                </div>
                </div>
                </div>
        )
    }
}

export default View;