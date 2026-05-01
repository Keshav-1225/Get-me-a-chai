import mongoose,{InferSchemaType, Schema, model} from "mongoose";

const PaymentSchema = new Schema({
    name:{type:String,required:true},
    to_user:{type:String,required:true},
    order_id:{type:String,required:true},
    message:{type:String,required:true},
    done:{type:Boolean,default:false},
},{timestamps:true})


type Payments = InferSchemaType<typeof PaymentSchema>

const PaymentModel = mongoose.models.Payments || model<Payments>("Payments",PaymentSchema)
export default PaymentModel