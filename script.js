const input = document.getElementById("inputbox");
const image= document.getElementById('image');
const imgbox= document.querySelector(".imgbox");
const downloadbtn = document.querySelector(".download")
function generateQR(){
  if (input.value.length > 0) {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
imgbox.classList.add("show");
downloadbtn.style.display = "block"
  }
  
  else{
    input.classList.add("error")
   
   setTimeout(function() {
     input.classList.remove("error");
     downloadbtn.style.display = "none"
   }, 1000);
    
    
  }
  
  
}


downloadbtn.addEventListener("click", async ()=>{
  let response= await fetch(image.src);
  let blob = await response.blob();
  let dllink = document.createElement("a");
  dllink.href = URL.createObjectURL(blob);
  dllink.download = "qr.jpg";
  dllink.click()
})