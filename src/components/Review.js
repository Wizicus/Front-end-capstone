
const Review = (props) =>{
    return(
        <div className="review">
            <p className="review_rating">{props.rating}</p>
            <div className="review_img_container">
                <img className="review_img" alt="thumbs up" src={props.img}></img>
                <p className="review_name">{props.name}</p>
            </div>
            <p className="reveiw_text">{props.review_text}</p>
        </div>
    )
}

export default Review