export default function PlayerCard({player}){
    return (
        <li>
            <div className="player-card">
                <div>{player.first_name}</div>
            </div>
        </li>
    )
}