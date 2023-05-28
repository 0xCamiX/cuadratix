import mongoose from "mongoose"

export interface IActivity {
  _id: string
  name: string
  type: string
  description: string
  date: Date
  endDate: Date
  location: string
  event: string
}

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Conferencia", "Taller", "Concurso", "Otro"],
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
  location: {
    type: String,
    enum: [
      "Aula Maxima",
      "Auditorio 1",
      "Auditorio 2",
      "Auditorio 3",
      "Auditorio 4",
      "Auditorio 5",
    ],
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
})

export default mongoose?.models?.Activity || mongoose.model("Activity", activitySchema)
