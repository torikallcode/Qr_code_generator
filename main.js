let imgBox = document.getElementById("imgBox")
let qrlImg = document.getElementById("qrlImg")
let qrText = document.getElementById("qrText")
let btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    if(qrText.value.length > 0){
        qrlImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    }else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
})