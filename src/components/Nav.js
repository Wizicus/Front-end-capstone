import LittleLemon from './assets/LittleLemonFull.png'

const Links = [
    {name: "Home", url: "/"},
    {name: "About", url: "/"},
    {name: "Menu", url: "/"},
    {name: "Reservations", url: "/reservations"},
    {name: "Order Online", url: "/"},
    {name: "Login", url: "/"}
]

const NavItems = (props) =>{
    const links = props.data
    .map((item)=>{
        return(
            <a href={item.url} key={item.name} className="navitem">
                {item.name}
            </a>
        )
    })
    return <ul className={props.name}>{links}</ul>
}

const Nav = () => {
    return(
        <nav className='top_nav'>
            <img src={LittleLemon} alt="Little Lemon Logo" className="logo"></img>
            <NavItems data={Links} name="navitems"/>
        </nav>
    )
}

export {Nav, NavItems, Links}