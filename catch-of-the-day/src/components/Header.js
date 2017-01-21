/**
 * Created by melanie.myers on 1/17/17.
 */

import React from 'react';

//stateless functional component

const Header = (props) => {

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
                <span className="tagline">{props.tagline}</span>
            </h3>
        </header>
    )

}


export default Header;