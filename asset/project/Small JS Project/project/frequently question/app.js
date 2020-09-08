let faqToggles=document.querySelectorAll(".faq-toggle");

for(let faqToogle of faqToggles){
    faqToogle.onclick=function(){
        this.parentElement.classList.toggle("active")
    }
}