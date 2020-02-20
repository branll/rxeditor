import {RXTextfieldable} from "./textfieldable"
import {addonHeadingPseudo} from "../schemas/heading/pseudo-heading"
import {addonHeadingDisplay} from "../schemas/heading/display"
import {addonTypyLead} from "../schemas/content/lead"
import {addonGeneralTextfield} from "../schemas/general/textfield"

export class HTMLLi extends RXTextfieldable{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlLi'
    this.toolboxInfo.elementName = "li"
    this.className = 'HTMLLi'

    //this.editMarginStyle.padding = '20px;'
    //this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Paragraph Options'
    //}
    this.$meta.tag = 'li'
    this.label = "li"
    this.acceptedChildren=''
    this.exceptChildren = ['BSCol']
  }

  make(){
    return new HTMLLi
  }

}
