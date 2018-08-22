import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import IconRight from 'react-native-vector-icons/Ionicons';


export default class HeaderRightButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<TouchableOpacity style={styles.container} onPress={() => this.props.onClick()}>
            <IconRight name='ios-remove-circle-outline' size={24} />
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15
    }
});