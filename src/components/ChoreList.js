import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
//import { ChoreDetail } from './common';
import ChoreDetail from './ChoreDetail';

class ChoreList extends Component {
    //responds to a user triggered event--what is loaded on start-up
    //base state - initial/empty state Empty list of chores
    state = { chores: [] };
    componentWillMount() {
        axios.get('https://demo4539848.mockable.io').then(response => this.setState({ chores: response.data}));
        }

    //helper method
    renderChores() {
        return this.state.chores.map( chore =>
        //passes down the String as a prop called chore
            <ChoreDetail key={chore.name} chore = {chore} />
            );
        }
    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderChores()}
            </ScrollView>
        );
    }
}

export default ChoreList;