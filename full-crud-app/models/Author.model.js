const { model, Schema } = require("mongoose");

const authorSchema = new Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        bio: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

const Author = model("Author", authorSchema);

module.exports = Author