const Tweet =  require('../models/Tweet');

module.exports = {
    async index(req, res){
        const Tweets = await Tweet.find({}).sort("-createAT");

        return res.json(Tweets);
    },

    async store(req, res){
        const tweet = await Tweet.create(req.body);
        
        return res.json(tweet);
        //releaseEvents.io.emit('tweet', tweet);

    }
}