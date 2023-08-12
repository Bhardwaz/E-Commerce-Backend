import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      maxLength: [120, "Product name should be a max of 120 characters"],
    },

    price: {
      type: Number,
      required: [true, "Please provide a product price"],
      trim: true,
      maxLength: [5, "Product price should not be more than 5 digits"],
    },
    description: {
      type: String,
      // using some form of live editor or editor
    },
    photos: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    stock: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "collection",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
