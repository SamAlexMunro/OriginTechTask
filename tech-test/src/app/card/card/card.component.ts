import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * For this technical task due to the time constraint I've kept this component
 * very simple, but ideally given more time I'd build it out to be a little more
 * dynamic in terms of what can offer, with various attribute selectors such as;
 * <app-card medium-spacing> ....
 * <app-card> <app-card-header banner-header> ...
 * ect
 */
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
