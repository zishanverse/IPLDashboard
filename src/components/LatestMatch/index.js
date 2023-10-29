import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latest

  return (
    <div className="latestMatchesCard">
      <div className="latestCardContent">
        <p className="competingTeam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="key">{venue}</p>
        <p className="key">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latestTeamLogo"
      />

      <div className="latestCardContent leftContent">
        <div className="key-value">
          <p className="key">First Innings</p>
          <p className="value">{firstInnings}</p>
        </div>
        <div className="key-value">
          <p className="key">Second Innings</p>
          <p className="value">{secondInnings}</p>
        </div>
        <div className="key-value">
          <p className="key">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
        </div>
        <div className="key-value">
          <p className="key">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
