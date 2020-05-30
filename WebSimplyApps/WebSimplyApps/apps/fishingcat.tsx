import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppFishingCat extends Component {
    render() {
        return (
            <AppTemplate
                title="Fishing Cat"
                package="info.simplyapps.game.fishingcat"
                app="fishingcat"
                portrait="0"
                teaser="1"
                screens="4">
                <div className="desccontent">
                    Help the little cat to catch some fishes.
                    <br />
                    You can catch up to 20 different fishes. Additional you can gather some rare fishes.
                    <br />
                    But Beware! Don't let the Shark eat you.
                    <br /><br />
                    Gather trophies and gain rewards for excellent gameplay.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Fishing Cat"
    }
}