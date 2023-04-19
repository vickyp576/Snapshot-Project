import { useImagecontext } from "../context/ContextProvider"
import ImageComponent from "./ImageComponent";

export default function Mountain(){
    const {Mountainimages} = useImagecontext();
    return <div className="ImageContainer">
        {
            Mountainimages.photos.photo.map(data => (
                <ImageComponent data = {data} key={Math.random()} />
            ))
        }
    </div>  
}