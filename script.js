function createPost(){

let input = document.getElementById("postInput");
let postText = input.value;

if(postText === ""){
alert("Write something!");
return;
}

let postDiv = document.createElement("div");
postDiv.className = "post";

postDiv.innerHTML = `
<p>${postText}</p>
<div class="actions">
<button onclick="likePost(this)">❤️ Like</button>
<button onclick="deletePost(this)">Delete</button>
</div>
`;

document.getElementById("posts").appendChild(postDiv);

input.value="";
}

function likePost(btn){
btn.innerText="❤️ Liked";
}

function deletePost(btn){
btn.parentElement.parentElement.remove();
}