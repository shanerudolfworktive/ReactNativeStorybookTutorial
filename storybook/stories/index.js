import React from 'react';
import {Text, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import {CircleImage} from "./CircleView/CircleImage";

const imgSource = "https://raw.githubusercontent.com/shanerudolfworktive/ScalableLayoutTutorial/master/champion.png";

storiesOf('Core', module)
    .addDecorator(withKnobs)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)
    .add('circleImage - red border', () =>
        <CircleImage imageSource={imgSource}
                     borderColor={text("borderColor", "#999")}
                     backgroundColor={text("backgroundColor", "#eee")}
                     borderWidth={number("borderWidth", 3)}/>)


storiesOf('FaceBookApp/shared', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('rounded button', () => (
        <View />
    ))
    .add('toolBar', () => (
        <View />
    ));

storiesOf('FaceBookApp/LoginScene', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('login button', () => (
        <View />
    ))
    .add('userName', () => (
        <View />
    ))
    .add('footer', () => (
        <View />
    ));

storiesOf('TwitterApp/shared', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('rounded button', () => (
        <View />
    ))
    .add('toolBar', () => (
        <View />
    ))
    .add('footer', () => (
        <View />
    ));

storiesOf('TwitterApp/LoginScene', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('login button', () => (
        <Button onPress={action('clicked-text')}>
            <Text>Hello Button</Text>
        </Button>
    ))
    .add('userName', () => (
        <Button onPress={action('clicked-emoji')}>
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));
