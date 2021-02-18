// For routing
import React from 'react';
import { Route, Switch} from 'react-router-dom';


import LandingPage from './LandingPage';
import RoomDetailPage from './RoomDetailPage';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/room/:slug" component={RoomDetailPage} />
        </Switch>
    )
}

export default App;