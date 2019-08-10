var userList=[]; 
var albumList=[];
var photoList=[];
var albums=[];


function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) =>{
        data.forEach(function(user){
            var name = user.name;
            var id = user.id;
            userList.push({name:id});
        });
        console.log(userList);
    })
    .catch((err)=>console.log(err))
} 
  
function getAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then((data) =>{
        data.forEach(function(album){
            var userId = album.userId;
            var id = album.id;
            albumList.push({userId:id});
        });
        console.log(albumList);

    })
    .catch((err)=>console.log(err))
} 

function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) =>{
        data.forEach(function(photo){
            var albumId = photo.albumId;
            var id = photo.id;
            photoList.push({userId:id});
        });
        console.log(photoList);
    })
    .catch((err)=>console.log(err))
} 



function showUseralbun(){
        userList.forEach(function(user){
        var albumspersonal=[]
            albumList.forEach(function(album){
            var photos=[];
                if(album.userId == user.id){
                    photoList.forEach(function(photo){
                        var temp = [];
                            if(photo.albumId==album.id){
                                temp.push(photo);
                            }
                        },photos.push(temp),
                    )
                albumspersonal.push(album)}
            })
        })
    ,albums.push(albumspersonal,
}

function createbuttons(){
    for (i= 0;i<=userList.length;i=i++)
    {
        div.innerHTML+= `
        <p><input type="button" onclick="showUseralbun(i)" value="i"/></p>
        `
    }
}



