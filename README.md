# Forward-Moving-Clock

<img width="594" alt="Digital Clock" src="https://user-images.githubusercontent.com/85331903/121295106-15b1a700-c921-11eb-8756-def692718fc8.PNG">

## Assumptions for Forward Clock
- 0 digit is appended before the hour, minute and second digit if the number is < 10
- change am_pm to PM when hour value = 12
- change to 1 when hour value > 12
- change am_pm to AM and hour to 12 when hour value = 0
- run the function currentTime every second using setInterval()

## Assumptions for Reverse Clock
- The input range for DECREMENT_BY_SECS is valid between 1 and 60.
- The number input control is used for DECREMENT_BY_SECS.
- The value of DECREMENT_BY_SECS is pass into the function ReverseClock() to update currentTime or TimeNow
