const obj = {
    id: 1,
    name: "Ori",
    email: "XXX",
    address: "YYY",
};

g(obj);

// obj.email = "didhiudh";

function g(obj){
    obj.email = "XXX";
    obj.addrss = "YYY";
}

function Tag(){

}

var t = new Tag();
t.obj = obj;