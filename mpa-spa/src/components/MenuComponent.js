import BaseComponent from "./BaseComponent.js";

export default class MenuComponent extends BaseComponent{

  constructor(){
    super("header")
  }

  template(){
    return `
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/#/home">${this.msg.brand}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/#/home">${this.msg.home.menuItem}</a>
            <a class="nav-link" href="/#/profil">${this.msg.profil.menuItem}</a>
            <a class="nav-link" href="/#/sign-in">${this.msg.signIn.menuItem}</a>
            <a class="nav-link" href="/#/about">${this.msg.about.menuItem}</a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

