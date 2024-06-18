const goTopBtn=document.querySelector('.go-top-btn')

window.addEventListener('scroll',checkHeight)

function checkHeight(){
    if(window.scrollY>500){
        goTopBtn.style.display="flex"
    }
    else{
        goTopBtn.style.display="none"
    }
}

goTopBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//contact form to excel sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
const form = document.forms['submitToGoogleSheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


function updateActiveSection() {
  var scrollPosition = $(window).scrollTop();
}
