import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../components/home/home"
import MaintainPeople from "../components/people/MaintainPeople"
import ListPeople from "../components/people/ListPeople"
import ListColor from "../components/colors/ListColors"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/peoples" component={ListPeople} />
      <Route exact path="/peoples/add" component={MaintainPeople} />
      <Route exact path="/peoples/edit/:id" component={MaintainPeople} />
      <Route exact path="/colors" component={ListColor} />
    </Switch>
  );
}
