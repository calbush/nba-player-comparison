import PlayerCard from "./PlayerCard"

export default function CardsGrid({cards}){
    return(
        <div>
            {cards.map((card) => {
                return <PlayerCard player={card} />
            })}
        </div>
    )
}