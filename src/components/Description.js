import chefs from "./assets/Mario and Adrian A.jpg"
import chefs2 from "./assets/Mario and Adrian b.jpg"

const Description = () => {
    return(
        <section className="desc" id="desc">
            <header className="desc_item" id="desc_item1">
                <h1>Little Lemon</h1>
                <h2 className="desc_text">Chicago</h2>
                <p className="desc_text" id="header_p">Little Lemon Chicago was founded by two brothers Mario and Adrian. 
                    They learned their skills from their grandmother who was herself lifelong chef. Later Mario and Adrian would hone their talents at culinary school where the brothers
                    not only improved their already impressive talents but also made many lefelong friends. After graduating the brothers would open up Little Lemon fulfilling the dream
                    their grandmother always held.</p>
            </header>
            <div className="desc_item" id="desc_item2">
                <img alt="placeholder" src={chefs} id="desc_img1" className="desc_img1"></img>
                <img alt="placeholder2" src={chefs2} id="desc_img2" className="desc_img2"></img>
            </div>
        </section>
    )
}

export default Description