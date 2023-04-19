import { useImagecontext } from "../context/ContextProvider"
import ImageComponent from "./ImageComponent";

export default function Food(){
    const {Foodimages} = useImagecontext();
    return <div className="ImageContainer">
        {
            Foodimages.photos.photo.map(data => (
                <ImageComponent data = {data} key={Math.random()} />
            ))
        }
    </div>  
}