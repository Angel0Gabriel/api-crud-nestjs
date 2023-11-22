import { IsNotEmpty, Length } from "class-validator";

export class CreateSheregangDevMemberBody {
  @IsNotEmpty({
    message: "The member role should not be empty."
  })
  @Length(5, 100)
  name: string;

  role: string;
}
