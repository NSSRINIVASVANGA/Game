import './index.css'

const ScoreCard = props => {
  const {score, pressed, countDown} = props
  const playagain = () => {
    pressed()
    countDown()
  }
  return (
    <div className="scorecard">
      <div className="score-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <div className="score-details">
          <p> YOUR SCORE </p>
          <h1> {score} </h1>
          <button className="play-btn" onClick={playagain}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p> PLAY AGAIN </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
