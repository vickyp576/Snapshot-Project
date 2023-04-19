

export default function ImageComponent({data}){
    const {id , farm , server , secret , title} = data;
    const ImageUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    return <div className="image">
        <img src= {ImageUrl} alt={title} />
    </div>
}

/**
 * 
 * https://farm66.staticflickr.com/65535/36493087974_4df1b792a8.jpg
 */