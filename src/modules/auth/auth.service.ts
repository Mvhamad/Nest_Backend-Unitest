import { Injectable } from '@nestjs/common';
import { SignInAuthDto, SignUpAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ModulesEnum } from 'src/enums/modules.enum';
import { Model } from 'mongoose';
import { User } from '../users/schema/user.schema';
import { CryptoService } from 'src/services/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(ModulesEnum.Users) private userModel: Model<User>,
    private readonly cryptoService: CryptoService,
  ) {}
  async signUp(payload: SignUpAuthDto) {

    const user = await this.userModel.findOne({ email: payload.email, isActive: true });
    if (user) throw new Error('User already exists');

    const { salt, encryptedPassword } = await this.cryptoService.encryptPassword(payload.password);

    const newUser = new this.userModel({  
      ...payload,
      password: encryptedPassword,
      salt: salt,
    });

    await newUser.save();
    return newUser;
  }

  async signIn(payload: SignInAuthDto) {
    const user = await this.userModel.findOne({ email: payload.email, isActive: true });
    if (!user) throw new Error('User not found');
    const isPasswordValid = await this.cryptoService.comparePassword(payload.password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');
    return user;
  }

}
