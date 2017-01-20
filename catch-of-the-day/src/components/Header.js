/**
 * Created by melanie.myers on 1/17/17.
 */

import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span className="tagline">{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}
export default Header;