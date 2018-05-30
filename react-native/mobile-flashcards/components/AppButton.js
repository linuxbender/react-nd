import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {lightBlue, white} from '../utils/constants'

export default function AppButton({children, onPress, style = {}, ...props}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, style]}
            {...props}>
            <Text style={styles.btntext}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: lightBlue,
    },
    btntext: {
        color: white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    }
});
