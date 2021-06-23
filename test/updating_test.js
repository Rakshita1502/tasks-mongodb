const assert=require('assert');
const Task=require('../models/task');

//describe test
describe('updating records',function(done){


 it('update one doc in db',function(){
  Task.findOneAndUpdate({description:"Sleep"},{completed:true}).then(function(){
    Task.findOne({_id:sleep._id}).then(function(result){
      assert(result.description==="Sleep");
      
    })
  });
 });




})






