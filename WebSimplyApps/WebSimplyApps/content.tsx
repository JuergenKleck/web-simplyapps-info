import React from 'react';

export class Content extends React.Component {
    render() {
        return (
            <div className="contentWrap">
                <div className="appdetail">
                    <h1>Welcome on simplyapps.info</h1>
                    <h3>All apps are open-source published on my GitHub profile:</h3>
                        <p><a className="site-link" target="_top" href="https://github.com/JuergenKleck?tab=repositories">https://github.com/JuergenKleck?tab=repositories</a></p>
  Further information is either deep-linked from the projects or will be added here.
                </div>
            </div>
        )
    }
    static pageTitle() {
        return "Home"
    }
}

