import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const CharacterDetailsPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(null)

    const getCharacter = async () => {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(response.data)
            setError(null)
        }
        catch {
            setError("Character not found")
        }
    }

    useEffect(() => {
        getCharacter()
    }, [id])

    if (error) return (
        <>
            <p>{error}</p>
            <button onClick={() => navigate('/characters')}>Back to Characters</button>
        </>
    )
    if (!character) return <p>Loading...</p>

    return (
        <div style={{ padding: "2vmin"}}>
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <ul className="list-unstyled">
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Type: {character.type || "N/A"}</li>
                <li>Gender: {character.gender}</li>
                <li>Origin: {character.origin.name}</li>
                <li>Location: {character.location.name}</li>
                <li>Episodes: {character.episode.length}</li>
                <li>Created: {new Date(character.created).toLocaleDateString()}</li>
            </ul>
        </div>
    )
}

export default CharacterDetailsPage;