import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {loader: true, list: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateList = this.convertTeamCase(data)
    console.log(updateList)
    this.setState({list: updateList, loader: false})
  }

  convertTeamCase = data => ({
    latestMatchDetails: this.convertLatestTeam(data.latest_match_details),
    recentMatches: data.recent_matches.map(each =>
      this.convertLatestTeam(each),
    ),
    teamBannerUrl: data.team_banner_url,
  })

  convertLatestTeam = item => ({
    competingTeam: item.competing_team,
    competingTeamLogo: item.competing_team_logo,
    date: item.date,
    firstInnings: item.first_innings,
    id: item.id,
    manOfTheMatch: item.man_of_the_match,
    matchStatus: item.match_status,
    result: item.result,
    secondInnings: item.second_innings,
    umpires: item.umpires,
    venue: item.venue,
  })

  renderDetails = () => {
    const {list} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = list

    return (
      <div className="teamMatchesCard">
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <p className="latest">Latest Matches</p>
        <LatestMatch latest={latestMatchDetails} />
        <ul className="listOfRecent">
          {recentMatches.map(each => (
            <MatchCard key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {loader} = this.state

    return (
      <div className="teamDetailsContainer">
        {loader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
