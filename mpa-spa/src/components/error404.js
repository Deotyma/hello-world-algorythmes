import{messages} from "../messages.js"
function renderError404(){
    const errorContent = `
  <h1>${messages.error.h1}</h1>
  <h2>${messages.error.h2}</h2>
`;
    const main = document.getElementById("main");
    main.innerHTML = errorContent;
};

export {renderError404};