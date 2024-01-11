const scriptURL = 'https://script.google.com/macros/s/AKfycbxjB0cNanQ6JboAmHaIRZY0n9mjdKR46IVDsvVwkpkA0od4VVIM-UQSde2MHCkQl09T/exec'

const form = document.forms['register-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(Response => alert("Thank you! Your form is sumiite sucessfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!, error.message'))
})