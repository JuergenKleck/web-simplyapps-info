import React from 'react';
import ReactDOM from 'react-dom';

import { Navigation } from './navigation';
import './layout.css';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Navigation />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));