import React, { Component } from 'react';

export class Privacy extends Component {
    render() {
        return (
            <div className="contentWrap">
                <h2>Data privacy statements</h2>
                <h3>All applications and games:</h3>
                <ul>
                    <li>In general each application only collects internal data as less as possible needed to run.</li>
                    <li>Games only collect in-game statistical data such as the amount of games played, total play time, etc. which may be used to award in-game trophies or achievements.</li>
                    <li>No application requires Internet connectivity if not stated otherwise.</li>
                    <li>No personal information is collected at all.</li>
                    <li>Each application requires only an absolute bare minimum of permissions for a specific functionality on request.</li>
                </ul>
                <h3>This website:</h3>
                <ul>
                    <li>This site does not collect any information.</li>
                </ul>
            </div>
        )
    }
    static pageTitle() {
        return "Privacy Policy"
    }
}