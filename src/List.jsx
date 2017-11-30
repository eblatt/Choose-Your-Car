import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
      super(props);
    }
    renderList() {
       
       
        if(this.props.speed === "lowest-highest") {
          var items = this.props.items.sort(function(a,b) {return a.speed-b.speed})
          items = items.map(item => {
          
            return <div id="product" key={item.name} >
                     <ul className ="list-unstyled">
                       <li id="name"  key={item.name}>{item.name}</li>
                       <li><img id="image" className="cars" src= {item.image}/></li>
                       <li id="price"  key={item.price}>{item.price}</li>
                       <li id="speedtext"  key={item.speedtext}>{item.speedtext}</li>
                       <li id="speed" key={item.speed}>{item.speed}</li>
                       <div id="space">
                      </div>
                      <div id="space">
                      </div>
                     </ul>
                  </div>
        });

        return items;
    } else if(this.props.speed ==="highest-lowest") {
       var items = this.props.items
       items.sort(function(a,b) {return b.speed-a.speed})
        items = items.map(item => {
          
            return <div id="product" key={item.name} >
                     <ul className ="list-unstyled">
                       <li id="name"  key={item.name}>{item.name}</li>
                       <li><img id="image" className="cars" src= {item.image}/></li>
                       <li id="price"  key={item.price}>{item.price}</li>
                       <li id="speedtext"  key={item.speedtext}>{item.speedtext}</li>
                       <li id="speed" key={item.speed}>{item.speed}</li>
                       <div id="space">
                      </div>
                      <div id="space">
                      </div>
                     </ul>
                  </div>
        });

        return items;

    } else {
      const items = [].concat(this.props.items).map(item => {
            return <div id="product" key={item.name} >
                     <ul className ="list-unstyled">
                       <li id="name" key={item.name}>{item.name}</li>
                       <li><img id="image" className="cars" src= {item.image}/></li>
                       <li id="price"  key={item.price}>{item.price}</li>
                       <li id="speedtext"  key={item.speedtext}>{item.speedtext}</li>
                       <li id="speed" key={item.speed}>{item.speed}</li>
                       <div id="space">
                      </div>
                      <div id="space">
                      </div>
                     </ul>
                  </div>
        });

        return items;
    
      }
    }
    render() {
        return (
            <ul  className= "list-unstyled" id="full-list">
                {this.renderList()}
                
            </ul>
        );
    }

}
export default List;

