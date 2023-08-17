// function calculateIMC(){
//     const weight = document.getElementById("weight").value;
//     const height = document.getElementById("height").value;

//     const bmi= (weight / (height * height)).toFixed(2);

//     if(!isNaN(bmi)){
//         const  value =document.getElementById("value");
//         let description ="";

//         value.classList.add("attention");

//         document.getElementById("infos").classList.remove("hidden");

//         if (bmi < 18.5){
//             description ="Cuidado! Você está abaixo do peso"
//         }
//         else if(bmi >= 18.5 && bmi < 25){
//             description ="Parabéns você está no peso ideal";
//             value.classList.remove("attention");
//             value.classList.add("normal");

//         }
//         else if (bmi >=25 && bmi < 30){
//             description= "Cuidado! Você está acima do peso"
//         } else {
//             description= "Cuidado! Você está bem pasadinho!";
//         }
//         document.getElementById("description").textContent = description;
//         document.getElementById("value").textContent = bmi;
//     }
// }

// let personlSimple = "John Doe";

// const personObject = {
//     firstName: "John",
//     lastName : "Doe",
//     age:50,
//     eyeColor : "blue"
// };

// console.log(`Olà ${personObject+first+Name} ${personObject+lastName}`);
// console.log(personlSimple);
// console.log(personObject);


// function info(){
//     let firstname = document.getElementById("firstname").value;
//     let lastname = document.getElementById("lastname").value;
//     let age= document.getElementById ("age").value;
//     let eyecolor = document.getElementById("eyecolor").value;

    
    // const personObject = {
    //      firstname,
    //      lastname,
    //      age,
    //      eyecolor

//     };
    
//     if(age < 1){
//         alert("essa idade não é valida ")
//         result = document.getElementById("result").innerHTML = `Vc è muito novo`
//         return;

//     }


// result = document.getElementById("result").innerHTML = `Seu nome é ${personObject.firstname} ${personObject.lastname} A cor dos seus olhos é ${personObject.eyecolor} A sua idade é ${personObject.age} anos.`;
// }

// let personlSimple = "John doe";

// const personObject = new Object();

// personObject.firstname = "john";
// personObject.lastname = "Doe";
// personObject.age = 50;
// personObject.eyecolor = "blue";

// console.log(personlSimple);
// console.log(personObject);


// let personlSimple = "John doe";

// const personObject = {
//     firstname: "John",
//     lastname:"Doe",
//     age : 50,
//     eyecolor :"blue"
// };

// personObject.age = 10;

// console.log(personlSimple);
// console.log(personObject);


// class User {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     introduce(){
//         console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
//     }

// }

// const user1 = new User ('João, 30');
// user1.introduce();

// class PIzza{
//     constructor(base, sauce, toppings, cheese){
//         this.base = base;
//         this.sauce = sauce;
//         this.toppings = toppings;
//         this.cheese = cheese;
//     }
//     getDescription(){
//         return `A delicious pizza with ${this.base} base, ${this.sauce} sauce,
//         ${this.toppings} toppings, and lots of cheese`
//     }
//     getTimerBase(){
//         if(this.base == 'traditional'){
//             return 10; 
//         }else if(this.base == 'integral'){
//             return 15;
//         } else{
//             return'This base does not exist!';
//         }
//     }

//     getTimerSauce(){
//         if(this.sauce == 'tomato'){
//             return 10;
//         }else if(this.sauce == 'pezzo'){
//             return 12;
//         }
//         else {
//           return'This sauce does not exist!';
//         }
//     }

//     getTimerCheese(){
//         if(this.cheese == 'mozzarella'){
//             return 15;
//         }
//         else if(this.cheese == 'cheddar'){
//             return 15;
//         }
//         else{
//             return'This cheese does not exist!'
//         }
//     }
//     getTimerToppings(){
//         if(this.toppings == 'pepperoni'){
//             return 20;
//         }
//         else if(this.toppings == 'calabresa'){
//            return 20;
//         }
//         else{
//             return'This toppings does not exist!'
//         }
//     }
// }
// const myPizza = new PIzza('traditional', 'tomato', 'pepperoni', 'mozzarella');
// console.log(myPizza.getDescription());


// let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getTimerCheese() + myPizza.getTimerToppings()
// console.log( 'Time to cook the pizza =' + timeTotalPizza);

// class Calculator {
//     add (a, b){
//         return a+b;
//     }
//     multiply(a, b){
//         return a * b;
//     }
//     subtract(a, b){
//        return a - b;
//     }

// }

// const calculator = new Calculator();

// const sumResult = calculator.add(5,3);
// console.log("Sum:", sumResult);

// const multiplicationResult = calculator.multiply(4,2);
// console.log("Multiplication:", multiplicationResult);

// const subtractionResult = calculator.subtract(10,4);
// console.log("Subtraction:", subtractionResult);


// class Wicth{
//     constructor(name, patron, house, colorEyes){
//         this.name = name;
//         this.patron = patron;
//         this.house = house;
//         this.colorEyes = colorEyes;

//     }
//     getName(){
//         return`O nome do bruxo(a) é:${this.name}`;
//     }
//     getHouse(){
//         return`Ele(a) está na casa ${this.house}`
//     }
//     getPatron(){
//         return`See patrono é : ${this.patron}`
//     }
// }

// const wicth1 = new Wicth('Harry Potter' , 'Deer', 'Grynffindor', 'green');

// console.log(wicth1.getName());

// class TypeWitch extends Wicth {
//     constructor(name, patron, house, colorEyes, typeWitch){
//         super(name, patron, house, colorEyes)
//         this.typeWitch = typeWitch;
//     }
//     getTypeWitch(){
//         if(this.typeWitch === 'p'){
//             return "Este bruxo é sangue pura ";
//         }
//         else if (this.typeWitch === 'M'){
//             return"Este bruxo é Mestiço";

//         } else{
//             return"Esse é um trouxa";
//         }
//     }
// }

// const harry = new TypeWitch('Harry Potter', 'Cervo', 'Grifinória', 'verde/azul?', 'M')
// console.log(harry.getTypeWitch());

// class CameraSecreta {
//     constructor(name, pwd){
//         this.name = name;
//         let _pwd = pwd; // atributo privado

//        // Metodo privado, mas nao no js
//         this.verifyPwd = (pwdInput) =>{
//             return pwdInput == _pwd; // True or False
     
//         }
//         // Metedo privado, mas nao no js
//         this.accessChamber = () => {
//             let pwdInput = prompt("Digite a senha");
//             if(this.verifyPwd(pwdInput)){
//                 console.log(`Bem-Vindo a Camera Secreta ${this.name}`);
//             } else{
//                 console.log("Acesso negado trouxa!");
//             }
//         };
//     }
    
//    showName(){
//     console.log(`Nome do bruxo : ${this.name}`);
//    }
// }

// const myAccess1 = new CameraSecreta ('Harry Potter', 'senha123')

// myAccess1.showName();

// myAccess1.name = 'HP';
// myAccess1.pwd ='123'

// myAccess1.accessChamber();





