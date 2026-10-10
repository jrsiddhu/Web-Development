var user=[
    {
        "name" : "Jhon Doe",
        "gender" : "Male",
        "image" : "john________.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "jane.png"
    }
]
var index=0;

function toggle(){
    if(index == 0){
        index = 1;
    }
    else{
        index = 0;
    }
    document.getElementById("user-name").innerText = user[index].name;
    document.getElementById("gender").innerText = user[index].gender;
    document.getElementById("image").src = user[index].image
}