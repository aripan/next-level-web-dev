// install nvm => node version manager

// install typescript

// initialize package.json file with npm init -y

// install nodemon => to watch the changes
// npm install --save-dev nodemon # or using yarn: yarn add nodemon -D

const course: string = 'next level we development'
console.log("🚀 ~ file: installation_2_1.ts:6 ~ course:", course)

// tsc installation_2_1.ts => compiles the ts file to js file

//** It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts **//
// https://www.npmjs.com/package/ts-node-dev
// npm i --save-dev ts-node-dev
// script: ts-node-dev --respawn --transpile-only filename
// script(short alias): tsnd --respawn filename

// tsc --init => to create the tsconfig.json


// tsconfig.json => rootDir: specify where all my source codes are
// tsconfig.json => outDir: specify where all build codes will go

// create .gitignore and ignore the files you want such as node_modules
