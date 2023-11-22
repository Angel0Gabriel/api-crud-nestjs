export abstract class SheregangDevMembersRepository {
  abstract getAllMembers(): Promise<any>;
  abstract getMemberById(id: string): Promise<any>;
  abstract createMember(name: string, role: string): Promise<void>;
  abstract updateMemberInfo(id: string, name: string, role: string): Promise<void>;
  abstract deleteMember(id: string): Promise<void>;
}
