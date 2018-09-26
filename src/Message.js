import React from 'react';

class Message extends React.Component{

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
    getMessage = (word, correct_guesses, incorrect_guesses, lives) => {
        let status = this.defineStatus(word,
                                       correct_guesses,
                                       incorrect_guesses,
                                       lives);
        if (status === 'won'){
            return 'You win!';
        }
        if (status === 'lost'){
            return 'You Lose!';
        }
        let lives_left = this.getLivesLeft(lives, incorrect_guesses);
        return "Ok, what's next? You have " + lives_left +" guesses left!"
    }
    render () {
        let message = this.getMessage(this.props.word,
                                      this.props.correct_guesses,
                                      this.props.incorrect_guesses,
                                      this.props.lives);
        return <em>{message}</em>;
    }
}
export default Message;
