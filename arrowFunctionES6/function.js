const sayHello = (name) => console.log("hello" + name);

const sayHello2 = sayHello;

sayHello2("john");

const MyFunction = true
  ? () => console.log("first Option")
  : () => console.log("second Option");

MyFunction();


const DEVELOPMENT = true;

const fetchDataReal = () => {

}

const fetchDataFake = () ({
    name: 'saurav',
    age: 26
});

const fakeData = DEVELOPMENT
    ? fetchDataFake
    : fetchDataReal;

