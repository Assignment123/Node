const Note = require('./../Model/model');


exports.create_info = (req, res) => {
    let note = new Note({
        name: req.body.name,
        class: req.body.class,
        date: req.body.date,
        deleted: req.body.deleted
    });

    if(!req.body.class) {
        return res.status(400).send({
            message: "Class should be defined"
        });
    }

    note.save()
    .then(data => {
        res.json({message: "successfully added"});
    }).catch(err => {
        res.status(500).json({
            message: "Error Occured." 
        });
    });
};

exports.findAll = (req, res) => {
   var pageNum = parseInt(req.query.pageNum);
   var size = parseInt(req.query.size);
   var query={};
   if (pageNum <0 || pageNum ===0){
       response ={
           error: true,
           message: "Invalid number of page, start with 1 or more than 1"
       };
       return res.json(response);
   }
   query.skip = size *(pageNum - 1);
   query.limit = size;
   const user = Note.find({},{},query);

   user.find({ deleted: { $ne: true } }).sort({ date: "desc" })
   .then(note => {
     res.json(note);
   })
   .catch(err => {
     res.status(500).json({
       message: "Error Occured.",
       errMsg : err.toString()
     });
   });
};
exports.findOne = (req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).json({
                message: "Error Occured " + req.params.id
            });            
        }
        res.json(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error Occured "  + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error Occured "  + req.params.id
        });
    });
};

exports.update_info = (req, res) => {

    if(!req.body.class) {
        return res.status(400).send({
            message: "class should be defined"
        });
    }

    Note.findByIdAndUpdate(req.params.id, {
        name: req.body.name, 
        class: req.body.class,
        date: req.body.date,
        deleted: req.body.deleted
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Error Occured "  + req.params.id
            });
        }
        res.json({message: "successfully updated"});
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Error Occured "  + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error Occured " 
        });
    });
};

exports.delete_info = (req, res) => {
    Note.findByIdAndRemove(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Error Occured " + req.params.id
            });
        }
        res.json({message: "Information deleted!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Error Occured " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Not deleted " + req.params.id
        });
    });
};
exports.patch = (req, res) => {

    Note.findById(req.params.id)
    .then(note => {
        if (req.params.id) {
            delete req.params.id;
        }

        note.deleted = true;

        note.save();
        res.json({ message: "Updated done" });

    }).catch(err => {
        return res.status(500).json({
            message: "Error occured."
        });
    });
};
