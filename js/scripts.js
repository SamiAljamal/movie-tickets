function UserInfo(movie, age, time){
  this.movieChoice = movie;
  this.age = age;
  this.time = time;
}

var movies = {
  "Independence Day": {rating: 13, new: 0},
  "Central Intelligence": {rating: 13, new: 0},
  "Warcraft": {rating: 13, new: 0},
  "Finding Dory": {rating: 5, new: 0},
  "Now You See Me": {rating: 13, new: 1},
  "Conjuring 2": {rating: 17, new: 0}
};

function userMovieCompare(userData, movieData) {
  if (userData < movieData) {
    alert("Sorry, you aren't old enough to see this.")
  };
}

function moviePrice(time, release, age) {
  debugger;
  var price = 6
  if ((time === 2) && (release < 1)) {
    if((age<=5)|| (age >= 65)){
      price = price;
    }
    else{
      price +=4;
    }
  }else{
    if(time === 1){
      if((age<=5)|| (age >= 65)){
        price /= 2;
      } else{
        price = price;
      }
    }
  }
  return price;
};


$(document).ready(function (){
  $("form").submit(function(event){
    event.preventDefault();

    var inputTime = parseInt($("#time").val());
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputAge = parseInt($("#userAge").val());
    var newUserInfo= new userInfo(inputMovie,inputAge,inputTime);

    $("ul#movieOutput").append(newUserInfo.movieChoice + newUserInfo.age + newUserInfo.time);

    var movieRating = (movies[inputMovie].rating);

    var movieRelease = (movies[inputMovie].new);
    var ticketPrice = moviePrice(inputTime, movieRelease, inputAge);
    alert(ticketPrice);

    userMovieCompare(inputAge, movieRating);

  });
});

  // var inputTime =
