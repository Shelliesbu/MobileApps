import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
//import { Card, CardSection, Button } from './common';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class DetailedView extends Component {

    render() {

        return (
            <Card>
                <CardSection>
                    <View style={styles.contentStyle}>
                        <Text style={styles.headerTextStyle} >
                            Bathroom
                        </Text>
                    </View>
                 </CardSection>

                 <CardSection>

                        <Image style={styles.imageStyle} source={require('./mop.jpg')} />

                 </CardSection>

                 <CardSection>
                    <View style={styles.contentStyle}>
                        <Text style={styles.bodyTextStyle}>
                            Difficulty Level: 3
                        </Text>
                        <Text style = {styles.bodyTextStyle}>
                            Description: Clean floors, sink, mirror, toilet, and tub in hall bathroom.
                        </Text>
                    </View>
                </CardSection>

                <CardSection>
                   <Button onPress={() => console.log("I've been chosen!!")}>
                       Choose Me!
                   </Button>
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    headerTextStyle: {
       fontSize: 20,
       paddingLeft: 95,
       color: 'black',
    },

    bodyTextStyle: {
        fontSize: 15,
        color: 'black'
    },

    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    imageStyle: {
        height: 150,
        flex: 1,
        width: null
    }
};

export default DetailedView;