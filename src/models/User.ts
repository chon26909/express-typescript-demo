import { Document, model, Schema, SchemaOptions } from 'mongoose';

interface IUserDocument extends Document {
    firstname: string;
    lastname: string;
    email: string;
    hash: string;
    salt: string;
}

const options: SchemaOptions = {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
            delete ret.hash;
            delete ret.salt;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
        }
    },
    timestamps: true
};

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        hash: {
            type: String,
            require: true
        },
        salt: {
            type: String,
            require: true
        }
    },
    options
);

const User = model<IUserDocument>('users', userSchema);

export default User;
