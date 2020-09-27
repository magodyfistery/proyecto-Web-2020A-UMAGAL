import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ArtworkUpService {
 
  public url:string;

  constructor(){
      this.url='';
  }

  /*
  metodo para hacer un peticion ajax para adjuntar un archivo
  pasamos la url, los posibles parametros, en este caso array de tipo string
  un array de archivos y el nomnre del archivo tipo string
  */
  makeFileRequest(url:string,params:Array<string>,files:Array<File>,name:string){
  /* esto retorna una promesa que tiene un resolve cuando se ha resuelto y 
  un reject cunado no se ha resuelto*/
  return new Promise(function(resolve,reject){
      //simulacion de formulario en un objeto
      var formData:any=new FormData();
      //xhr sinonimo de ajax que contiene un objeto de peticion asincrono de js
      var xhr = new XMLHttpRequest();
      //recorrer todos los archivos que lleguen, adjunta al formulario el nombre que llega
      //añade ese archivo con su nombre
      for(var i=0; i<files.length;i++){
          formData.append(name,files[i],files[i].name);
      }
      //cuando se produzca un cambio
      xhr.onreadystatechange=function(){
          //valores que funcionan por defecto en ejax
          if(xhr.readyState==4){//
              if(xhr.status==200){//si es exitoso la resolucion del la promesa
                  resolve(JSON.parse(xhr.response));
              }else{
                  reject(xhr.response);//caso contrario se rechaza
              }
          }
      }
      //realizamos la peticion ajax por el metodo post y true para que se haga la peticion
      xhr.open('POST',url,true);
      //envio el formulario o los datos
      xhr.send(formData);
  });
  }

}
