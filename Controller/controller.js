const response = [{name: "sudrishya",
                           class: 15}];

exports.funcpost = function (reque, respo) {
    response.push({name: reque.body.name,
        class: reque.body.class
    });
    respo.json({message:"POST"});

 }; 
 
 exports.funcget = function (reque, respo) {
    respo.json(response); 
    //response.send("Try this");
 };

