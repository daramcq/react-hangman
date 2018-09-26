import React from 'react';


class WrongGuesses extends React.Component {
    render () {
        return (
            <p className="lead" style={{textDecorationLine: 'line-through'}}>{ this.props.incorrect_guesses }</p>
        );
    }
}
export default WrongGuesses;
