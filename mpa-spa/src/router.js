import { renderHome } from "./components/home.js";
import { renderContact } from "./components/contact.js";
import { renderAbout } from "./components/about.js";
import { renderSignIn } from "./components/signIn.js";
import { renderError404 } from "./components/error404.js";

const routes = ["", "#/home", "#/about", "#/sign-in", "#/contact"]

window.addEventListener("hashchange", (event) => route(event));

function route() {
    const hash = window.location.hash;
    if(hash == "#/home" || hash == ""){
        renderHome();
    } else if(hash == "#/contact"){
        renderContact();
    } else if( hash == "#/about"){
        renderAbout();
    } else if (hash=="#/sign-in"){
        renderSignIn();
    }else{
        renderError404();
    };
}
export {routes, route};