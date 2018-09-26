import React from 'react';


class Word extends React.Component {
    showLetter = (letter) => {
        var chr = this.props.guesses.includes(letter) ? letter : '_';
        return ' ' + chr + ' ';
    }
    showGuessedLetters = (word) => {
        return word.split('').map(this.showLetter);
    }
    render(){
        let word_progress = this.showGuessedLetters(this.props.word,
                                                    this.props.guesses);
        return <h3>{word_progress}</h3>;
    }
}
export default Word;
