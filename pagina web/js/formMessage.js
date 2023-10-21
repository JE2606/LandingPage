const $form = document.querySelector('#form');
const $formFooter = document.querySelector('#formFooter');
$form.addEventListener('submit', handleSubmit);
$formFooter.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        Swal.fire({
            title: '¡Su Información se Ha Enviado!',
            icon: 'success',
            confirmButtonText: 'Entendido',
            footer: '<span>Mensaje Enviado con Éxito</span>',
            padding: '1em',
            backdrop: true,
            timer: 5000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            stopKeydownPropagation: false,
        })
        this.reset();
    }
}