/*=========== Recuperer Les Info du formulaire ================= */
function getInfo() {
  const formInfo = {}
  formInfo.prenom = document.getElementById('prenom').value
  formInfo.nom = document.getElementById('nom').value
  formInfo.numDeTel = document.getElementById('numeroDeTel').value
  formInfo.serieBac = document.getElementById('serieBac').value

  const fQ = document.querySelectorAll('.responses')
  fQ.forEach((question, index) => {
    const input = question.querySelector('input[type ="radio"]:checked')
    formInfo[input.name] = input ? input.value : null
  })
  return formInfo
}

/*========= Generation du QR Code =================*/
function generateQRCode(data) {
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: JSON.stringify(data),
    width: 128,
    height: 128
  });
}


/*============ Submit ======*/
const btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
  e.preventDefault()
  const info = getInfo()
  console.log(info)
  generateQRCode(info)
})