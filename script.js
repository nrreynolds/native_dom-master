var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  var randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1 -- Set new main title
  document.getElementById("main-title").textContent = "DOM Toretto";


  // Part 2 -- change background color (to peachpuff, of course)
  document.body.style.backgroundColor = "peachpuff";


  // Part 3 -- remove last item from DOM's favorite things
  // select favorite things list
  var list = document.querySelector(".side-bar>ul");
  // select last element
  var lastElement = list.children[list.children.length - 1];
  // remove last element
  list.removeChild(lastElement);


  // Part 4 -- change special title's font size to 2rem
  // select special titles
  var specialTitles = document.querySelectorAll(".special-title");
  //loop through each title
  for (var i = 0; i < specialTitles.length; i++) {
    //set new font size
    specialTitles[i].style.fontSize = "2rem";
  }


  // Part 5 -- remove chicago from past races
  // select past races
  var pastRaces = document.querySelectorAll(".side-bar")[1].getElementsByTagName("ul")[0];
  // remove chicago (index 3)
  pastRaces.removeChild(pastRaces.children[3]);


  // Part 6 -- add new location to races list
  // create list element
  var newRace = document.createElement("li");
  // add text
  newRace.textContent = "New York";
  // append to past races
  pastRaces.appendChild(newRace);


  // Part 7 -- create new blog post for new location
  //create blogpost div
  var blogPost = document.createElement("div");
  // add classes
  blogPost.setAttribute("class", "blog-post purple");

  //create h2 for blog post
  var blogPostH2 = document.createElement("h1");
  //add text
  blogPostH2.textContent = "New York";
  //add to blog post
  blogPost.appendChild(blogPostH2);

  //create p for blog post
  var blogPostP = document.createElement("p");
  //add text
  blogPostP.textContent = "I drove my car following propper traffic laws".toLocaleUpperCase();
  //add to blog post
  blogPost.appendChild(blogPostP);

  //add blog post to main div
  document.querySelector(".main").appendChild(blogPost);



  // Part 8 -- add click event listener to quote title to call random quote
  // get the quote title
  var quoteTitle = document.getElementById("quote-title");
  // add the event listener
  quoteTitle.addEventListener("click", randomQuote, false);


  // Part 9 -- add mouseenter and mouseout events to blog posts
  // get all blog posts
  var blogposts = document.querySelectorAll(".blog-post");
  // declare array to put blog posts in
  var blogpostArr = [];
  //loop through each
  for (var i = 0; i < blogposts.length; i++) {
    // add to array
    blogpostArr.push(blogposts[i]);
  }
  // loop through each blog post in array
  blogpostArr.forEach(function (post) {
    //add mouseout event handler
    post.addEventListener("mouseout", function (e) {
      //change class to include purple
      post.setAttribute("class", "blog-post purple");
    }, false);
    // add mouseenter event handler
    post.addEventListener("mouseenter", function (e) {
      //change class to include red
      post.setAttribute("class", "blog-post red");
    }, false);

    //handle issue where children trigger mouseout event
    // create array for blog post's children
    var blogChildren = [];
    //add each child to array
    for (var i = 0; i < post.children.length; i++) {
      blogChildren.push(post.children[i]);
    }
    // foreach child
    blogChildren.forEach(function (child) {
      // set pointer events to none
      child.style.pointerEvents = "none";
    });
  })

});