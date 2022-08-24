function JoinScreen({start}) {
    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <p>Join the quiz to test your skills in the fish farming business...</p>
            <button onClick={start}>Start</button>
        </div>
    )
}

export default JoinScreen;