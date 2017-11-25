module.exports = (req,res,next) => {
    if(req.user.status !== 'paid'){
        return res.status(403).send({error:'Requires subscription'})
    }
    next();
}