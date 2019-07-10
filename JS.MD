#JS

```
npm init
```

```
tsc --init
```

```
yarn add nodemon
yarn add typescript
```

Criar pasta ./src 
Criar arquivo ./main.ts

## Rodando e transpilando
 Adicionar ao start ao script do package.json:
```
"scripts": {
    "start": "nodemon --watch \"src/\" --exec \"tsc src/**.ts && node src/**.js\" -e ts"
},

```
