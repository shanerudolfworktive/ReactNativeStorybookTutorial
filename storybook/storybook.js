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
        height: "100%"
    };

    setIphone5 = () => {
        this.setState({width: 320, height: 480});
    };

    setIphone6 = () => {
        this.setState({width: 375, height: 667});
    };

    setIphoneX = () => {
        this.setState({width: 2436, height: 1125});
    };

    render() {
        const {width, height} = this.state;
        return <View style={{width, height}}>
            <StorybookUIRoot/>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={this.setIphone5} title="iPhone 5" />
                <Button onPress={this.setIphone6} title="iPhone 6" />
                <Button onPress={this.setIphoneX} title="iPhone X" />
            </View>
        </View>;
    }
}

AppRegistry.registerComponent('StorybookTutorial', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
