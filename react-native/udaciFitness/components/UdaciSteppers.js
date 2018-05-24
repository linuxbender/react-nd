import {Entypo, FontAwesome} from '@expo/vector-icons'
import React, {Fragment} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default function UdaciSteppers({max, unit, step, value, onIncrement, onDecrement}) {
    return (
        <Fragment>
            <Text>UdaciSteppers</Text>
            <View>
                <TouchableOpacity onPress={onDecrement}>
                    <FontAwesome name='minus' size={30} color={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onIncrement}>
                    <FontAwesome name='plus' size={30} color={'black'}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </Fragment>
    )
}