#JS

```
npm init
```

```
npm install -g typescript
tsc --init
```

```
yarn add nodemon
yarn add typescript
yarn add ts-node
```

```
"scripts": {
    "start": "nodemon --watch \"src/\" --exec \"clear && tsc src/**.ts && node src/**.js\" -e ts",
    "build": "nodemon --watch \"src/\" --exec \"clear && tsc src/**.ts && node src/**.js\" -e ts"

},

```
