const Note = require('./../Model/model');

exports.create_info = async (req, res) => {
    if(!req.body.class) {
        return res.status(400).json({
            message: "Class should be defined"
        });
    }

    let note = new Note({
        name: req.body.name,
        class: req.body.class,
        deleted: req.body.deleted
    });

        try {
        const info = await note.save();
        const reply = await res.json({message: "successfully Added"});
    }
    catch(err) {
        res.status(500).json({
            message: "Error Occured." 
        });
    }
};

exports.findAll = async(req, res) => {

    try{

        const note = await Note.find({deleted: {$ne: true}}).sort({date: 'desc'});
        const reply = await res.json(note);
        return reply;
    }
    catch(err) {
        res.status(500).json({
            message: "Error Occured."
        });
    }
};

exports.findOne = async (req, res) => {

    if(!req.params.id) {
        return res.status(404).json({
            message: "info error " + req.params.id
        });            
    }

    try {
        const note = await Note.findById(req.params.id);
        const reply = await res.json(note);
        return reply;
    }

    catch(err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "info error "  + req.params.id
            });                
        }
        return res.status(500).json({
            message: "error occured "  + req.params.id
        });
    }
};

exports.update_info = async (req, res) => {

    if(!req.body.age) {
        return res.status(400).json({
            message: "class should be defined"
        });
    }

    try {
        const note = await Note.findById(req.params.id);
        note.username = await req.body.username;
        note.age = await req.body.age;

        if(!note) {
            return res.status(404).json({
                message: "info error "  + req.params.id
            });
        }

        const info = await note.save();
        const message = await res.json({message: "successfully added"});
    }

    catch(err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "info error "  + req.params.id
            });                
        }
        return res.status(500).json({
            message: "Error occured " +req.params.id
        });
    }
};

exports.delete_info = async (req, res) => {

    if(!req.params.id) {
        return res.status(404).json({
            message: "info error " + req.params.id
        });
    }

    try {
        const note = await Note.findByIdAndRemove(req.params.id);
        const message = await res.json({message: "info deleted!"});
    }

    catch(err)  {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                message: "info error " + req.params.id
            });                
        }
        return res.status(500).json({
            message: "error occured " + req.params.id
        });
    }
};

exports.patch = async (req, res) => {

    try {

        const note = await Note.findById(req.params.id);

        if (req.params.id) {
            delete req.params.id;
        }

        note.deleted = true;

        const save = await note.save();
        const response = await res.json({ message: "Updated done" });
    }
    
    catch (err) {
        res.status(500).json({
            message: "error occurred."
        });
    }
};