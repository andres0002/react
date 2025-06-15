// js
// react
import { useState, useEffect } from "react";
// third
// own
import { getImgCatUrl } from "../services/imgCats";

export const useImgCatUrl = ({firstWord}) => {
    const [imgCatUrl, setImgCatUrl] = useState('');

    // get url img of cat with firstWord.
    useEffect(() => {
        if (firstWord && firstWord !== '') {
            // 
            (async () => {
                const newImgCatUrl = await getImgCatUrl({firstWord});
                setImgCatUrl(newImgCatUrl);
            })()
        }
    }, [firstWord]);

    return { imgCatUrl };
}