import{messages} from "../messages.js"
function renderContact(){
    const contactContent = `
  <h1>${messages.contact.h1}</h1>
  <p>This is a Contact page</p>
`;
    const main = document.getElementById("main");
    main.innerHTML = contactContent
};

export {renderContact};