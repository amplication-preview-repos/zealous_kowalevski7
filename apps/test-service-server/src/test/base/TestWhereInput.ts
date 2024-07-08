/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserTestListRelationFilter } from "../../userTest/base/UserTestListRelationFilter";
import { QuestionListRelationFilter } from "../../question/base/QuestionListRelationFilter";

@InputType()
class TestWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserTestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserTestListRelationFilter)
  @IsOptional()
  @Field(() => UserTestListRelationFilter, {
    nullable: true,
  })
  userTests?: UserTestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestionListRelationFilter)
  @IsOptional()
  @Field(() => QuestionListRelationFilter, {
    nullable: true,
  })
  questions?: QuestionListRelationFilter;
}

export { TestWhereInput as TestWhereInput };
