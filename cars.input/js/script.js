"use strict";

function Car(id, istehsalci, marka, ili) {
    this.id = id;
    this.manufacturer = istehsalci;
    this.model = marka;
    this.relase = ili
}

let CarArray = [];

let idCounter = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

// localStorage.setItem('Car', JSON.stringify(Car));
// var retrievedObject = JSON.parse(localStorage.getItem('Car'));
// console.log('retrievedObject: ', retrievedObject);

function validateForm() {
    let inputManufacture = document.forms["myForm"]["manufacture"].value;
    let carModel = document.forms["myForm"]["carModel"].value;
    let carAge = document.forms["myForm"]["relaseYear"].value;



    if (inputManufacture == "") {

        alert("manufacture name is empty")
        return false;
    }

    if (!isNaN(inputManufacture)) {
        alert("please include correct manufacture")
        return false;
    }

    if (carModel == "") {
        alert("please include correct model")
        return false;
    }

    if (carAge == "" || isNaN(carAge)) {

        alert("please correct age ")
        return false;

    }

    let CreadetCar = new Car(idCounter(), document.forms["myForm"]["manufacture"].value, document.forms["myForm"]["carModel"].value, document.forms["myForm"]["relaseYear"].value);
    CarArray.push(CreadetCar)
    // console.log(CarArray)
    let t = "";
    for (let i = 0; i < CarArray.length; i++) {
        t = CarArray[i].id + ". " + CreadetCar.manufacturer + "  " + CreadetCar.model + "  -  " + CreadetCar.relase;

    }
    let ulElement = document.getElementById('myUl');
    let newLiElement = document.createElement('li');
    newLiElement.classList.add('list-group-item');
    let newIcon = document.createElement("i");
    let mySpan = document.createElement("span");
    mySpan.classList.add('float-left')
    mySpan.appendChild(document.createTextNode(t));
    newIcon.classList.add('fas', 'fa-trash-alt', 'float-right','myIcon');
    newLiElement.appendChild(mySpan);
    newLiElement.appendChild(newIcon);

    ulElement.appendChild(newLiElement);

    // console.log(newLiElement.textContent)
    newLiElement.addEventListener('dblclick', function () {
        document.forms["myForm"]["manufacture"].value = CreadetCar.manufacturer;
        document.forms["myForm"]["carModel"].value = CreadetCar.model;
        document.forms["myForm"]["relaseYear"].value = CreadetCar.relase;


        let myBtn = document.getElementById('myButton');
        myBtn.addEventListener("click", function () {

            if (CreadetCar.manufacturer != document.forms["myForm"]["manufacture"].value) {
                CreadetCar.manufacturer = document.forms["myForm"]["manufacture"].value;

                console.log(CreadetCar.manufacturer)
                var myList = document.getElementById('myUl');
                var myListItem = myList.children;
                myListItem[CreadetCar.id - 1].removeChild(mySpan);
                let b = "";
                for (let i = 0; i < CarArray.length; i++) {
                    b = CreadetCar.id + ". " + document.forms["myForm"]["manufacture"].value + "  " + document.forms["myForm"]["carModel"].value+ "  -  " + document.forms["myForm"]["relaseYear"].value;
                }
                let myNewP = document.createElement("p");
                myNewP.classList.add("float-left", "p-0", "m-0");
                myNewP.appendChild(document.createTextNode(b));
                myListItem[CreadetCar.id - 1].appendChild(myNewP);


                document.forms["myForm"]["manufacture"].value = "";
                document.forms["myForm"]["carModel"].value = "";
                document.forms["myForm"]["relaseYear"].value = "";
            }

        })



    })

    newIcon.addEventListener("click", function () {
        newLiElement.remove(newLiElement);
    })
    document.forms["myForm"]["manufacture"].value = "";
    document.forms["myForm"]["carModel"].value = "";
    document.forms["myForm"]["relaseYear"].value = "";


   
    return false;
    
}
