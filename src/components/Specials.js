import Card from "./Card.js"

const greek_salad = {
    getImageSrc: () => require("./assets/greek salad.jpg"),
    title: "Greek salad",
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, 
    peppers, olives and our Chicago style feta cheese, 
    garnished with crunchy garlic and rosemary crutons.`,
    footer: () => require("./assets/delivery.png")
}

const bruschetta = {
    getImageSrc: () => require("./assets/bruschetta.jpg"),
    title: "Bruschetta",
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread 
    that has been smeared with garlic and seasoned 
    with salt and olive oil.`,
    footer: () => require("./assets/delivery.png")
}

const lemon_dessert = {
    getImageSrc: () => require("./assets/lemon dessert.jpg"),
    title: "Lemon Dessert",
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, 
    every last ingredient has been sourced and is as authentic as can be imagined.`,
    footer: () => require("./assets/delivery.png")
}


const Specials = () => {
    return(
        <>
            <div className="specials_header_container">
                <h1 className="specials_header">This weeks specials!</h1>
                <button className="online_menu_button">Online Menu</button>
            </div>
            <article className="card_container">
                <Card
                    title={greek_salad.title}
                    price={greek_salad.price}
                    food={greek_salad.getImageSrc()}
                    description={greek_salad.description}
                    footer={greek_salad.footer()} />
                <Card
                    title={bruschetta.title}
                    price={bruschetta.price}
                    food={bruschetta.getImageSrc()}
                    description={bruschetta.description}
                    footer={bruschetta.footer()} />
                <Card
                    title={lemon_dessert.title}
                    price={lemon_dessert.price}
                    food={lemon_dessert.getImageSrc()}
                    description={lemon_dessert.description}
                    footer={lemon_dessert.footer()} />
            </article>
            </>
    )
}

export default Specials