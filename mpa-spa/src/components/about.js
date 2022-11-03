import{messages} from "../messages.js"
function renderAbout(){
    const aboutContent = `
  <h1>${messages.about.h1}</h1>
  <h2>${messages.about.h2}</h2>
`;
    const main = document.getElementById("main");
    main.innerHTML = aboutContent;
};

export {renderAbout};