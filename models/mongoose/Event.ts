import mongoose from "mongoose"

export interface IEvent {
  _id: string
  name: string
  location: string
  description: string
  date: Date
  endDate: Date
}

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: ["UNIAJC SUR", "UNIJAC NORTE"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
})

export default mongoose?.models?.Event || mongoose.model("Event", EventSchema)
