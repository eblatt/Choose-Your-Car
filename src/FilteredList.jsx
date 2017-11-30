import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "all",
            speed:"none",
            price: "all"
            
        };
    }
   
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {

        var search_bar = item.name.toLowerCase().search(this.state.search) !== -1;

        var state_type = this.state.type;
        var item_type = item.type;

        var state_price = this.state.price;
        var item_price = item.price;

        var sustainable = false;
        var price = false;

        if(state_type =="all") {
            item_type = "all";
        }

        if(state_price =="all") {
            item_price = "all";
        }


        if((state_price == item_price) && search_bar) {
            price = true;
        }

        if((state_type == item_type) && search_bar) {
            sustainable = true;
        }

        if(sustainable && price) {
            return true;
        }
        else {
            return false;
        }
    }
 
    selectedItem = (eventKey: any, event: Object) => {
        this.setState({type: eventKey});
    }
    selectedSpeed = (eventKey: any, event: Object) => {
        this.setState({speed: eventKey});
    }
    selectedPrice = (eventKey: any, event: Object) => {
        this.setState({price: eventKey});
    }
    
    render() {
        return (

            <div className="filter-list">
                <div id="space">
                </div>
     
                <h1 id="findcar">Find Your Car</h1>
                 <div id="space">
                </div>
                 <div id="space">
                </div>
                 <div id="space">
                </div>
                 <div id="space">
                </div>
                
            
                <DropdownButton id="typeDropdown" class = "dropdown" title={"Sustainability"}>
                  <MenuItem eventKey="all" onSelect={this.selectedItem}>All</MenuItem>
                  <MenuItem eventKey="Enviornmentally-Friendly" onSelect={this.selectedItem}>Enviornmentally-Friendly</MenuItem>
                  <MenuItem eventKey="Not Enviornmentally-Friendly" onSelect={this.selectedItem}>Not Enviornmentally-Friendly</MenuItem>
                </DropdownButton>
                 <DropdownButton id="affordabilityDropdown" class= "dropdown" title={"Price Range"}>
                  <MenuItem eventKey="all" onSelect={this.selectedPrice}>All </MenuItem>
                  <MenuItem eventKey="Price Range: 25,000 or less" onSelect={this.selectedPrice}>Price Range: 25,000 or Less </MenuItem>
                  <MenuItem eventKey="Price Range: 25,000-100,000" onSelect={this.selectedPrice}>Price Range: 25,000-100,000 </MenuItem>
                   <MenuItem eventKey="Price Range: 100,000 or greater" onSelect={this.selectedPrice}>Price Range: 100,000 or Greater </MenuItem>
                </DropdownButton>
                <DropdownButton id="speedDropdown" class= "dropdown" title={"Speed"}>
                  <MenuItem eventKey="none" onSelect={this.selectedSpeed}>None </MenuItem>
                  <MenuItem eventKey="lowest-highest" onSelect={this.selectedSpeed}>Fastest to Slowest (0-60mph in seconds) </MenuItem>
                  <MenuItem eventKey="highest-lowest" onSelect={this.selectedSpeed}>Slowest to Fastest (0-60mph in seconds) </MenuItem>
                </DropdownButton>

                <div id="space">
                </div>

                <div id = "search-bar">
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                </div>
                    <List speed={this.state.speed} items={this.props.items.filter(this.filterItem)} />


            </div>
        );
    }
}
export default FilteredList;