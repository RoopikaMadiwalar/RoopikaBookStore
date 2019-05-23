import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        let {books} = this.props;
        return(
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <Link
                to={'/'}
                className={"navbar-brand"}>
                {"Books"}
                </Link>
                <div className={'collapse navbar-collapse'}>
                    <ul className={'navbar-nav mr-auto'}>
                        <li className={'nav-item'}>
                            <Link
                            to={'/'}
                            className={'nav-link'}>
                            {`List (${books ? books.length : 'Loading'})`}
                            </Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link
                                to={'/Add'}
                                className={'nav-link'}>
                                {'Add'}
                                </Link>
                                </li>
                        </ul>
                    </div>
                </nav>
        )
    }
};

export default connect((state)=>{
    return{
        books:state.books
    };
})(Header)