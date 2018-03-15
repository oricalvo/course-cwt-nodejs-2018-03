function Contact(name, email){
    this.name = name;
    this.email = email;

    console.log(this.name);
}

function Contact(name, email){
    var obj = {
        name,
        email,
        print,
    };

    function print(){
        console.log(obj.name);
    }

    return obj;
}

function g() {
    var x = Contact("Ori", "xxx");
    x.print();
    //console.log(x.name);
}

var map = {};
