import morgan from 'morgan'
import express, { Application, Router } from 'express'
import cors from 'cors'

export default class App {
  private express: Application;

  public constructor () {
    this.express = express()
    this.carregarModulos()
  }

  private carregarModulos (): void {
    this.express.use(morgan('dev'))
    this.express.use(cors())
  }

  public adicionarModuloRotas (router: Router):void {
    this.express.use(router)
  }

  public start (): void {
    this.express.listen(5000, ():void => {
      console.log('Servidor rodando')
      console.log('http://localhost:5000/')
    })
  }
}
