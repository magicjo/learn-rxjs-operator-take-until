// RxJS v6+
import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

/*
 Filtering Operator: takeUntil
 -----------------------------

 Lets values pass until a second Observable, **notifier**, emits something. Then, it completes.
 ```
 takeUntil(notifier: Observable): Observable
 ```

 http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-takeUntil
*/

// Emit: 0, 1, 2, ... (every 1s)
const source = interval(1000);

// After 5 seconds, emit value
const timer$ = timer(5000); // or interval(5000);

// When timer emits after 5s, complete source
const example = source.pipe(takeUntil(timer$));

// Receive: 0, 1, 2, 3
console.log("[start]");
example.subscribe({
  complete: () => console.log("[complete]"),
  error: err => console.error("[error] : ", err),
  next: value => console.log("[next] : ", value)
});
