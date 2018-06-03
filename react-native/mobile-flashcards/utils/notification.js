import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'
import {NOTIFICATION_KEY} from './constants'

export const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)
};

const createNotification = () => {
    return {
        title: 'Flash card challenge is waiting for you.',
        body: 'Learn something everyday to achieve your personal goal!',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
};

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let nextDay = new Date();
                            nextDay.setDate(nextDay.getDate() + 1);
                            nextDay.setHours(20);
                            nextDay.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: nextDay,
                                    repeat: 'day'
                                }
                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
};
