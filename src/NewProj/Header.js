import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
             Header
             Item count: {this.props.items.length}
            </div>
        )
    }
}

export default Header;