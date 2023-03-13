import PlayerCard from "./PlayerCard"

export default function CardsGrid({cards}){
    return(
        <ul>
            {cards.map((card) => {
                return <PlayerCard key={`${card.first_name} ${card.last_name}`} player={card} />
            })}
        </ul>
    )
}