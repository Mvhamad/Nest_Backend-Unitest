import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../users/schema/user.schema';
import { ModulesEnum } from 'src/enums/modules.enum';
import { CryptoService } from 'src/services/crypto.service';

@Module({
  imports: [ MongooseModule.forFeature([{ name: ModulesEnum.Users, schema: UserSchema }]) ],
  controllers: [AuthController],
  providers: [AuthService, CryptoService],
  exports: [AuthService, MongooseModule],
})
export class AuthModule {}
