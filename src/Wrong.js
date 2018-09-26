import React from 'react';


class WrongGuesses extends React.Component {
    render () {
        let wrong = [...this.props.incorrect_guesses].map((letter) => {return letter + ' '});
        return (
            <p className="lead" style={{textDecorationLine: 'line-through'}}>{ wrong }</p>
        );
    }
}
export default WrongGuesses;
