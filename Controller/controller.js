
 const  modelfile = require("./../Model/model")
 
 exports.create_info = function (req, res) {
 
     let response = new modelfile(
         {
             name: req.body.name,
             class: req.body.class
         }
     );
 
     response.save(function (err) {
         if (err) {
            return console.error(err);
         }
         res.json({"message":"Information Added successfully"});     })
 }; 
 
 
 exports.retrieve_info = function (req, res) {
 
    modelfile.find(function (err, reply) {
         if (err) {
             return console.error(err);
         }
         res.json({reply});     
     })
 };
 
 
 exports.retrieve_single = function (req, res) {
 
    modelfile.findById(req.params.id, function (err, response) {
        if (err) {
            return console.error(err);
        }
        res.json(response);          
     })
 };
 
  exports.update_info = function (req, res) {
    modelfile.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) {
            return console.error(err);
        }
        res.json({"message":"Product udpated."});
     
     });
 };
 
  exports.delete_info = function (req, res) {
    modelfile.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return console.error(err);
        }
        res.json({"message":"Deleted successfully!"});
     })
 };



 