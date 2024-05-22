const { model, Schema } = require("mongoose");

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        codeISBN: {
            type: String,
            maxlength: 13,
            unique: true,
            required: true
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0,
            required: true
        },
        lastPublished: {
            type: Date,
            default: Date.now
        },
        genre: {
            type: String,
            enum: ["romance", "fiction", "biography", "poetry"]
        },
        author: {
            type: Schema.ObjectId,
            ref: 'Author'               // NOMBRE DEL MODELO RELACIONADO
        }
    },
    {
        timestamps: true
    }
)

const Book = model("Book", bookSchema);

module.exports = Book