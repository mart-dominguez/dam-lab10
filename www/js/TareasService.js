/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Tarea = function(titulo, responsable, prioridad){
    this.titulo=titulo;
    this.responsable=responsable;
    this.priordad=prioridad;
    this.finalizada = false;
}
Tarea.prototype.finalizar=function(){
    this.finalizada=true;
}
    
var TareasService = function(){
    this.listaTareas = [];
}

TareasService.prototype.agregar = function(t,r) {
    this.listaTareas.push(new Tarea(t,r,0));
};
TareasService.prototype.borrar = function(unaTarea) {
    
};
