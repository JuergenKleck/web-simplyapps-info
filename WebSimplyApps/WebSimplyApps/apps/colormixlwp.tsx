import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppColorMixLWP extends Component {
    render() {
        return (
            <AppTemplate
                title="ColorMix LWP"
                package="info.simplyapps.lwp.colormix"
                app="colormix"
                portrait="1"
                teaser="1"
                screens="2">
                <div className="desccontent">
                    Live Wallpaper with slowly flowing colors.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "ColorMix LWP"
    }
}