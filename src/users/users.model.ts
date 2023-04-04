import * as mongoose from 'mongoose';

export interface Product {
  name: string;
  password: string;
  email: string;
  role: string;
}
export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  role: String,
});
