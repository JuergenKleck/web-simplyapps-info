import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppHedgehog extends Component {
    render() {
        return (
            <AppTemplate
                title="Hedgehog"
                package="info.simplyapps.game.hedgehog"
                app="hedgehog"
                portrait="1"
                teaser="1"
                screens="5"
                published="true">
                <div className="desccontent">
                    Move the hedgehog by moving the phone.<br />
                    Collect mushrooms to score points.<br /><br />
                    Play unlimited levels - each level is unique
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Hedgehog"
    }
}