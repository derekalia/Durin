module.exports = (req,res,next) => {
    if(!req.user.status == 'paid'){
        return res.status(401).send({error:'Requires subscription'})
    }
    next();
}