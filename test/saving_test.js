const assert=require('assert');
const Task=require('../models/task');

//describe test
describe('saving records',function(){
var study,sleep,play,eat;
it('saves record to db',function(done){
  study=new Task({
    description:"Study",
    completed:true
  });
  study.save().then(function(){
    assert(study.isNew===false);
    done();
  })
})

it('saves record to db',function(done){
  play=new Task({
    description:"Play",
    completed:true
  });
  play.save().then(function(){
    assert(play.isNew===false);
    done();
  })
})

it('saves record to db',function(done){
 sleep=new Task({
    description:"Sleep",
    completed:false
  });
  sleep.save().then(function(){
    assert(sleep.isNew===false);
    done();
  })
})

it('saves record to db',function(done){
 eat=new Task({
    description:"Eat",
    completed:true
  });
  eat.save().then(function(){
    assert(eat.isNew===false);
    done();
  })
})

})






