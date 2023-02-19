import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  //represent database table

  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  // @ApiProperty()
  @Field()
  username: string;
}
