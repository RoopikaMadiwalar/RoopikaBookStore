import React, {Component} from 'react';


class Card extends Component {
    render() {
        const {repData} = this.props;
        return(
            <div>
                {repData && repData.length > 0 && repData.map((item,index)=>{
                    return (
                        <p key={index}>{item.description}</p>
                    )
                })}
            </div>
        )
    }
}

export default Card;
