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

function generationTicket(info){
  const TiketTemplate = document.getElementById('ticket')
  const tiket = TiketTemplate.content.cloneNode(true)

  tiket.querySelector('.prenom').textContent = `Prènom : ${info.prenom}`
  tiket.querySelector('.nom').textContent = `Nom : ${info.nom}`

/*========= Generation du QR Code =================*/
  const qrDiv = tiket.querySelector('.qrCode')
  qrDiv.innerHTML = ""
  const qr = document.createElement('div')
  qrDiv.appendChild(qr)
  new QRCode(qr, {
    text: JSON.stringify(info),
    width: 128,
    height: 128
  })

  document.body.append(tiket)
}

/*============ Submit ======*/
const btn = document.getElementById('btn')
btn.addEventListener('click', (e) => {
  e.preventDefault()

  document.querySelector('.form').style.displaye = 'none'
  document.querySelector('.form').style.display = 'none'

  const data = getInfo()
  generationTicket(data)
})