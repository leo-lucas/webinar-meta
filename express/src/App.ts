import morgan from 'morgan'
import express, { Application } from 'express'
import cors from 'cors'

export default class App {
  private express: Application;

  public constructor () {
    this.express = express()
    this.applyMiddlewares()
  }

  private applyMiddlewares (): void {
    this.express.use(morgan('dev'))
    this.express.use(cors())
  }
}
