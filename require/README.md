[See section *Require* from Chapter10 of the book *Eloquent JavaScript*](http://eloquentjavascript.net/10_modules.html)

**Example of use:**

```js
[~/EJS/chapter10-modules/require(master)]$ cat main.js
REQUIRE = require(__dirname+"/ejs-require.js");

var weekDay = REQUIRE("week-day");
console.log(weekDay.name(1));
console.log(weekDay.number("Monday"));
console.log(weekDay.name(2));
console.log(weekDay.number("Tuesday"));

var foo = REQUIRE("foo");
console.log(foo);
```

**Example of Execution**

```bash
[~/EJS/chapter10-modules/require(master)]$ node main.js 
Monday
1
Tuesday
2
hello
```

