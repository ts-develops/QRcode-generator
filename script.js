const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault()

    clearUI()

    const url = document.getElementById('url').value

    if (url === '') {
        alert('please enter URL')
    }
    else {
        setTimeout(() => {
            generateQRCode(url)
        }, 1000)
    }
}

const generateQRCode = (url) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: 256,
        height: 256,
    })
}

const clearUI = () => {
    qr.innerHTML = ''
}

form.addEventListener('submit', onGenerateSubmit)
