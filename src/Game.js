import React from 'react';
import WrongGuesses from './Wrong';
import Word from './Word';
import Message from './Message';
import Gallows from './Gallows';

class Game extends React.Component {
    constructor(props){
        const word = 'seneschal';
        super(props);
        this.state = {
            word: word,
            guesses: [],
            lives: 5,
            incorrect_guesses: this.incorrectGuesses([], word),
            correct_guesses: this.correctGuesses([], word),
            lives_left: 5,
            status: 'playing',
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

    defineStatus = (word, correct_guesses, incorrect_guesses, lives)=> {
        if (correct_guesses.size === (new Set(word)).size){
            return 'won';
        }
        if (incorrect_guesses.size >= lives){
            return 'lost';
        }
        return 'playing';
    }
    getLivesLeft = (lives, incorrect_guesses) => {
        let lives_left = lives;
        if (incorrect_guesses.size > 0){
            lives_left -= incorrect_guesses.size;
        }
        return lives_left;
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
            lives_left: this.getLivesLeft(this.state.lives, this.incorrectGuesses(guesses, this.state.word)),
            status: this.defineStatus(this.state.word, this.correctGuesses(this.state.word, guesses),
                                      this.incorrectGuesses(guesses, this.state.word),
                                      this.getLivesLeft(this.state.lives,
                                                        this.incorrectGuesses(guesses, this.state.word))
                                     )     
        });
    }

    render(){
        return (
                <div className="container">
                <div className="game">
                <h1>Hangman!</h1>
                <Message status={this.state.status} lives_left={this.state.lives_left}/>
                <Gallows lives_left={this.state.lives_left}/>
                <Word word={this.state.word} guesses={this.state.guesses}/>
                <WrongGuesses incorrect_guesses={this.state.incorrect_guesses}/>
                <input type="text" onKeyPress={this.handleKeyPress}/>
                </div>
                </div>
        );
    }
}
export default Game;
