import axios from 'axios';
import { useEffect, useState } from 'react';
import CharCard from '../components/CharCard';

const CharactersPage = () => {

    const [characters, setCharacters] = useState([]) // results => [{}]
    const [currUrl, setCurrUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)

    const getCharacters = async() => {
        let response = await axios.get(currUrl)
        let data = response.data
        // console.log(data.info)
        setNext(data.info.next)
        setPrev(data.info.prev)
        setCharacters(data.results)
    }

    useEffect(()=> {
        getCharacters()
    }, [currUrl])

    // useEffect(()=>{
    //     console.log(currUrl)
    // }, [currUrl])

    return (
        <>
            <h2>Characters PAGE</h2>
            <div style={{display:'flex', width:"100%", 'justifyContent':"space-between"}}>
             <button onClick={()=>setCurrUrl(prev)} disabled={!prev}>Previous</button>
             <button onClick={()=>setCurrUrl(next)} disabled={!next}>Next</button>
            </div>
            <div style={{display:"flex", gap:"2vmin", flexWrap:"wrap", justifyContent:"Center"}}>
                {characters.map((character)=>(
                    <CharCard key={character.id} character={character} />
                    // <p>{character.name}</p>
                ))}
            </div>
        </>
    )
}

export default CharactersPage;
