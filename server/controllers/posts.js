function createPost(req,res){
    const db= req.app.get('db');

    const {postId,userId,content}=req.body;
    db.posts
    .save({
        postId,
        userId,
        content,
    })
    .then(post=>res.status(201).json(post))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}



function getPost(req,res){
    const db=req.app.get('db');
    const {userId}=req.params
    db.posts
    .find({userId})
    .then(post=>res.status(200).json(post))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })
}

function updatePost(req,res){
    const db=req.app.get('db');
    const{content}=req.body
    db.posts
    .update({
        id:req.params.id,
        content:{content}
    })
    
    .then(post=>res.status(200).json(post))
    .catch(err=>{
        console.error(err);
        res.status(500).end();
    })

}

module.exports = {
    createPost,
    getPost,
    updatePost
  }