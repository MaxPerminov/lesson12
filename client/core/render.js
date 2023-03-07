export function render(obj){
  
    const element = document.createElement(obj.tagName)
    element.className = obj.className
    element.insertAdjacentHTML("beforeend", obj.children)
    element.addEventListener("click", obj.event)
  
    for(const key in obj.atrs){
      const value = obj.atrs[key]
      element.setAttribute(key, value)
    
    return element
  }


}
