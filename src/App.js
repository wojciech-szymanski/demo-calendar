import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Day from './components/Day';

import calendarLoaded from './actions/calendarLoaded';

class App extends Component {
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                if (data.events) {
                    this.props.calendarLoaded(data.events.map(event => ({ ...event, date: new Date(event.date) })));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="ui main container">
                <header className="ui dividing header">
                    <div className="ui one column grid">
                        <div className="column">
                            <h1>Calendar for { this.props.calendar.monthName } { this.props.calendar.year }</h1>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="ui seven column grid">
                        {
                            this.props.calendar.dayNames.map(day =>
                                <div className="column"
                                    key={ "dayName" + day }>
                                    <div className="ui fluid card">
                                        <div className="content">{ day }</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="ui seven column grid">
                        {
                            this.props.calendar.days.map((day, idx) =>
                                <Day key={ "dayIdx" + idx }
                                    { ...day } />
                            )
                        }
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    calendar: state.calendar
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    calendarLoaded
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
