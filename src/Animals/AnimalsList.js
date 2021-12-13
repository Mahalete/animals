// import React from "react";
// import { animals } from "./animals";
// import AnimalsCard from "./AnimalsCard";

// import { Switch, Route, useRouteMatch } from "react-router-dom";
// import AnimalSingle from "./AnimalSingle";

// const AnimalsList = () => {
//   const match = useRouteMatch();

//   console.log(match);

//   const animalslisting = animals.map((item) => (
//     <AnimalsCard key={item.name} name={item.name} />
//   ));

//   return (
//     <div className="animalsList">
//       <Switch>
//         <Route exact path={match.path}>
//           {animalslisting}
//         </Route>
//         <Route path={`${match.path}/:animal`}>
//           <AnimalSingle />
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// export default AnimalsList;

// import React, { Component } from "react";
// import { animals } from "./animals";
// import AnimalsCard from "./AnimalsCard";

// import { Switch, Route } from "react-router-dom";
// import AnimalSingle from "./AnimalSingle";

// class AnimalsList extends Component {
//   state = {
//     searchInput: " ",
//   };

//   searchInputHandler = (event) => {
//     this.setState({ searchInput: event.target.value });
//     //console.log(this.state.searchInput);
//   };
//   animalsListing = animals.map((animal) => (
//     <AnimalsCard key={animal.name} name={animal.name} />
//   ));

//   render() {
//     const animalFilter = animals.filter((animal) => {
//       return animal.name
//         .toLowerCase()
//         .includes(this.state.searchInput.toLowerCase());
//     });
//     const animalsListing = animalFilter.map((animal) => (
//       <AnimalsCard key={animal.name} name={animal.name} />
//     ));

//     return (
//       <div className="animalsList">
//         <Switch>
//           <Route exact path={this.props.match.path}>
//             <h2>Search:</h2>
//             <input type="text" onChange={this.searchInputHandler} />
//             {this.animalsListing}
//           </Route>
//           <Route path={`${this.props.match.path}/:animal`}>
//             <AnimalSingle />
//           </Route>
//         </Switch>
//       </div>
//     );
//   }
// }

//export default AnimalsList;
import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

import { Switch, Route } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";
import "../Animals/AnimalsCard.css";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };
  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  AnimalsList = animals.map((animal) => (
    <AnimalsCard key={animal.name} name={animal.name} />
  ));
  render() {
    const animalsFilter = animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    const AnimalsList = animalsFilter.map((animal) => (
      <AnimalsCard key={animal.name} name={animal.name} />
    ));
    return (
      <Switch>
        <Route exact path={this.props.match.path}>
          <div className="searchInput">
            <h3 style={{ marginRight: ".5rem" }}>Search: </h3>
            <input
              className="searchInput_field"
              type="text"
              onChange={this.searchInputHandler}
            ></input>
          </div>
          {AnimalsList}
        </Route>
        <Route path={`${this.props.match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    );
  }
}

export default AnimalsList;
