// For routing
import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import BookingDashboardPage from './BookingDashboardPage';
import RoomDetailPage from './RoomDetailPage';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/dashboard" component={BookingDashboardPage}/>
            <Route exact path="/dashboard/room/:slug" component={RoomDetailPage} />
        </Switch>
    )
}

export default App;