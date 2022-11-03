import{messages} from "../messages.js"
function renderProfil(){
    const profilContent = `
      <h1>${messages.profil.h1}</h1>
      <form class="container>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input id="email" name="email" type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="firstName" class="form-label">${messages.profil.firstName}</label>
          <input id="firstName" name="firstName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">${messages.profil.lastName}</label>
          <input id="lastName" name="lastName" type="text" class="form-control">
        </div>
       
        <div class="mb-3 form-check">
          <input name="treiner" id="treiner" type="checkbox" class="form-check-input">
          <label for="treiner"class="form-check-label">${messages.profil.treiner}</label>
        </div>
        <button type="submit" class="btn btn-primary">${messages.profil.button}</button>
      </form>
`;
    const main = document.getElementById("main");
    main.innerHTML = profilContent
};

export {renderProfil};