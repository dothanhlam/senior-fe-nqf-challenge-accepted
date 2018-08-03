import React from 'react';
import {Jumbotron} from 'react-bootstrap';

const App = props => {

    return (
        <div className="container">
            <Jumbotron>
                <h1>Senior FE NFQ</h1>
                <p>
                    This test requires the candidate to work with React, Redux (or similar), HTML API (Location API) and third-party DOM API (Google Map). It also test the candidate's ability to work with remote data source (Google Firebase) as well as deploying application (Heroku, etc..). Nice-looking UI and good code structure is MANDATORY
                </p>
            </Jumbotron>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default App;
