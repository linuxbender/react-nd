import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {gray} from '../utils/colors'
// utils
import {getMetricMetaInfo} from '../utils/helpers'
// components
import DateHeader from './DateHeader'


export default function MetricCard({date, metrics}) {
    return (
        <View>
            {date && <DateHeader date={date}/>}
            {Object.keys(metrics).map((metric) => {
                const {getIcon, displayName, unit, backgroundColor} = getMetricMetaInfo(metric);
                return (
                    <View style={styles.metric} key={metric}>
                        {getIcon()}
                        <View>
                            <Text style={{fontSize: 20}}>
                                {displayName}
                            </Text>
                            <Text style={{fontSize: 16, color: gray}}>
                                {metrics[metric]} {unit}
                            </Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    metric: {
        flexDirection: 'row',
        marginTop: 12
    },
});
