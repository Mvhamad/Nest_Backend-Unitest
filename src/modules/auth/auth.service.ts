import { Injectable } from '@nestjs/common';
import { SignInAuthDto, SignUpAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModulesEnum } from 'src/enums/modules.enum';
import { Model } from 'mongoose';
import { User } from '../users/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(ModulesEnum.Users) private userModel: Model<User>) {}
  async signUp(payload: SignUpAuthDto) {

    const user = await this.userModel.findOne({ email: payload.email, isActive: true });
    if (user) throw new Error('User already exists');
    
    const encryptedPassword = 'encryptedPassword'; // Replace with actual encryption logic
    const salt = 'randomSalt'; // Replace with actual salt generation logic

    const newUser = new this.userModel({  
      ...payload,
      password: encryptedPassword,
      salt: salt,
    });

    await newUser.save();
    return newUser;
  }

  async signIn(payload: SignInAuthDto) {
    return `This action returns all auth`;
  }

}
