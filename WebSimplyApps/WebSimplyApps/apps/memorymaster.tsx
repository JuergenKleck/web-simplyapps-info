import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppMemoryMaster extends Component {
    render() {
        return (
            <AppTemplate
                title="Memory Master"
                package="info.simplyapps.game.memorymaster"
                app="memorymaster"
                portrait="0"
                teaser="1"
                screens="6">
                <div className="desccontent">
                    Get Memory Master now!
                    <br />
                    Choose between multiple card decks like fruits.
                    Select your preferred card size e.g. 4x3
                    Get unlimited gameplay without Ads.
                    <br />
                    Discover new card decks and card sizes at your choice and extend the game.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Memory Master"
    }
}