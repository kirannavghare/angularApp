
personInfo.color[1]
personInfo.friends[0].name

let personInfo=
{
    "fname": "kiran",
    "lname": "Navghare",
    "mobile": 9307579040,
    "address": "Pune",
    "isPresent": true,
    "color": [
        "green",
        "red",
        "blue"
    ],
    "friends": [
        {
            "name": "Abc",
            "Mno": 1111
        },
        {
            "name": "xyz",
            "Mno": 2222
        }
    ]
}

function getName()
{
    return "kiran";
}
function Address()
{
    return {"name":"Pune","PIN":411037 }
}
let myName=getName();
let add=Address();
console.log(personInfo.fname)