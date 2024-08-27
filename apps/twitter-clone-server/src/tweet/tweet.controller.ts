import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TweetService } from "./tweet.service";

@swagger.ApiTags("tweets")
@common.Controller("tweets")
export class TweetController {
  constructor(protected readonly service: TweetService) {}
}
