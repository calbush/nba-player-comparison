export default function Search({ getPlayers, findPlayerid}){
    return(
        <div>
            <label htmlFor='search'>Search:</label>
            <input id='search' name='search' type='text'></input>
            <button htmlFor='search' onClick={() => getPlayers(findPlayerid(document.getElementById('search').value))}>Add Player</button>
        </div>
    )
}