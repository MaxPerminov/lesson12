export class Component {
  constructor(options){
    const {tagName, className, children, event, ...atrs} = options

    this.tagName = tagName
    this.className = className
    this.children = children
    this.event = event
    this.atrs = atrs
  }

  printOptionsToConsole () {
    console.log(this.tagName)
    console.log(this.className)
    console.log(this.children)
    console.log(this.event)
    console.log(this.atrs)
  }


}