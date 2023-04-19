import { useImagecontext } from "../context/ContextProvider";
import ImageComponent from "./ImageComponent";

export default function Beach(){
    const {Beachimages} = useImagecontext();
    return <div className="ImageContainer">
        {
            Beachimages.photos.photo.map(data => (
                <ImageComponent data = {data} key={Math.random()} />
            ))
        }
    </div>  
}