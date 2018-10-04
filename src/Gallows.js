import React from 'react';

class Gallows extends React.Component {

    getGallows = (lives_left) => {
        
        const first = "  ____ \n"  + 
              " |    \n"  + 
              " |     \n"  + 
              " |     \n" +
              " |     \n" + 
              " |__";
        const second = "  ____\n"  + 
              " |  |  \n"  + 
              " |     \n"  + 
              " |     \n" +
              " |     \n" + 
              " |__";
        
        const third =  "  ____\n"  + 
              " |  |  \n"  + 
              " |  0   \n"  + 
              " |     \n" +
              " |     \n" + 
              " |__";

        const fourth = "  ____\n"  + 
              " |  |  \n"  + 
              " |  0  \n"  + 
              " |  |  \n" +
              " |     \n" + 
              " |__";

        
        const fifth = "  ____\n"  + 
              " |  |  \n"  + 
              " |  0  \n"  + 
              " | /|\\  \n" +
              " |     \n" + 
              " |__";
        
        const sixth = "  ____\n"  + 
              " |  | \n"  + 
              " |  0 \n"  + 
              " | /|\\ \n" +
              " | / \\ \n" + 
              " |__";
        
        const seventh = "  ____\n"  + 
              " |  | \n"  + 
              " |  0 \n"  + 
              " | /|/ \n" +
              " | / / \n" + 
              " |__";

        const eighth = "____\n"  + 
              " |  | \n"  + 
              " |  0 \n"  + 
              " | \\|\\ \n" +
              " | \\ \\ \n" + 
              " |__";

        const gallows = [first, second, third, fourth, fifth, sixth];
        let index = gallows.length - 1 - lives_left;
        return gallows[index];
    }
    render() {
        	return <pre id='gallows'>
            { this.getGallows(this.props.lives_left) }
	    </pre>

    }
}
export default Gallows;
