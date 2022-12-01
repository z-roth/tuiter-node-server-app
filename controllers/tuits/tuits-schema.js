import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    handle: String,
    username: String,
    image: String,
    tuit: String,
    time: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
  },
  { collection: "tuits" }
);
export default schema;
