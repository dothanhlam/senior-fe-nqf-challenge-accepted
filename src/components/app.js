import React from 'react';

const App = props => {
    const { store } = props;
    const childrenWithProps = React.Children.map(props.children, child =>
        React.cloneElement(child, { store }));

    return (
        <div className="container">
            <h1>Just a test, as I hate</h1>
            <div>
                {childrenWithProps}
            </div>
        </div>
    )
}
export default App;
