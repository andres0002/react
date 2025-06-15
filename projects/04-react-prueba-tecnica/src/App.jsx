// js
// react
// third
// own
import './App.css';
import { useCatFact } from './hooks/useCatFact';
import { useFirstWord } from './hooks/useFirstWord';
import { useImgCatUrl } from './hooks/useImgCatUrl';

export const App = () => {    
    const { fact, refreshFact } = useCatFact();
    const { firstWord } = useFirstWord({fact});
    const { imgCatUrl } = useImgCatUrl({firstWord});

    // Update fact cat.
    const handleClick = () => {
        refreshFact();
    }

    return (
        <main>
            <h1>App Show Img Fact Cat</h1>
            <button onClick={handleClick}>Get New Fact</button>
            {
                fact && <p>Fact: <strong>{fact}</strong></p>
            }
            {
                firstWord && <p>FirstWord: <strong>"{firstWord}"</strong>.</p>
            }
            {
                imgCatUrl && <img src={imgCatUrl} alt={`Img extracted using the first word of '${fact}'`} />
            }
        </main>
    )
}