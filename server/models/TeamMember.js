const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
//   image:String
// },
// {
//   collection:"ImageDetails",
 }
);
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;
