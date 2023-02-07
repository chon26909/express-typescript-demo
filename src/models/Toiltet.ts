import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IToiletDocument extends Document {
    latitude: number;
    longitude: number;
    description: string;
}

const options: SchemaOptions = {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        }
    },
    timestamps: true
};

const toiletSchema = new Schema(
    {
        latitude: {
            type: Number,
            require: true
        },
        longitude: {
            type: Number,
            require: true
        },
        description: {
            type: String
        }
    },
    options
);

const Toilet = model<IToiletDocument>('toilets', toiletSchema);

export default Toilet;
