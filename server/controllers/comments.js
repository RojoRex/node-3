
function createComment(req,res){
    const db= req.app.get('db');

    const {postId,userId,comment}=req.body;
    db.comments
    .save({
        postId,
        userId,
        comment,
    })
    .then(post=>res.status(201).json(post))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

function editComment(req,res){
    const db=req.app.get('db');
    const {comment}=req.body

    db.comments
    .update(
        {id:req.params.id,comment:{comment}}
    .then(post=>res.status(201).json(post))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
    )
}

module.exports = {
    createComment,
    editComment 
  }