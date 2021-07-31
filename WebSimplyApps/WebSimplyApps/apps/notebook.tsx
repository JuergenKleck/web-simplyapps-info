import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppNotebook extends Component {
    render() {
        return (
            <AppTemplate
                title="Notebook"
                package="info.simplyapps.app.notebook"
                app="notebook"
                portrait="1"
                teaser="1"
                screens="2"
                published="true">
                <div className="desccontent">
                    This app functions as a simple notebook with the possibility to add, edit and delete notebook entries.
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Notebook"
    }
}