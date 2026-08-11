let man = 1;

switch(man){
    case 7:
        console.log("sinal fraco!");
        break;
    case 8:
        console.log("quase lá! pegando sinal...");
        break;
    case 9:
    case 10:
        console.log("sinal pego! muito forte..!")
        break;
    case man > 10 :
        console.log('Sinal fora do comum, muito forte!')
        break;
        default :
        console.log("erro na busca de sinal.");         
}
