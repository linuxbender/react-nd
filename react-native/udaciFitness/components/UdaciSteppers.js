import {Entypo, FontAwesome} from '@expo/vector-icons'
import React from 'react'
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {black, gray, purple, white} from "../utils/colors";

export default function UdaciSteppers({max, unit, step, value, onIncrement, onDecrement}) {

    const btnStyle = Platform.OS === 'ios' ? 'iosBtn' : 'androidBtn';

    return (
        <View style={[styles.row, {justifyContent: "space-between"}]}>
            <Text>UdaciSteppers</Text>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity
                    style={[
                        styles[btnStyle],
                        {borderTopRightRadius: 0, borderBottomLeftRadius: 0}
                    ]}
                    onPress={onDecrement}>
                    <FontAwesome name="minus" size={30} color={white}/>
                </TouchableOpacity>

                <TouchableOpacity style={[
                    styles[btnStyle],
                    {borderTopRightRadius: 0, borderBottomLeftRadius: 0}
                ]} onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color={white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.metricCounter}>
                <Text>{value}</Text>
                <Text style={{color: gray}}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    androidBtn: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2,
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
});