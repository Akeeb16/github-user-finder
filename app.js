//instantiate GitHub
const github = new GitHub();

//instantiate UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e)=> {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
    //make http call
      github.getUser(userText)
      .then(data => {
          if(data.profile.message == 'Not Found')
          {
                //show the alert
                ui.showAlert('User Not Found','alert alert-danger');
          }
         else{
            ui.showProfile(data.profile); //show profile
            ui.showRepos(data.repos); //show profile
         }
      })

      }
    else{
        //clear profile
        ui.clearProfile();
    }
});