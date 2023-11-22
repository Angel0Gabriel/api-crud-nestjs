import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { SheregangDevMembersRepository } from "src/repositories/sheregang-dev-members-repository";

@Injectable()
export class PrismaSheregangDevMembersRepository implements SheregangDevMembersRepository {
  constructor(
    private prisma: PrismaService,
  ) { }

  async getAllMembers(): Promise<any> {
    const members = await this.prisma.sheregangDevMembers.findMany({
      orderBy: {
        name: 'asc',
      }
    })

    return members
  }

  async getMemberById(id: string): Promise<any> {
    const member = await this.prisma.sheregangDevMembers.findUniqueOrThrow({
      where: {
        id,
      }
    })

    return member
  }

  async createMember(name: string, role: string): Promise<void> {
    await this.prisma.sheregangDevMembers.create({
      data: {
        name,
        role
      }
    })
  }

  async updateMemberInfo(id: string, name: string, role: string): Promise<void> {
    await this.prisma.sheregangDevMembers.update({
      where: {
        id,
      },
      data: {
        name,
        role,
      }
    })
  }

  async deleteMember(id: string): Promise<void> {
    await this.prisma.sheregangDevMembers.delete({
      where: {
        id,
      }
    })
  }

}
