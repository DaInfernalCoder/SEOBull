import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      required: true,
    },
    companyName: {
      type: String,
      trim: true,
      required: true,
    },
    industry: {
      type: String,
      trim: true,
      required: true,
    },
    websiteUrl: {
      type: String,
      trim: true,
      required: true,
    },
    businessGoals: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    services: {
      website: {
        type: Boolean,
        default: false,
      },
      localSeo: {
        type: Boolean,
        default: false,
      },
      nationalSeo: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
leadSchema.plugin(toJSON);

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);
