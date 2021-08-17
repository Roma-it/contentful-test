import React from 'react'
import { Switch, Route} from "react-router-dom";
import { BASE_URL, SPACE_ID, TOKEN,ENTRY_ID,PREVIEW_URL,PREVIEW_TOKEN } from "./CONSTANTS";
import "./appRouter.css"
import Container from './Container';
//3X2GWlfuFk1EIXODOPqeSq
function AppRouter() {
  const id="id";
    return (
        <Switch>
            <Route exact path="/">
                <Container/>
            </Route>
          <Route path="/entries">
            <Container
              URL={`${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${TOKEN}`}
            />
          </Route>
          <Route path="/entry">
            <Container
              URL={`${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries/${ENTRY_ID}?access_token=${TOKEN}`}
            />
          </Route>
          <Route path="/all-entries">
            <Container
              URL={`${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${PREVIEW_TOKEN}`}
            />
          </Route>
          <Route path="/draft-entry/:id">
            <Container
              URL={`${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries/${id}?access_token=${PREVIEW_TOKEN}`}
            />
          </Route>
          <Route path="/filter-drafts-entries">
            <Container
              URL={`${PREVIEW_URL}/spaces/${SPACE_ID}/environments/master/entries?access_token=${PREVIEW_TOKEN}`}
              filter={1}
            />
          </Route>
        </Switch>
    )
}

export default AppRouter
