import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppFeedTheCat extends Component {
    render() {
        return (
            <AppTemplate
                title="Feed the Cat"
                package="info.simplyapps.game.feedthecat"
                app="feedthecat"
                portrait="0"
                teaser="1"
                screens="5">
                <div className="desccontent">
                    Feed the cat by collecting food.<br />
                    Tap to escape the traps.<br /><br />

                    During night it will be harder to see the traps.<br />
                    Collect various food for points.<br /><br />

                    Multiple levels to play.<br /><br />

                    Features:<br />
                    - 8 playable rounds<br />
                    - Resume anytime<br />
                    - Endless playing<br />
                    - choose difficulty (easy, medium, hard)
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Feed the Cat"
    }
}