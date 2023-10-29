import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="teamCard">
        <img src={teamImageUrl} alt={name} className="teamImg" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
