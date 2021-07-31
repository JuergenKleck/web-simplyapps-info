import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppBrick360 extends Component {
    render() {
        return (
            <AppTemplate
                title="Brick 360"
                package="info.simplyapps.game.brick360"
                app="brick360"
                portrait="0"
                teaser="1"
                screens="4"
                published="true">
                <div className="desccontent">
                    The classic brick breaker revamped and turned into a 360 playzone!
                    <br /><br />
                    No border limit, more fun.<br />
                    Destroy the bricks from any angle to get to a new highscore fast.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Brick 360"
    }
}