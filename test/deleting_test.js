const assert=require('assert');
const Task=require('../models/task');

//describe test
describe('deleting records',function(done){
var eat;
  beforeEach(function(done){
    eat=new Task({
      description:"Eat",
      completed:true
    })
    eat.save().then(function(){
      assert(eat.isNew===false);
      done();
    })
  })


  it('delete one record from db',function(){
    Task.findOneAndRemove({_id:eat._id}).then(function(){
      Task.findOne({_id:eat._id}).then(function(result){
        assert(result===null);
        done();
      })
    })
  })


})
