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
    div.classList.add(div.id)
    div.textContent = `${div.id}`

})

document.querySelectorAll('.subSHBtn').forEach(button => {
    document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
    button.addEventListener('click', () => {
        document.querySelectorAll('.innerCard').forEach(div => {
            div.classList.add('hide')
        })
        document.getElementById(button.dataset.btncntrl).classList.toggle('hide')
    })
})

document.getElementById('satsFont').innerText = ` <i class="fak fa-light"></i>`