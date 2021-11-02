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

import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {
  animalslisting = animals.map((item) => (
    <AnimalsCard key={item.name} name={item.name} />
  ));

  render() {
    return (
      <div className="animalsList">
        <Switch>
          <Route exact path={this.props.match.path}>
            {this.animalslisting}
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AnimalsList;
