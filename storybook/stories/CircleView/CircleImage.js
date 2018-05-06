/* @flow */
import * as React from "react";
import {Image, StyleSheet} from "react-native";

type CircleImageProps = {|
    borderColor?: string,
    borderWidth?: number,
    backgroundColor: string,
    imageSource: string,
    style?: StyleSheet.Styles
|};

type CircleImageStateTypes = {|
    borderRadius: number
|};

export class CircleImage extends React.PureComponent<
    CircleImageProps,
    CircleImageStateTypes
> {
    state = {
        borderRadius: 0
    };

    static defaultProps = {
        borderWidth: 2
    };

    get styles(): * {
        const {borderRadius} = this.state;
        const {style, borderWidth, borderColor, backgroundColor} = this.props;
        return [
            {backgroundColor},
            {aspectRatio: 1},
            {borderWidth},
            borderColor && {borderColor},
            borderRadius && {borderRadius},
            style
        ];
    }

    setBorderRadius = ({nativeEvent}: { nativeEvent: * }) => {
        if (nativeEvent) {
            this.setState({borderRadius: nativeEvent.layout.width / 2});
        }
    };

    render() {
        const {imageSource} = this.props;
        return (
            <Image
                resizeMode="contain"
                source={{uri: imageSource}}
                style={this.styles}
                onLayout={this.setBorderRadius}
            />
        );
    }
}
