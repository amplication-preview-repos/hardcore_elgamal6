/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MoveWhereUniqueInput } from "../../move/base/MoveWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MoveUpdateManyWithoutGamesInput {
  @Field(() => [MoveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MoveWhereUniqueInput],
  })
  connect?: Array<MoveWhereUniqueInput>;

  @Field(() => [MoveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MoveWhereUniqueInput],
  })
  disconnect?: Array<MoveWhereUniqueInput>;

  @Field(() => [MoveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MoveWhereUniqueInput],
  })
  set?: Array<MoveWhereUniqueInput>;
}

export { MoveUpdateManyWithoutGamesInput as MoveUpdateManyWithoutGamesInput };
