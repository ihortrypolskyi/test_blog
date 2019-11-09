console.log("yes");

document.addEventListener("turbolinks:load", () => {

  window.loadCurrentUserPosts = function(){
    fetch("posts/current_user_posts")
      .then(function (response) { return response.json(); })
        .then(function (data) {
          document.getElementById("current_user_posts").innerHTML = data.html;
    });

    document.getElementById("current_user_posts").style.display = 'block';
    document.getElementById("all_posts").style.display = 'none';
  }


  window.loadAllPosts = function(){
    document.getElementById("current_user_posts").style.display = 'none';
    document.getElementById("all_posts").style.display = 'block';
  }



})
