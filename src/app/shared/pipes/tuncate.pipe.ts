import { Pipe } from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, limit: number, trail: string) : string {
    limit = limit > 0 ? limit : 10;
    trail = trail != null ? trail : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}