import Messages from "../Messages.js"
import BaseComponent from "./BaseComponent.js";


export default class SignInComponent extends BaseComponent{

  constructor(){
    super("#main")
  }
  
  template(){
    return `
    <h1>${Messages.messages.signIn.h1}</h1>
    <p> This is a Sign un page</p>
`;
  }
}