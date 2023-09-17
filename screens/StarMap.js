import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            latitude : '',
            longitude : '',
        }
    }
    
    render() {

        const {longitude, latitude} = this.state;
        var path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TextInput
                        style = {{height : 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Enter Your Latitude"
                        placeholderTextColor = "red"
                        onChangeText={(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />
                    <TextInput
                        style = {{height : 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Enter Your Longitude"
                        placeholderTextColor = "red"
                        onChangeText={(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />

                    <WebView
                       scalesPageToFit={true}
                       source={{uri: path}}
                       style={{ marginTop: 20, marginBottom: 20, }}
                       />
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}