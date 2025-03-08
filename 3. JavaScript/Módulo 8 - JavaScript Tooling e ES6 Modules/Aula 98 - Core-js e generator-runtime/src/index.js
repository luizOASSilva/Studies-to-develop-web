// bundles criados pelo babel por meio do transpilador, não suportam javascript assíncrono

// para isso, importa-se "core-js" e "regenerator-runtime" dos módulos do node_modules

import 'core-js/stable/';
import 'regenerator-runtime/runtime'; 

// resolvendo o problema de compatibilidade de JavaScript assíncrono com navegadores antigos com os imports

import './assets/CSS/index.css' 

import execute from './modules/promises';

execute(); // executando a promise