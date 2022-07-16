

function Nav(props) {
    let out = props.nav.data.nav.map( item => <li><a href={item.link}>{item.text}</a></li>)
    return(
        <nav>
            <ul class="main-navigation">
            {out}
            </ul>
        </nav>
    );
}

export default Nav;