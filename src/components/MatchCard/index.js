// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachmatch} = props
  const {umpires, result, id, date, venue} = eachmatch
  const manOfTheMatch = eachmatch.man_of_the_match
  const competingTeam = eachmatch.competing_team
  const competingTeamLogo = eachmatch.competing_team_logo
  const firstInnings = eachmatch.first_innings
  const secondInnings = eachmatch.second_innings
  const matchStatus = eachmatch.match_status
  return (
    <li className="match-card-bg-style">
      <img
        alt={`competing team ${competingTeam}`}
        className="Match-card-logo-style"
        src={competingTeamLogo}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-style ">{result}</p>
      <p
        className={matchStatus === 'Won' ? 'win-font-color' : 'lose-font-color'}
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
