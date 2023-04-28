// require the models
const db = require('./models')

const bountyCrud = async () => {
    try {
        // CREATE
        // const hanSolo = await db.Bounty.create({
        //     name: "Han Solo",
        //     wantedFor: "Owing money",
        //     client: "Jabba the Hut",
        //     reward: 100000,
        //     ship: "Millenium Falcon",
        //     captured: false,
        //     lastSeen: "Correlia System"
        // })
        // console.log(hanSolo)

        // READ
        // const han = await db.Bounty.findOne({
        //     name: "Han Solo"
        // })
        // console.log(han)

        // UPDATE
        // han.reward = 100
        // await han.save()
        // console.log(han)

        // DESTROY
        // const deletedBounty = await db.Bounty.findOneAndDelete({
        //     ship: "Millenium Falcon"
        // })
        // console.log(deletedBounty)

    } catch (err) {
        console.log(err)
    }
}

bountyCrud()