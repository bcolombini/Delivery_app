export class ConnectionException extends Error{


    constructor(code:number,message:string = "internal error"){
        super()
    }

}