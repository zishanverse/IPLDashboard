import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = item

  return (
    <li className="recentCard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recentLogo"
      />
      <p className="recentTeamName">{competingTeam}</p>
      <p className="recentResult">{result}</p>
      <p className={`${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
