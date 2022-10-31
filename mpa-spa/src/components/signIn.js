import{messages} from "../messages.js"
function renderSignIn(){
    const signInContent = `
  <h1>${messages.signIn.h1}</h1>
  <p>This is a Sign In page</p>
`;
    const main = document.getElementById("main");
    main.innerHTML = signInContent
};

export {renderSignIn};