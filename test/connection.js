const mongoose=require("mongoose");

//ES6 promise
mongoose.Promise=global.Promise;

//Connect to db before tests run
before(function(done){
  //connect to mongodb
  mongoose.connect("mongodb://localhost/tasksDB");

  mongoose.connection.once('open',function(){
    console.log("connection has been made");
    done();
  }).on('error',function(error){
    console.log("connection error:",error);
  });
});

//drop the task collection before each test
// beforeEach(function(done){
//   //drop the collection
//   mongoose.connection.collections.tasks.drop(function(){
//     done();
//   });
// })

