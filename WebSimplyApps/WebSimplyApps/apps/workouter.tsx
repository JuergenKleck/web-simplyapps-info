import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppWorkouter extends Component {
    render() {
        return (
            <AppTemplate
                title="Workouter"
                package="email.kleck.android.workouter"
                app="workouter"
                portrait="1"
                teaser="1"
                screens="5">
                <div className="desccontent">
                    This app displays your daily workouts with weight lifting and cardio.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Workouter"
    }
}