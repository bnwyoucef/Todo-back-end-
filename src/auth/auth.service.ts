import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash: hash,
                userName: dto.userName
            }
        });
        delete user.hash;
        return user;
        
    }

    async signin(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if(!user) return "Wrong email!"

        const checkPswrd = await argon.verify(user.hash,dto.password);
        if(!checkPswrd) return "Wrong password!"
        const {hash,...rUser} = user;
        return rUser;
    }
}
