import BaseComponent from "./BaseComponent.js"

export default class ProfilComponent extends BaseComponent{

  constructor(){
    super("#main")
  }
  
  template(){
    return `
    <h1>${this.msg.profil.h1}</h1>
    <form class="container>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input id="email" name="email" type="email" class="form-control">
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">${this.msg.profil.firstName}</label>
        <input id="firstName" name="firstName" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">${this.msg.profil.lastName}</label>
        <input id="lastName" name="lastName" type="text" class="form-control">
      </div>
     
      <div class="mb-3 form-check">
        <input name="treiner" id="treiner" type="checkbox" class="form-check-input">
        <label for="treiner"class="form-check-label">${this.msg.profil.treiner}</label>
      </div>
      <button type="submit" class="btn btn-primary">${this.msg.profil.button}</button>
    </form>
`;
  }
}



import Messages from "../Messages.js"
function renderProfil(){
    const profilContent = `
      <h1>${Messages.messages.profil.h1}</h1>
      <form class="container>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input id="email" name="email" type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="firstName" class="form-label">${Messages.messages.profil.firstName}</label>
          <input id="firstName" name="firstName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">${Messages.messages.profil.lastName}</label>
          <input id="lastName" name="lastName" type="text" class="form-control">
        </div>
       
        <div class="mb-3 form-check">
          <input name="treiner" id="treiner" type="checkbox" class="form-check-input">
          <label for="treiner"class="form-check-label">${Messages.messages.profil.treiner}</label>
        </div>
        <button type="submit" class="btn btn-primary">${Messages.messages.profil.button}</button>
      </form>
`;
    const main = document.getElementById("main");
    main.innerHTML = profilContent
};

export {renderProfil};