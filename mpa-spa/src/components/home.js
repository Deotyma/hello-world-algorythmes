import{messages} from "../messages.js"
function renderHome(){
    const homeContent = `
  <h1>${messages.home.h1}</h1>
  <p>This is a home page</p>
  <h2>${messages.home.h2}</h2>
`;
    const main = document.getElementById("main");
    main.innerHTML = homeContent;
};

export {renderHome};
