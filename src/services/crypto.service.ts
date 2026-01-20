import * as bcrypt from 'bcrypt';

export class CryptoService {
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return { salt, encryptedPassword };
  }

  async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
