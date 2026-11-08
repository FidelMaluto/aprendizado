let signal = 11;

// Estruta condicional (usando o Switch - case).
switch (signal) {
  case 7:
    console.log("sinal fraco!");
    break;
  case 8:
    console.log("quase lá! pegando sinal...");
    break;
  case 9:
  case 10:
    console.log("sinal pego! muito forte..!");
    break;
  // tentando adicionar um novo case, com sinal de maior... sem suceesso
  case signal > 10:
    console.log("Sinal fora do comum, muito forte!");
    break;
  default:
    console.log("erro na busca de sinal.");
}
