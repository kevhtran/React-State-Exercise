import React, { useState } from "react";
import './EightBallGame.css'

function choice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

const EightBallGame = (props) => {


    const [msg, setMsg] = useState("Think of a question");
    const [color, setColor] = useState("black");

    function handleClick() {
        const { msg, color } = choice(props.questions);
        setMsg(msg);
        setColor(color)
    }

    return (
        <div className="EightBallGame">
            <button className="Ball" style={{ backgroundColor: color }} onClick={handleClick}>{msg}</button>
            {/* <h1 style={color}>Your Guess: {guess}</h1> */}
            {/* <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            <h4>Guess #{guessCount}</h4>
            {!isWinner &&
                <button onClick={makeGuess}> Generate Num</button >}

            <button onClick={restart}>New Game</button> */}
        </div>
    )
}

EightBallGame.defaultProps = {
    questions: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
}

export default EightBallGame;