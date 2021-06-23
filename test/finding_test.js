const assert=require('assert');
const Task=require('../models/task');

//describe test
describe('finding records',function(done){



  it('finds one record from db',function(){
    Task.findOne({description:"Sleep"}).then(function(result){
      console.log(result);
      assert(result.description==="Sleep");
      done();
    })
  })


})






