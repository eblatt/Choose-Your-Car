import React from 'react'
import AlpabeticalSorter from 'react-alphabetical-sorter'

const produce = [
{name: "Hershey's", image: require("./images/hersheys.png"), type: "Chocolate"},
{name: "Almond Joy", image: require("./images/almond.png"), type: "Chocolate"},
{name: "Twix", image: require("./images/twix.png"), type: "Chocolate"},
{name: "Snickers", image: require("./images/snickers.png"), type: "Chocolate"},
{name: "Reese's", image: require("./images/reeces.png"),type: "Chocolate"},
{name: "Kit Kat", image: require("./images/kitkat.png"), type: "Chocolate"},
{name: "Gummy Bears", image: require("./images/gummybear.png"), type: "Gummy"},
{name: "Sour Patch Kids", image: require("./images/sourpatch.png"), type: "Gummy"},
{name: "LifeSavers Gummies", image: require("./images/lifesavers.png"), type: "Gummy"},
{name: "Swedish Fish", image: require("./images/swedishfish.png"), type: "Gummy"},
{name: "Peach Rings", image: require("./images/peachrings.png"), type: "Gummy"},
{name: "Starbursts Gummies", image: require("./images/starbursts.png"), type: "Gummy"},
];

export default class alphabetical extends React.Component {
  render() {
    return (
      <div>
 
        <AlpabeticalSorter
          asGroup={produce}
          asName='usage_example'
          type='radio'
          handleCheck={this.handleSorter} />
      </div>
    )
  }
 
  handleSorter = (selected) => {
    console.log(selected)
  }
}