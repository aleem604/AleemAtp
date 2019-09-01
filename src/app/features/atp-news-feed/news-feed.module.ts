import {NgModule} from "@angular/core";

import {routing} from "./news-feed.routing";
import {NewsFeedComponent} from "./news-feed.component";
import { SharedModule } from "@app/shared/shared.module";
import { AccordionModule, PopoverModule, CarouselModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
      NewsFeedComponent
  ],
  imports: [
      SharedModule,
      AccordionModule.forRoot(),
      PopoverModule.forRoot(),

      CarouselModule.forRoot(),
    routing
  ],
  providers: [],
})
export class NewsFeedModule {

}
