import{messages} from "../messages.js"
function renderSignIn(){
    const signInContent = `
  <h1>${messages.signIn.h1}</h1>
`;
    const main = document.getElementById("main");
    main.innerHTML = signInContent
};

export {renderSignIn};