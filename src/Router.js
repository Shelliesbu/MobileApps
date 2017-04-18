import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
//import { ChoreList, DetailedView } from './components/common';
import ChoreList from './components/ChoreList';
import DetailedView from './components/DetailedView';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle = {{paddingTop: 65}}>
            <Scene key = "startPage" component={ChoreList} title = "List of Chores" />
            <Scene key = "detailedView" component={DetailedView} title = "Chore" />
        </Router>
    );
};

export default RouterComponent;