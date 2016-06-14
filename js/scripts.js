function userInfo(movie,age, time){
  this.movieChoice = movie;
  this.age = age;
  this.time = time;
}
$(document).ready(function (){
  $("form").submit(function(event){
    event.preventDefault();

    var inputTime = $("#time").val();
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputAge = $("#userAge").val();
    var newUserInfo= new userInfo(inputMovie,inputAge,inputTime);

    $("ul#movieOutput").append(newUserInfo.movieChoice + newUserInfo.age + newUserInfo.time);

  });
});

  // var inputTime =
