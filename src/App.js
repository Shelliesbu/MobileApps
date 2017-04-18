//import a library to help to create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import reducers from './reducers';
//import { Header, ChoreList } from './components/common';
import Header from './components/header';
import ChoreList from './components/ChoreList';
import Router from './Router';
import LoginForm from './components/LoginForm';
import Spinner from './components/Spinner';
import Button from './components/Button';


//create component and adds a flex 1 styling to fill the entire device with this component
class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp( {
            apiKey: 'AIzaSyDxVXeoctWPuGj6HlhAWwAJdd5PRDt98LY',
            authDomain: 'authentication-9f27e.firebaseapp.com',
            databaseURL: 'https://authentication-9f27e.firebaseio.com',
            storageBucket: 'authentication-9f27e.appspot.com',
            messagingSenderId: '744279226808'
        });

        //when user signs in, the user will be an object; when signed out, it'll be null or undefined
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {

    switch (this.state.loggedIn) {

        case true:
            return  <Router />;
        case false:
            return <LoginForm />;
        default:
            return <Spinner size="large" />;
      }
    }

    render() {

        return (
          <View style={{flex: 1}}>
           <Header headerText={'Chore Management System'} />
           {this.renderContent()}
          </View>
        );
    }
}

export default App;