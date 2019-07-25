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
module.exports = {
    createPost
  }