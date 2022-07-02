import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@kbhhtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
