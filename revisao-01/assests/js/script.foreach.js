// const companies =["Apple","Google","Facebook"];

// companies.forEach(company => {
//     console.log(`Hey, ${company}!`);
// });

// const names = ["Whinds", "Freeway", "Teste", "Maria"];

// names.forEach((name) => {
//     console.log(`Hi, ${name}!`);
// });

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(numbers);

// numbers.forEach((number, index) => {
//    if(number % 2 == 0){
//     console.log(number + ` Esse número está na posição [${index}]`);
//    }

// });



  class Car  {
    constructor(brand,model){
        this.brand =  brand;
        this.model = model
    }
  }

  class CarList{
    constructor(){
        this.cars =[]
    }
    addCar(param){
        this.cars.push(param)
  }
  
}

const carList = new CarList();

   function carmodel() {
     let brand = document.getElementById("brand").value;
     let model = document.getElementById("model").value;

     const  car  = new Car(brand,model);
     carList.addCar(car)

     document.getElementById("marca").value ="";
     document.getElementById("modelo").value ="";

     carList.cars.forEach(car => {
        console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
     });

}
//   const cars =[
//       {
//           marca:"Ford",
//           modelo:"Focus",
//       },
//       {
//           marca:"BMW",
//           modelo:"BMW 24",
//       },
//       {
//           marca:"Fiat",
//           modelo:"Palio",
//       },
//       {
//           marca:"Audi",
//           modelo:"A3"
//       },
//   ];


// cars.forEach((car) => {
//      console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
//  });


