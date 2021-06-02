const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstname :{type: String,required: true},
   middlename :{type: String,default:''},
   lastname :{type: String,required: true},
   email :{type: String,required: true,unique:true,index:true},
   password :{type: String,required: true},
   mobile :{type: Number,required: true},
   isadmin: {type:Boolean,default:false},
   token:{type: String,default: ''},
  });



  const User = mongoose.model('User', userSchema);
  
  // instance method
  userSchema.methods.findSimilarTypes = function(cb) {
    return this.model('User').find({ type: this.type }, cb);
  };

  // static method
  userSchema.statics.findByEmail = function(name, cb) {
    return this.find({ email: new RegExp(name, 'i') }, cb);
  };
// query builder
userSchema.query.byEmail = function(email) {
  return this.find({ email: new RegExp(email, 'i') });
};



  module.exports = User;