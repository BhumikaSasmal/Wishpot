var form;
var database;
function preload(){

}
function setup(){
  createCanvas(displayWidth-30,displayHeight-50);
  database=firebase.database();
  form= new Form();
}
function draw(){
    form.show();
}