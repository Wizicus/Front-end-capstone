
const Card = (props) => {
    return(
        <div className="card">
            <img alt="greek salad" src={props.food} className="card_image"></img>
            <div className="card_header_container">
                <p className="card_title">{props.title}</p>
                <p className="card_price">{props.price}</p>
            </div>
            <p className="card_description">{props.description}</p>
            <div className="card_footer_container">
                <p className="card_footer_text">Order a delivery</p>
                <img alt="footer" src={props.footer}></img>
            </div>

        </div>
    )
}

export default Card