import { Module } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { TweetController } from "./tweet.controller";
import { TweetResolver } from "./tweet.resolver";

@Module({
  controllers: [TweetController],
  providers: [TweetService, TweetResolver],
  exports: [TweetService],
})
export class TweetModule {}
