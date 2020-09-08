let searchBox={}

searchBox.input=document.querySelector(".search-input")
searchBox.clear=document.querySelector(".search-box .search-input .fa-times")

let suggestsBox=document.querySelector(".suggests-input")
let searchInput=searchBox.input.querySelector("input")


window.onclick = function(event) {
    if (event.target.matches('.search-input>input')&&searchInput.value==="") {
        suggestsBox.style.display="block"
        searchBox.input.parentElement.style.borderRadius="20px 20px 0px 0px"
        searchBox.input.parentElement.style.boxShadow="0 -3px 3px rgba(0, 0, 0, 0.05),3px 0 3px rgba(0, 0, 0, 0.05),-3px 0 3px rgba(0, 0, 0, 0.05)"
    }
    else{
        searchBox.normalState()
    }
  }


let suggests=document.querySelectorAll(".suggest")
for(let suggest of suggests){
    suggest.onclick=function(){
        
        let searchValue=this.querySelector("span").innerText
        searchInput.value=searchValue;
        searchBox.search(searchValue);
    }
}

searchInput.addEventListener("keydown", ({key}) => {
    searchBox.normalState()
    if (key === "Enter") {
        event.preventDefault();
        // Do more work
        searchBox.search(searchInput.value)
    }
})



searchBox.search=function(searchValue){
    let resultTitle=document.querySelector(".search-result>h1")
    resultTitle.innerHTML=`Top result for <span>"${searchValue}"</span> is `
    searchBox.normalState()
}


searchBox.clear.onclick=function(){
    searchInput.value=""
}

searchBox.normalState=function(){
    suggestsBox.style.display="none"
    searchBox.input.parentElement.style.borderRadius="20px"
    searchBox.input.parentElement.style.boxShadow="0 0 2px rgba(0, 0, 0, 0.2)"
}
