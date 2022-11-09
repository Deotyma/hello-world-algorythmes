import HomeComponent from "./components/HomeComponent.js";
import ProfilComponent from "./components/ProfilComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import SignInComponent from "./components/SignInComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js"
import FooterComponent from "./components/FooterComponent.js"
import MenuComponent from "./components/MenuComponent.js"

export default class Router {

    static init(){
        window.addEventListener("hashchange", (event) => Router.route(event));
        Router.route();
        const menu = new MenuComponent();
        menu.render();
        const footer = new FooterComponent();
        footer.render();
    }
    static route(event) {
        const hash = window.location.hash;
        let component = null;

        if(hash == "#/home" || hash == ""){
           component= new HomeComponent();// instence of HomeComponent
        } else if(hash == "#/profil"){
            component = new ProfilComponent;
        } else if( hash == "#/about"){
           component = new AboutComponent;
        } else if (hash=="#/sign-in"){
           component = new SignInComponent;
        }else{
            component = new NotFoundComponent;
        };
        component.render();
    }
}
