import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<header><Header/></header>
            <main><HomePage/></main>
            {/* <main><Routing/></main> */}
        </div>
    );
}

export default Main;
