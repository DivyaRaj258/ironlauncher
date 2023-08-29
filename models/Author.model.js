const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    name: string,
    age: number,
    country: String,
    // books: [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: "Book"
    // }]
},
{
    timestamps: true
}
);

module.exports = model("Author", authorSchema);