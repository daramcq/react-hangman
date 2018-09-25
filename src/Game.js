import React from 'react';


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
        const has_won = (this.state.correct_guesses.size === (new Set(this.state.word)).size);
        const is_dead = (this.state.incorrect_guesses.size >= this.state.lives);
        let status;
        if (has_won){
            status = "You win!";
        }else if (is_dead){
            status = "You're Dead!";
        }
        else{
            status = "Ok, what's next? You have " + (this.state.lives - this.state.incorrect_guesses.size) +" guesses left!";
        }
        return (
                <div className="game">
                <h1>Hangman!</h1>
                <h2>{status}</h2>
                <p className="lead" style={{textDecorationLine: 'line-through'}}>{this.state.incorrect_guesses}</p>
                <input type="text" onKeyPress={this.handleKeyPress}/>
                </div>
        );
    }
}
export default Game;
