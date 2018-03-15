var contact = {
    id:1,
    name: "Ori",
    dump: function(message) {
        console.log(this.id + ", " + this.name + ", " + message);
    }
};

function patch(obj) {
    var originalDump = obj.dump;

    obj.dump = function() {
        console.log("before");

        var retVal = originalDump.apply(this, arguments);

        console.log("after");

        return retVal;
    }
}

patch(contact);

contact.dump("XXX");

