# Clover &#x2618; (minimal javascript library for validation)
### Minimalist 

# Define the rule
```js
var rule = {
        name: [Clover.rule.required, Clover.rule.min(5), Clover.rule.max(30)],
        email: [Clover.rule.required, Clover.rule.mail],
        dob: [Clover.rule.required],
        nrc: [Clover.rule.required],
        course: [Clover.rule.required],
};
```

# Validate the data
```js
var data = new FormData(e.target);
var validationErrors = Clover.validate(rule, {});
var validationErrors = Clover.validate(rule, Object.fromEntries(data));
console.log(validationErrors)

```

## custom rule
```js
 var messages = {
        "name.required": "The name must not be empty."
    }
```
