let user = document.getElementById("userid");

async function fetchuser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let result = await response.json()
displayuser(result)

}


document.getElementById("btn").addEventListener('click', () => {
    let userid = user.value;
    fetchuser(userid);

});


function displayuser(result){

    if(!result.avatar_url){
document.getElementById("userprofile").innerHTML = `<h1 class='user1'>user not found</h1>`
return;   
}

// if(!bio){
//     bio ='';
//     return;
// }

    document.getElementById('userprofile').innerHTML =

    `<div class="userinfo">
<img src=${result.avatar_url} alt="error"  class="userimg">
<div class="userdetail">
    <p class="username">${result.name}</p>
    <p class="userbio">${result.bio}</p>
</div>
</div>
<div class="userfollow">
<div class="follower">
    <div class="repo">
        <p>follower</p>
        <p>${result.followers}</p>
    </div>
    <div class="repo">
        <p>following</p>
        <p>${result.following}</p>
    </div>
    <div class="repo">
        <p>repo</p>
        <p>${result.public_repos}</p>
    </div>
</div>
<a href= ${result.html_url} target='_blank' >
<div class="visitprofile">
    visit profile
</div>
</a>
</div>`
}