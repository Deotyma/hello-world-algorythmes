import {messages} from "../messages.js";

function renderMenu(){
    //trmplate/snippet
    const content = `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">MPA-SPA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#/home">${messages.home.menuItem}</a>
        <a class="nav-link" href="#/contact">${messages.contact.menuItem}</a>
        <a class="nav-link" href="#/sign-in">${messages.signIn.menuItem}</a>
        <a class="nav-link" href="#/about">${messages.about.menuItem}</a>
      </div>
    </div>
  </div>
</nav>
`;
    //target container
    const header = document.getElementById("header");
    header.innerHTML= content;
}
export {renderMenu}