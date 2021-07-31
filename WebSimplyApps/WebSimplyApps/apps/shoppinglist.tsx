import React, { Component } from 'react';

import { AppTemplate } from './apptemplate';

export class AppShoppingList extends Component {
    render() {
        return (
            <AppTemplate
                title="Shopping list"
                package="info.simplyapps.app.shoppinglist"
                app="shoppinglist"
                portrait="1"
                teaser="1"
                screens="4"
                published="true">
                <div className="desccontent">
                    Create lists for shopping like grocery, food, medical, car, ...
                    <br /><br />
                    Easy management and shopping function
                    <br /><br />
                    Use functions like automatic sorting to keep order in the lists
                </div>
            </AppTemplate>
        )
    }
    static pageTitle() {
        return "Shopping List"
    }
}