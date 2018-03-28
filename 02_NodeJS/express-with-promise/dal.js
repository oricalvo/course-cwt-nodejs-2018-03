async function getAllContacts() {
    // throw new Error("Database not available");
    return [
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ];
}

exports.getAllContacts = getAllContacts;
