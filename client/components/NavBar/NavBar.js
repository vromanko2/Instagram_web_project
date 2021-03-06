import bem from "../../helpers/bem";


const b = bem("nav-bar");
const i = bem("icon");
const NavBar = () => {
    let container = document.createElement("nav");
    container.className = b();
    container.innerHTML =
        `
        <div class="${b("wrapper")}">
            <a>
                <div class="${b("logo")}">
                    <div class="${i(["logo"])}"></div>
                    <div class="${b("line")}"></div>
                    <div class="${i(["logo-text"])}"></div>
                </div>
            </a>
            <div class="${b("search")}">
                <input class="${b("search-input")}" placeholder="Пошук" type="text">
            </div>
            <div class="${b("navigation")}">
                <a><div class="${i(["explore", "margin"])}"></div></a>
                <a><div class="${i(["hart", "margin"])}"></div></a>
                <a><div class="${i(["profile", "margin"])}"></div></a>
                
            </div>
        </div>
                
        `;
    return container;
};
export default NavBar;