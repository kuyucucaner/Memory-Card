import '../styles/cards.css'
import { useState } from 'react';
import Header from '../components/header.jsx';
import Body from '../components/body.jsx';
import Swal from 'sweetalert2';


const Cards = () => {
    const initialCardData = [
        { id: 1, name: 'Pikachu', imageUrl: 'https://i.pinimg.com/originals/e1/9b/f0/e19bf09954ad5231ad9a89cb8db03ec4.jpg' },
        { id: 2, name: 'Balbasaur', imageUrl: 'https://static.printler.com/cache/3/d/d/4/a/0/3dd4a051ab4d1527aa02e522f155636a2823f57c.jpg' },
        { id: 3, name: 'Charmender', imageUrl: 'https://static.printler.com/cache/a/3/a/d/0/5/a3ad0521f246f9926ef09b2f4c021a3c94a6766e.jpg' },
        { id: 4, name: 'Squirtle', imageUrl: 'https://static.printler.com/cache/b/2/6/c/5/1/b26c51bf87ba6d1574a2ebfbc9071dca90d6445d.jpg' },
        { id: 5, name: 'Gengar', imageUrl: 'https://prod-printler-front-as.azurewebsites.net/media/photo/122738.jpg?mode=crop&width=727&height=102rnd=0.0.1' },
        { id: 6, name: 'Jigglepuff', imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/747/74/desktop-wallpaper-jigglypuff-7-jiggly-puff.jpg' },
        { id: 7, name: 'Arcanines', imageUrl: 'https://cdn.donmai.us/original/69/58/69582cd31fdc84b07e169f805fca9efa.jpg' },
        { id: 8, name: 'Abra', imageUrl: 'https://wallpapers.com/images/hd/abra-pokemon-purple-dqlgh8noofag5bno.jpg' },
        { id: 9, name: 'Koffing', imageUrl: 'https://images4.alphacoders.com/119/1195006.jpg' },
        { id: 10, name: 'Togepi', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTxt4-gcttrn6iNw1Fb1LL8eSaqVc5VJXUA&usqp=CAU' },
    ];
    const [cardData, setCardData] = useState(initialCardData);
    const [selectedCard, setSelectedCard] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const resetGame = () => {
        setScore(0);
        setSelectedCard([]);
        shuffleCards();
    };
    const increaseScore = () => {
        setScore(prevScore => {
            const newScore = prevScore + 1;
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
            return newScore;
        });
    };
    const handleCardClick = (cardId) => {
        if (selectedCard.includes(cardId)) {
            console.log(`Aynı kartı iki kere seçtiniz. Kart ID: ${cardId}`);
            Swal.fire({
                title: 'Oops...',
                text: 'Aynı kartı iki kere seçtiniz!',
                icon: 'error',
                confirmButtonText: 'Tamam',
            });
            resetGame();
        } else {
            setSelectedCard((prevSelectedCards) => [...prevSelectedCards, cardId]);
            increaseScore();
        }
    };
    const shuffleCards = () => {
        const shuffledCards = [...cardData].sort(() => Math.random() - 0.5);
        setCardData(shuffledCards);
    };
    return (
        <div className="main-container">
            <Header score={score} bestScore={bestScore} />
            <Body />
            <div className="card-container">
                {cardData.map((card) => (
                    <button
                        key={card.id}
                        className={`card ${selectedCard === card.id ? 'selected' : ''}`}
                        onClick={() => {
                            handleCardClick(card.id);
                            shuffleCards();
                        }}
                    >
                        <img className='card-image' src={card.imageUrl} alt='character'></img>
                        <h2 className='card-name'>{card.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default Cards