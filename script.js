document.querySelectorAll('.showHideBtn').forEach(button => {
    document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
    button.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(div => {
            div.classList.add('hide')
        })
        document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
        
    })
    
})

const colorDivs = document.querySelectorAll('.keyColor')
colorDivs.forEach(div => {
    console.log(div)
    div.classList.add(div.id)
    div.textContent = `${div.id}`

})

const subSHBtns = document.querySelectorAll('.subSHBtn')
subSHBtns.forEach(button => {
    document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
    button.addEventListener('click', () => {
        document.querySelectorAll('.innerCard').forEach(div => {
            div.classList.add('hide')
        })
        document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
    })
})