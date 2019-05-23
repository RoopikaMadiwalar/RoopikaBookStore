import React, {Component} from 'react';

class inputSearch extends  Component{
    constructor(props){
        super(props);
        this.state = {
           searchValue :'' 
        }
    }
handleSearch(e){
     this.props.handleSearch(e);
}
render(){
    return(
     <div>
         <h5>Git Repo Search Filter</h5>
         <input onChange={this.handleSearch.bind(this)}></input>
         <button onClick={this.handleSearch.bind(this)}>Search</button>
     </div>
    )
} 
}

export default inputSearch;