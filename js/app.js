// let v6turbo = new Engine(prop1, prop2, prop3);
// let myCar = new Car('nissan','GT-r',2015,v6turbo)

// function Car(make, model, year, engine) {
//     make = make;
//     model = model;
//     year = year;
//     this.engine = v6turbo;
// }
// console.log(myCar)

// function Engine(horsePower, cylinderCount, isTurbo = false) {
//     this.horsePower = horsePower;
//     this.cylinderCount = cylinderCount;
//     this.isTurbo = isTurbo;
// }

// function Car(make, model, year, engine) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
// }
// let v6turbo = new Engine(350, 6, true);
// let myCar = new Car('nissan','gt-r',2015, v6turbo);

// console.log(myCar.engine)



//class ToDoList
    //id: string || number
    // name: string
  //ToDo - array
    //addToDo: fn
    // removeToDo: fn
    //clearCompleted: fn


// class TODO
    // id: string || number
    //description: string
    //completed: boolean



    function ToDoList(id, name, toDos = []) {
        this.id = id;
        this.name = name;
        this.toDos = toDos;
        this.addToDo = (toDo) => {
            this.toDos.push(toDo);
        }
        this.removeToDo = (id) => {
            this.toDos = this.toDos.filter(toDo => toDo.id != id);
        }
        this.clearCompleted = () => {
            this.toDos = this.toDos.filter((toDo) => toDo.id != id)
        }
    }

    function ToDo(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
let list = new ToDoList(1,'shopping');
list.addToDo(new ToDo(1, 'bananas'));
list.addToDo(new ToDo(2, 'eggs'));

console.log(list)

ToDoList.removeToDo(2)
console.log(list)