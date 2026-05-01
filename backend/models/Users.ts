import mongoose, { Schema,model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name:{type:String,required:true} ,
    username:{type:String, required:true},
    email: {type:String, required:true},
    profile:{type:String,required:true},
    cover:{type:String,required:true},
    // razor_id:{type:String,required:true},
    // razor_secret:{type:String,required:true}

},{
    timestamps:true,
});

type User = InferSchemaType<typeof userSchema>&{
    createdAt:Date,
    updatedAt:Date
}
const UserModel = mongoose.models.User || model<User>("User",userSchema)
export default UserModel