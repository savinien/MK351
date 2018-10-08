const data = [
  { description: "this is a dog" , url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg" },
  {description : "this is a pinguin", url : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Razorbill_in_flight.jpg/220px-Razorbill_in_flight.jpg"},
  {description: "this is a turtle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg"}
];

const zoomValues = ["25%", "50%", "75%", "100%"];
let presentZoomIndex = 1;


function chooseImage(){
  let index = Math.floor(Math.random() * data.length);
  return data[index];
};

function display() {
  let element = chooseImage();
  document.getElementById('description').innerHTML = element.description;
  document.getElementById('image').src = element.url;
};

function zoomIn(){
  if (presentZoomIndex != zoomValues.length){
    presentZoomIndex += 1;
    document.getElementById('image').style.width = zoomValues[presentZoomIndex];
  }
};

function zoomOut(){
  if (presentZoomIndex != 0){
    presentZoomIndex -= 1;
    document.getElementById('image').style.width = zoomValues[presentZoomIndex];
  }
};
