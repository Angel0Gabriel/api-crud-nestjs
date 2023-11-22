import { AppService } from './app.service';
import { CreateSheregangDevMemberBody } from './dtos/create-sheregang-dev-member-body'
import { UpdateSheregangDevMemberBody } from './dtos/update-sheregang-dev-member-body';
import { SheregangDevMembersRepository } from './repositories/sheregang-dev-members-repository';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService, private sheregangDevMembersRepository: SheregangDevMembersRepository) { }

  @Get('members')
  async getMembers(): Promise<any> {
    return this.sheregangDevMembersRepository.getAllMembers()
  }

  @Get('members/:id')
  async getMember(@Param('id') id: string): Promise<any> {
    return this.sheregangDevMembersRepository.getMemberById(id)
  }

  @Post('members')
  async createSheregangDevMember(@Body() body: CreateSheregangDevMemberBody): Promise<void> {
    const { name, role } = body

    return this.sheregangDevMembersRepository.createMember(name, role)

  }

  @Put('members/:id')
  async updateSheregangDevMember(@Body() body: UpdateSheregangDevMemberBody, @Param('id') id: string): Promise<void> {
    const { name, role } = body

    return this.sheregangDevMembersRepository.updateMemberInfo(id, name, role)
  }


  @Delete('members/:id')
  async deleteSheregangDevMember(@Param('id') id: string): Promise<void> {
    return this.sheregangDevMembersRepository.deleteMember(id)
  }
}
