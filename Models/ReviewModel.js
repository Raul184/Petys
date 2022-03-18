const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Please fill in this field'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please fill in this field'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    petReviewed: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pet',
      required: true,
    },
    userReview: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//DOCUMENT QUERY
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'petReviewed',
    select: 'seller name imgCover',
  }).populate({
    path: 'userReview',
    select: 'name foto',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
