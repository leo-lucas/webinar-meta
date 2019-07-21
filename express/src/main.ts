import App from './App'
import router from './router'

const aplicação = new App()

aplicação.adicionarModuloRotas(router)

aplicação.start()
