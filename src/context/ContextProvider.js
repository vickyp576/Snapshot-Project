import React, { useContext, useEffect, useState } from "react";
import { getImages } from "../Utils/api";

const ImageContext = React.createContext();
export function ContextProvider({ children}) {
    const [Mountainimages, setMountainImages] = useState();
    const [Beachimages, setBeachImages] = useState();
    const [Foodimages, setFoodImages] = useState();
    const [Birdimages, setBirdImages] = useState();
    const [searchtext , setsearchText] = useState();
    const [searchImage , setSearchImage] = useState();
    useEffect(() =>{
        getImages("Mountain")
            .then(data => setMountainImages(data));
    } , [])
    useEffect(() =>{
        getImages("Beach")
            .then(data => setBeachImages(data));
    } , [])
    useEffect(() =>{
        getImages("Food")
            .then(data => setFoodImages(data));
    } , [])
    useEffect(() =>{
        getImages("Birds")
            .then(data => setBirdImages(data));
    } , [])
    useEffect(()=>{
        getImages(searchtext)
            .then(data => setSearchImage(data))
    } , [searchtext])
    return <ImageContext.Provider
        value={{
            Mountainimages,
            Beachimages,
            Foodimages,
            Birdimages,
            searchtext,
            searchImage,
            search : (data) =>{
                setsearchText(data)
            }
        }}
    >
        {children}
    </ImageContext.Provider>
}

export const useImagecontext = () => useContext(ImageContext);
