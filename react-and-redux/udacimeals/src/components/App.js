import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRecipe, removeFromCalendar} from "../actions";

class App extends Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

const mapStateToProps = ({food, calendar}) => {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return {
        calendar: dayOrder.map(day => {
            return {
                day,
                meals: Object.assign({}, food[calendar[day]])
            };
        })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);