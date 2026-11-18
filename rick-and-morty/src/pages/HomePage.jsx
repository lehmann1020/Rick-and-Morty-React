import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const HomePage = () => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/?page=1")
            .then((response) => {
                setCharacter(response.data.results[0]);
            })
            .catch((error) => console.error(error));
    }, []);

    if (!character) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>Home Page</h2>

            <Card style={{ width: "18rem", margin: '0 auto' }}>
                <Card.Img variant="top" src={character.image} />
                {/* <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                </Card.Body> */}
            </Card>
        </>
    );
};

export default HomePage;










// import axios from "axios"

// const HomePage = () => {
//     return (
//         <>
//          <h2>Home Page</h2>
//             {/* <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={character.image} />
//                 <Card.Body>
//                 <Card.Title>{character.name}</Card.Title>
//                 </Card.Body>
//              </Card> */}
           
        
//         </>
//     )
// }

// export default HomePage