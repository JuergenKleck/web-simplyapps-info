import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppFishesLWP extends Component {
    render() {
        return (
            <AppTemplate
                title="Fishes LWP"
                package="info.simplyapps.lwp.fishes"
                app="fishes"
                portrait="1"
                teaser="1"
                screens="4">
                <div className="desccontent">
                    Fishes swimming in the ocean - on your screen!
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Fishes LWP"
    }
}