import React from 'react';

class Message extends React.Component{

    getMessage = (status, lives_left) => {
        if (status === 'won'){
            return 'You win!';
        }
        if (status === 'lost'){
            return 'You Lose!';
        }
        return "Ok, what's next? You have " + lives_left +" guesses left!"
    }
    render () {
        let message = this.getMessage(this.props.status, this.props.lives_left);
        return <em>{message}</em>;
    }
}
export default Message;
