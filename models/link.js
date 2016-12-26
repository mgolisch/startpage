var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  title:  String,
  url:    String,
  icon:   String,
  category: Schema.ObjectId
});

mongoose.model('Link',linkSchema);

var CategorySchema = new Schema({
  name: String
});

mongoose.model('Category',CategorySchema);
