const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled=true

btnOpenElement.addEventListener('click',()=>{
    btnCloseElement.disabled=true
    btnCloseElement.disabled=false

    const coverElement = document.querySelector('.cover')
    coverElement.classList.add('open-cover')

    setTimeout(()=>{
        
        coverElement.style.zIndex= -1
        const paperElement = document.querySelector('.paper')
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')
    
    }, 500)

    

})
btnCloseElement.addEventListener('click',()=>{
    btnOpenElement.disabled=false
    btnOpenElement.disabled=true

    const coverElement = document.querySelector('.cover')
const paperElement = document.querySelector('.paper')
paperElement.classList.remove('open-paper')
paperElement.classList.add('close-paper')
setTimeout(()=>{ 
    coverElement.style.zIndex= 0
    coverElement.classList.remove('open-cover')

},500)
    
   
})