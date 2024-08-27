import * as graphql from "@nestjs/graphql";
import { TweetService } from "./tweet.service";

export class TweetResolver {
  constructor(protected readonly service: TweetService) {}
}
