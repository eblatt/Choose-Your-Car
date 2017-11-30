   import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <ul  className= "list-unstyled" id="full-list">
                {this.renderList()}
                
            </ul>
        );
    }

}
export default Header;