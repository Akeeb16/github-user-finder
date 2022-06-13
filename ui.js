class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //display profile in UI
    showProfile(user){
         this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class ="row">
        <div class = "column col-md-3">
        <img class = "img-fluid" src ="${user.avatar_url}">
        <a href = "${user.html_url}" target = "_blank"
         class ="btn btn-primary btn-block mb-3">View Profile</a>
        </div>  
        <div class = "column col-md-9">
            <span class = "badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class = "badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class = "badge badge-success">Followers: ${user.followers}</span>
            <span class = "badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class=list-group">
            <li class "list-group-item">Company: ${user.company}</li>
            <li class "list-group-item">Website/Blog: ${user.blog}</li>
            <li class "list-group-item">Location: ${user.location}</li>
            <li class "list-group-item">Member Since: ${user.created_at}</li>
            </ul>
        </div>
        </div>
        </div>
        <h3 class = "page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
         `;
    }

    //show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo) {
            output += `
            <div class="card card-body">
            <div class = "row">
            <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class = "badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class = "badge badge-success">Watchers: ${repo.watchers_count}</span>
                <span class = "badge badge-secondary">Forks: ${repo.forks_count}</span>    
            </div>
            </div>
            </div>`
        })
        document.getElementById('repos').innerHTML = output;
    }


    //show alert message
    showAlert(message,className){
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        //add class name
        div.className = className;
        //create text message
        //div.textContent = message; or
        div.appendChild(document.createTextNode(message));
        //get the parent
        const container = document.querySelector('.searchContainer');
        //get the next element
        const search = document.querySelector('.search');
        //place the alert
        container.insertBefore(div,search);
        //timeout for alert
        setTimeout(() => {
            this.clearAlert();
        },3000)
    }

    //clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML ='';
    }
}