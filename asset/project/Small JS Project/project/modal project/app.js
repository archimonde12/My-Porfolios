const ModalContainer=document.querySelector(".modal-container")

function toggleModal(){
  if(isIncludes("show-modal",ModalContainer.classList)){
    ModalContainer.querySelector(".modal").classList.remove("scale")
    ModalContainer.classList.remove("show-modal");
  } else {
    ModalContainer.classList.add("show-modal");
    ModalContainer.querySelector(".modal").classList.add("scale")
  }
}

function isIncludes(value,array){
  for(let i=0;i<array.length;i++){
    if(array[i]===value) return true
  }
  return false
}