import BaseComponent from "./BaseComponent.js"

export default class HomeComponent extends BaseComponent{

  constructor(){
    super("#main")
  }

  template(){
    return `
  <h1>${this.msg.home.h1}</h1>
  <h2>${this.msg.home.h2}</h2>
  <p> This is a home page</p>
`;
  }

}

