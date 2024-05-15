import './index.css'

const NavItems = props => {
  const {score, seconds} = props
  return (
    <li className = "timer-score-con">
      <p className="score">
        {' '}
        Score: <span>{score}</span>{' '}
      </p>
      <div className="timer-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="seconds">{seconds} sec</p>
      </div>
    </li>
  )
}

export default NavItems
