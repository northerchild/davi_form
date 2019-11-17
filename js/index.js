//variables
let check = document.querySelector('#cbox1');
const btn_cotizar = document.getElementById('btn_cotizar');
btn_cotizar.disabled = true;
console.log(btn_cotizar);

//EventListener
check.addEventListener('click', () => {
    check.checked = false;
    if (check.checked = true) {
        btn_cotizar.disabled = false;
        //Enviar al modal de confirmación
        btn_cotizar.addEventListener('click', () => {
            Swal.fire({
                html: `Para continuar con el proceso, debemos <b>consultar</b> su 
                              <b>información financiera</b> de otros <br> <br> <hr>
                              <div class="form-group">
                                  <label><input type="checkbox" id="cbox2" value="second_checkbox">Acepto las autorizaciones <b><a href="#">aquí</a></b> descritas con 
                                  relación a la consulta y reporte de mi</label>
                              </div>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ed1b24',
                cancelButtonColor: '#737373',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Aceptar!'
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                        title: 'Marque las siguientes opciones para continuar con el proceso',
                        html: `<form>
                        <div class="form-group">
                            <label><input type="checkbox" id="cbox1" value="first_checkbox"> Manifiesto que he leido y acepto firmar</label>
                        </div>
                        <div class="form-group">
                            <label><input type="checkbox" id="cbox1" value="first_checkbox"> Manifiesto que he leido y acepto el contenido</label>
                        </div>
                        <div class="form-group">
                            <p>Autorizo a Davivienda a debitar automáticamente la cuota de mi crédito de la cuenta<p>
                            <input class="form-control" type="number" name="placa" placeholder="Cta Ahorros ****7962">
                        </div>
                    </form>
                    <div class="form-group text-center">
                    <p>Si está de acuerdo con los documentos, <br> 
                    seleccione <b>Continuar</b><p>
                    </div>`,
                        showCancelButton: false,
                        confirmButtonColor: '#ed1b24',
                        confirmButtonText: 'Continuar'
                    }).then((result) => {
                        if (result.value) {
                            Swal.fire(
                                'Ya puede acercarse a la oficina',
                                `<div class="form-group text-center">
                                <p>Tiene un plazo máximo de <b>15 días calendario</b> para recogerlos<p>
                                <p>Le entregamos un cheque por cada una de las obligaciones compradas a nombre de la</p>
                                </div>
                                <div class="form-group text-left bg_grey">
                                <p><b>Número de crédito:</b><p>
                                <p>54610216510531510</p>
                                </div>`,
                                'success'
                            )
                        }
                    })

                }
            })
        });
    }
})