import mongoose from "mongoose"

export interface IEvent {
  _id:         string;
  name:        string;
  location:    string;
  description: string;
  date:        Date;
  endDate:     Date;
  activities:  Activity[];
}

export interface Activity {
  _id:          string;
  name:        string;
  type:        string;
  description: string;
  date:        Date;
  endDate:     Date;
  location:    string;
  speakers:    Speaker[];
}

export interface Speaker {
  _id:          string;
  name:        string;
  description: string;
  photo:       string;
  type:        string;
}

const speakerSchema = new mongoose.Schema({
  _identification: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Conferencista", "Tallerista", "Jurado", "Otro"],
    required: true,
  }
})

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
  speakers: {
    type: [speakerSchema],
    required: true,
  }
})

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
  activities: {
    type: [activitySchema],
    required: true,
  }
})

export default mongoose?.models?.Event || mongoose.model("Event", EventSchema)
