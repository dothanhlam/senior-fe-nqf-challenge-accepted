import React from 'react';
const App = props => {

    return (
        <div className="container">
            <h1>Just a test, as I hate</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default App;
