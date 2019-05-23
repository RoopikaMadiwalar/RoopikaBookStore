import React, {Component} from 'react';
import Card from './Card';


class SearchResult extends Component{
    constructor(props){
        super(props);
    }

     
    render() {
        return(
            <div>
                <h5>Repo Search Result</h5>
                <Card repData={this.props.repData}/>
            </div>
        )
    }
}

export default SearchResult;