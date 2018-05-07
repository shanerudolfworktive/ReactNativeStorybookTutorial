import React, { Component } from 'react';
import { AppRegistry , View, Button} from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
    require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
    state = {
        width: "100%",
        height: "100%",
        aspectRatio: null
    };

    setIphone5 = () => {
        this.setState({width: "32%", height: null, aspectRatio:320 / 700});
    };

    setIphone6 = () => {
        this.setState({width: "37.5%", height: null, aspectRatio:375 / 867});
    };

    setIphone6P = () => {
        this.setState({width: "41.4%", height: "73.6%"});
    };

    //ViewPort for demo only, not production ready!!!
    render() {
        const {width, height, aspectRatio} = this.state;
        return <View style={{width, height, aspectRatio}}>
            <StorybookUIRoot/>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={this.setIphone5} title="iPhone 5" />
                <Button onPress={this.setIphone6} title="iPhone 6" />
                <Button onPress={this.setIphone6P} title="iPhone 6 Plus" />
            </View>
        </View>;
    }
}

AppRegistry.registerComponent('StorybookTutorial', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
