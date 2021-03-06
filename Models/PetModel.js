const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');
const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A pet needs a name'],
      trim: true,
      maxlength: [40, 'Please provide a shorter name'],
      minlength: [4, 'Please provider a longer name'],
    },
    slug: String,
    location: {
      type: String,
      required: true,
    },
    pedigreeM: {
      type: String,
      required: [true, 'Please, make sure your pedigree is allright'],
      unique: true,
    },
    pedigreeF: {
      type: String,
      required: [true, 'Please, make sure your pedigree is allright'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'A pet needs a description'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'A pet needs a price'],
    },
    seller: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    imgCover: {
      type: String,
      trim: true,
      required: [true, 'A pet needs an image cover'],
    },
    imgs: [
      {
        type: String,
      },
    ],
    ratingsAvrgSeller: {
      type: Number,
      default: 4.5,
      min: [1, 'Sorry, minimum rate is 1'],
      max: [5, 'Sorry, maximum rate is 5'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
petSchema.index({ price: 1, name: 1 });
petSchema.index({ location: 1 });
petSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'petReviewed',
  localField: '_id',
});
//DOCUMENT MIDDLEWARE: save() create() => pre/post
petSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
//DOCUMENT QUERY
petSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'seller',
    select: '-__v',
  });
  next();
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
