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

function randomUser(){

    fetch("https://randomuser.me/api")
        .then(function rawData(res){
            return res.json();
        })

        .then(function jsonData(data){
            var user = data.results[0];
            var gender =  user.gender;
            var name = user.name.title + " " + user.name.first + " " + user.name.last;
            var image = user.picture.large;

            document.getElementById("user-name").innerText = name;
            document.getElementById("gender").innerText = gender;
            document.getElementById("image").src = image;
        })
}