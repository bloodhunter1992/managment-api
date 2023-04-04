import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './users.model';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<Product>,
  ) {}
  insertUser(name: string, password: string, email: string, role: string) {
    // return this.userModel.find({ email: email }).then((user) => user);
    const newUser = new this.userModel({
      name,
      password,
      email,
      role,
    });
    newUser.save().then((prod) => {
      return prod;
    });
  }
}
