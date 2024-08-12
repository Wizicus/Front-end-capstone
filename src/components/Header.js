import restauranfood from './assets/restauranfood.jpg'

const Header = () => {
    return(
        <header className="header">
            <div className="header_item" id="header_item1">
                <h1>Little Lemon</h1>
                <h2 className="header_text">Chicago</h2>
                <p className="header_text" id="header_p">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button id="header_button">Reserve a Table</button>
            </div>
            <div className="header_item" id="header_img_container">
                <img src={restauranfood} alt="food" id="header_food"></img>
            </div>
        </header>
    )
}

export default Header