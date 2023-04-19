import { useImagecontext } from "../context/ContextProvider"
import ImageComponent from "./ImageComponent";

export default function Birds(){
    const {Birdimages} = useImagecontext();
    return <div className="ImageContainer">
        {
            Birdimages.photos.photo.map(data => (
                <ImageComponent data = {data} key={Math.random()} />
            ))
        }
    </div>  
}