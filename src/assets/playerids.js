import axios from "axios";

export function getPlayers(id){
    if(id){
        axios.get(`https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids=${id}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })
    }
    else console.log('Error: Player Not Found')
}