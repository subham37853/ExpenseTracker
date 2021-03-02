export class  Constant{
    static port : string = "8080";
    static host : string = "http://localhost:";
    static application : string = "/expenses/v1/";
    static baseUrl = Constant.host + Constant.port + Constant.application;
}