// (function(d){
//     let tab = Array.prototype.slice.apply(d.querySelectorAll('.tabs_item'));
//     let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels_item'));

//     d.getElementById('tabs').addEventListener('click', e=>{
//         if(e.target.classList.contains('tabs_item')){
//             let i = tab.indexOf(e.target);
//             tab.map(tab => tab.classList.remove('activo'));
//             tab[i].classList.add('activo');
//             panels.map(panel => panel.classList.remove('activo_pn'));
//             panels[i].classList.add('activo_pn');
//         }
//     })
// })(document);

const d = document;

let dolar_of = d.getElementById('d_of');
let dolar_bl = d.getElementById('d_bl');
// let dolar_soj = d.getElementById('d_so');
let dolar_ccl = d.getElementById('d_ccl');
let dolar_tur = d.getElementById('d_tur');
let dolar_bol = d.getElementById('d_bol');
let bitcoin = d.getElementById('bit');

function Redondear(n){
    let resultado = n.replace('""',"")
    return parseFloat(resultado)
}

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then( res => res.json())
.then(data => {
    /*console.log(data[0]);*/
    // console.log(Redondear(data[0].casa.compra))
    dolar_of.innerHTML = `
    <h4> Oficial</h4>
    <p>Valor Compra: $${Redondear(data[7].casa.compra)}</p>
    <p>Valor Venta: $${Redondear(data[7].casa.venta)}</p>
    <i class="far fa-money-bill-alt"></i>
    `

    dolar_bl.innerHTML = `
    <h4> Blue</h4>
    <p>Valor Compra: $${Redondear(data[1].casa.compra)}</p>
    <p>Valor Venta: $${Redondear(data[1].casa.venta)}</p>
    <i class="far fa-money-bill-alt"></i>
    `

    // dolar_soj.innerHTML = `
    // <h4>Dólar Soja</h4>
    // <p>Valor Compra: $${data[2].casa.compra}</p>
    // <p>Valor Venta: $${data[2].casa.venta}</p>
    // <i class="fas fa-seedling"></i>
    // `

    dolar_ccl.innerHTML = `
    <h4> CCL</h4>
    <p>Valor Compra: $${Redondear(data[3].casa.compra)}</p>
    <p>Valor Venta: $${Redondear(data[3].casa.venta)}</p>
    <i class="fas fa-chart-line"></i>
    `

    dolar_tur.innerHTML = `
    <h4> Turista</h4>
    <p>Valor Compra: S/C</p>
    <p>Valor Venta: $${Redondear(data[6].casa.venta)}</p>
    <i class="fas fa-umbrella-beach"></i>
    `

    dolar_bol.innerHTML = `
    <h4> Bolsa</h4>
    <p>Valor Compra: $${Redondear(data[4].casa.compra)}</p>
    <p>Valor Venta: $${Redondear(data[4].casa.venta)}</p>
    <img src="./bolsa-de-dinero.svg" alt="bolsa-de-dinero">
    `
})
.catch()