import { IsJWT, IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';

@ArgsType()
export class RefreshTokenInput {
  @IsNotEmpty()
  @IsJWT()
  @Field(() => GraphQLJWT)
  token: string;
}
