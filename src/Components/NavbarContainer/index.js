import './index.css'

const NavbarContainer = props => {
  const {valueNum, timerInSeconds} = props
  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="navbar-img"
      />
      <ul className="navbar-sub-con">
        <li className="score">
          <p>
            Score: <span className="score-num">{valueNum}</span>
          </p>
        </li>
        <li className="timer-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer-para">{timerInSeconds} SEC</p>
        </li>
      </ul>
    </div>
  )
}

export default NavbarContainer
