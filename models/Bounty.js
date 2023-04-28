const mongoose = require("mongoose")

// define mongoose schema
const BountySchema = new mongoose.Schema({
    name: {
        type: String
    },
    wantedFor: {
        type: String
    },
    client: {
        type: String
    },
    ship: {
        type: String
    },
    reward: {
        type: Number
    },
    captured: {
        type: Boolean
    },
    lastSeen: {
        type: String
    },
}, {
    timestamps: true
})

// create mongoose model
// export the mongoose model
module.exports = mongoose.model("Bounty", BountySchema)