(function(d){
    let tab = Array.prototype.slice.apply(d.querySelectorAll('.tabs_item'));
    let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels_item'));

    d.getElementById('tabs').addEventListener('click', e=>{
        if(e.target.classList.contains('tabs_item')){
            let i = tab.indexOf(e.target);
            tab.map(tab => tab.classList.remove('activo'));
            tab[i].classList.add('activo');
            panels.map(panel => panel.classList.remove('activo_pn'));
            panels[i].classList.add('activo_pn');
        }
    })
})(document);