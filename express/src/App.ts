import express, { Application } from 'express';
import morgan from "morgan"
import cors from "cors"

export default class App {
    private express: Application;
    constructor(){
        this.express = express()
        this.applayMiddlewares()
    }

    private applayMiddlewares():void{
           this.express.use(morgan("dev"))

        this.express.use(cors())
    }
}