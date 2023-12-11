// let send = document.getElementById("send")

// send.addEventListener("click", function sendmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "adiadsmark1@gmail.com",
//         Password : "Adi@2110",
//         To : 'scrapwallah@gmail.com',
//         From : document.getElementById('mail').value,
//         Subject : "New Enquiry",
//         Body : "name: " + document.getElementById('name').value + 
//         "<br> Phone no. : " + document.getElementById('phone').value +
//         "<br> Pincode: " + document.getElementById('code').value +
//         "<br> Email: " + document.getElementById('mail').value +
//         "<br> Room no. : " + document.getElementById('apt').value +
//         "<br> City: " + document.getElementById('city').value +
//         "<br> Address: " + document.getElementById('address').value +
//         "<br> Catagory: " + document.getElementById('ad').value
//     })
// })




let cli = document.getElementById("sel")

cli.addEventListener ("click" , ()=>{
    window.open("./form1.html")
})

let blo1 = document.getElementById("blog1")
blo1.addEventListener ("click" , ()=>{
    window.open("./readmore.html")
})


let blo2 = document.getElementById("blog2")

blo2.addEventListener ("click", ()=>{
    window.open("./readmore1.html")
})


let blo3 = document.getElementById("blog3")

blo3.addEventListener ("click", ()=>{
    window.open("./readmore2.html")
})

let wh = document.getElementById("whats")

wh.addEventListener("click", ()=>{
    window.open("https://web.whatsapp.com/")
})

let face = document.getElementById("face")

face.addEventListener("click", ()=>{
    window.open("https://www.facebook.com/")
})