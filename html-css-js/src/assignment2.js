const data = [
  {description: "this is a dog" , url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg" },
  {description : "this is a pinguin", url : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Razorbill_in_flight.jpg/220px-Razorbill_in_flight.jpg"},
  {description: "this is a turtle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg"}
];

function display(index) {
  let element = data[index];
  document.getElementById('description').innerHTML = element.description;
  document.getElementById('image').src = element.url;
};
