import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppAppointment extends Component {
    render() {
        return (
            <AppTemplate
                title="Appointment"
                package="info.simplyapps.app.appointment"
                app="appointment"
                portrait="1"
                teaser="1"
                screens="2">
                <div className="desccontent">
                    Appointment AppWidget displaying the next 4 appointments from the Calendar.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Appointment"
    }
}