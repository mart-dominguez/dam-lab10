/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        
var TareasController = function(ts){
    this.tareaService = ts;
}

TareasController.prototype.listar = function(nodoDomLista) {
    $("#"+nodoDomLista).empty();
$.each(this.tareaService.listaTareas, function(indice,elemento){
    var esFinalizada= elemento.finalizada? "checked=\"\"":"";
    $("#"+nodoDomLista).append(
            '<li class="mdl-list__item mdl-list__item--three-line">'+
                '<span class="mdl-list__item-primary-content">'+
                    '<i class="material-icons  mdl-list__item-avatar">person</i>'+
                        '<span>'+elemento.responsable+'</span>'+
                         '<span class="mdl-list__item-text-body">'+
                         elemento.titulo+
                         '</span>'+
                '</span>'+
                '<span class="mdl-list__item-secondary-content">'+
                    '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">'+
                       '<input type="checkbox" id="checkbox-1" class="mdl-checkbox__input" '+esFinalizada+'>'+
                       '<span class="mdl-checkbox__label">Checkbox</span>'+
                    '</label>'    +
                '</span>'+
                '</li>'
           );
});
};
TareasController.prototype.add = function(titulo,responsable) {
    this.tareaService.agregar(titulo,responsable,0);
};
