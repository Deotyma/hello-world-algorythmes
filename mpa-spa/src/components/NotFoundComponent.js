import BaseComponent from "./BaseComponent.js"

export default class NotFoundComponent extends BaseComponent{

  constructor(){
    super("#main")
  }
  
  template(){
    return `
    <h1>${Messages.messages.error.h1}</h1>
    <h2>${Messages.messages.error.h2}</h2>
  `;
  }
}