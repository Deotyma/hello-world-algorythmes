import BaseComponent from "./BaseComponent.js";

export default class AboutComponent extends BaseComponent{

  constructor(){
    super("#main")
  }

  template(){
    return `
    <h1>${this.msg.about.h1}</h1>
    <h2>${this.msg.about.h2}</h2>
  `;
  }
}