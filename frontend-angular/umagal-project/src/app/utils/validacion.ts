
export class Validacion {


  public static isValidEmail(correo: string) : boolean{

    if(correo != ""){
      if(correo.includes("@") && correo.includes(".")){
        return true;
      }
    }

    return false;
  }


}
