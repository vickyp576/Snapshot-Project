import { useImagecontext } from "../context/ContextProvider"
import ImageComponent from "./ImageComponent";

export default function OutletComponent() {
    const { searchImage } = useImagecontext();
    return <div className="ImageContainer">
        {
            searchImage.photos.photo.map(data => (
                <ImageComponent data={data} key={Math.random()} />
            ))
        }
    </div>
}