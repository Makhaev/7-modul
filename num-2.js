
// 2 задание
function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Adam", 
    ownCity: "Grozny",
    age: 24,
    course: "Frontend"
  };

  console.log(showProps(student1, "name"));  