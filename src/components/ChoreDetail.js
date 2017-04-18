import React from 'react';
import {View, Text, Image} from 'react-native';
//import { Card, CardSection, Button } from './common';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

//deconstructed props due to multiple references to the props.chore object
const ChoreDetail = ( {chore} ) => {

    const {name, level} = chore;

    const {
        thumbnailStyle,
        headerContentStyle,
        headerTextStyle,
        imageStyle} = styles;

    return (
        <Card>

            <CardSection>
                <View>
                   <Image style={thumbnailStyle} source={require('./dusting.gif')} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text>Skill Level: {level}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={require('./bathroom.jpg')} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Actions.detailedView()}>
                    More Info
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
            </CardSection>

        </Card>
    );
};

const styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 20,
        color: 'black'
    },

    thumbnailStyle: {
        marginRight: 10,
        height: 50,
        width: 50
        },

     imageStyle: {
        height: 250,
        flex: 1,
        width: null
        }

};
export default ChoreDetail;