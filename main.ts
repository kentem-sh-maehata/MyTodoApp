// 'use strict'
{
  const add = document.getElementById("add")
  let remove: NodeListOf<Element>  = document.querySelectorAll("#remove")
  const purge = document.getElementById("purge")
  const textArea = document.getElementById("text")
  const ul = document.querySelector("ul")

  function stop() {return false}

  add?.addEventListener('click',()=>{
    let text:string
    if(textArea && "value" in textArea && textArea.value){
      text = textArea.value.toString()

      let li = document.createElement("li")
      let label = document.createElement("label")
      let input = document.createElement("input")
      input.type = "checkbox"
      label.appendChild(input)
      
      let span = document.createElement("span")
      span.textContent = text
      label.appendChild(span)

      let button = document.createElement("button")
      button.id = "remove"
      button.textContent = "X"
      li.appendChild(label)
      li.appendChild(button)
      li.id = Date.now().toString()

      ul?.appendChild(li)

      textArea.value = ""
    
    }
    setId()
  })
  
  function setId(){
    remove = document.querySelectorAll("#remove")

    remove.forEach(re=>{
      re.addEventListener('click',()=>{
        let id:number = -1
        
        if(re.parentNode && "id" in re.parentNode)
          id = Number(re.parentNode?.id)
        const liList = document.querySelectorAll("li")
        
        liList.forEach(li=>{
          if(Number(li.id) === id){
            li.remove()
          }
        })
        
      })
    })
  }
}