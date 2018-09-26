import React from 'react';
import WrongGuesses from './Wrong';
import Word from './Word';
import Message from './Message';


class Game extends React.Component {
    constructor(props){
        const word = 'seneschal';
        super(props);
        this.state = {
            word: word,
            guesses: [],
            lives: 7,
            incorrect_guesses: this.incorrectGuesses([], word),
            correct_guesses: this.correctGuesses([], word),
        };
    }
    isLetter = (s) => {
        return s.length === 1 && s.match(/[a-z]/i).length>0;
    }
    intersection = (setA, setB) => {
        return new Set([...setA].filter((x => setB.has(x))));
    }
    difference = (setA, setB) => {
        return new Set([...setA].filter((x => !setB.has(x))));
    }
    correctGuesses = (word, guesses) => {
        return this.intersection(new Set(word), new Set(guesses));
    }
    incorrectGuesses = (word, guesses) => {
        return this.difference(new Set(word), new Set(guesses));
    }
    handleKeyPress = (event) => {
        if (!this.isLetter(event.key)){
            return;
        }
        const guesses = this.state.guesses.slice();
        guesses.push(event.key);
        this.setState({
            word: this.state.word,
            guesses: guesses,
            lives: this.state.lives,
            incorrect_guesses: this.incorrectGuesses(guesses, this.state.word),
            correct_guesses: this.correctGuesses(guesses, this.state.word),
        });
    }

    render(){
        return (
                <div className="game">
                <h1>Hangman!</h1>
                <Message word={this.state.word} correct_guesses={this.state.correct_guesses} incorrect_guesses={this.state.incorrect_guesses} lives={this.state.lives}/>
                <Word word={this.state.word} guesses={this.state.guesses}/>
                <WrongGuesses incorrect_guesses={this.state.incorrect_guesses}/>
                <input type="text" onKeyPress={this.handleKeyPress}/>
                </div>
        );
    }
}
export default Game;
