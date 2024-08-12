import Review from "./Review"

const review1= {
    rating:"5/5",
    img: ()=> require("./assets/thumbs up.jpg"),
    name:"Davis",
    review_text:"Fantastic dinning experience with delicious food."
}
const review2= {
    rating:"4/5",
    img: ()=> require("./assets/thumbs up.jpg"),
    name:"Robert",
    review_text:"The service was excellent however it was a bit crowded and I had to wait for a while to get a table."
}
const review3= {
    rating:"4.5/5",
    img: ()=> require("./assets/thumbs up.jpg"),
    name:"Steven",
    review_text:"Best Lemon cake i've ever had!"
}
const review4= {
    rating:"5/5",
    img: ()=> require("./assets/thumbs up.jpg"),
    name:"Jeffrey",
    review_text:"The Bruschetta was grilled to perfection and the staff were the friendliest i have ever seen."
}

const Testimonials = () =>{
    return(
        <header className="testimonials_container">
            <h2 className="testimonials_header">Testimonials</h2>
            <div className="review_container">
                <Review
                rating={review1.rating}
                img={review1.img()}
                name={review1.name}
                review_text={review1.review_text}
                />
                <Review
                rating={review2.rating}
                img={review2.img()}
                name={review2.name}
                review_text={review2.review_text}
                />
                <Review
                rating={review3.rating}
                img={review3.img()}
                name={review3.name}
                review_text={review3.review_text}
                />
                <Review
                rating={review4.rating}
                img={review4.img()}
                name={review4.name}
                review_text={review4.review_text}
                />
            </div>
        </header>
    )
}

export default Testimonials