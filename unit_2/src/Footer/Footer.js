import Nav from '../Header/Nav';


function Footer(props) {

    return(
        <>
            <footer>
                <h3>{props.data.site_name}</h3>
                <Nav nav={props}/>
            </footer>
        </>
    );
}

export default Footer;