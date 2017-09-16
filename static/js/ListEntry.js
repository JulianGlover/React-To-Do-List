/* List Entry Component Code */
import React from 'react';

export class ListEntry extends React.Component{

	removeThisItem(){
        this.props.handleClick(this.props.description).bind(this);
    }

	render(){
  	    return <li onClick={this.removeThisItem.bind(this)}>{this.props.description}</li>;
    }

}

ListEntry.propTypes = {
  description: React.PropTypes.string.isRequired,
};
