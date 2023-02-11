const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type: 'string', required: true},
    email:{type: 'string', required: true},
    message:{type: 'string', required: true}

  },{timestamps:true});
   mongoose.models={}
  export default mongoose.model("contactSchema",contactSchema);