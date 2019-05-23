import React, {Component} from 'react';
import InputSearch from './inputSearch';
import SearchResult from './SearchResult';
import axios from 'axios';

class gitApp extends Component {
    constructor(props) {
        super(props);
          this.state = {
            repData :{},
            data: {}
        }
    }
     componentDidMount(){
        axios.get('https://api.github.com/search/repositories?q=TEST').then(
            resp => {console.log(resp.data)
            this.setState ({repData:resp.data.items,
            data :resp.data.items})}
        )
        // fetch('https://api.github.com/search/repositories?q=TEST').then(res => res.json()).then(
        //     (result) => {
        //         this.setState({repData:result.items})
        //     }
        // )
    }

    handleSearch(e){
       var searchData = this.state.data;
       var searchQuery = e.target.value.toLowerCase();
       var dispRes = searchData.filter(function(el){
           var searchValue = el.description.toLowerCase();
           return searchValue.indexOf(searchQuery) !== -1;
       }) 
        this.setState({
            repData : dispRes
        })
    }



    render() {
        return(
           <div>
               <InputSearch handleSearch={this.handleSearch.bind(this)}/>
               <SearchResult repData={this.state.repData}/>
               </div>

        )
    }
}


export default gitApp;