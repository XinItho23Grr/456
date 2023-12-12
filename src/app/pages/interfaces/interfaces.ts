
export interface IAnimalitos{
    id:Number;
    nombre:String;
    tipoMascota: String;
    raza: String;
}

export interface IAnimalito{
    nombre:String;
    tipoMascota: String;
    raza: String;
}
//get, put, delete
export interface Users{
    id:number;
    username: String;
    password: String;
    role: String;
    isactive:boolean;
}
//post
export interface User{
    username: String;
    password: String;
    role: String;
    isactive:boolean;
}


//post
export interface Palabra{
    username: String;
    texto:String;

}

//get, put, delete
export interface Palabras{
    id:number;
    username: String;
    texto:String;
}