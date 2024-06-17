# Clover &#x2618; (minimal javascript library for validation)
Minimalistic JavaScript library where developers can define a set of customizable validation rules regarding users' input.

# Define the rule
Here, you can define a set of rules to strict users' input; the sample code shown below dictates that a user must enter their name and it has to be between a length of 5 to 30 characters. 
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
var validationErrors = Clover.validate(rule, Object.fromEntries(data));
console.log(validationErrors)

```

## custom rule
```js
 var messages = {
        "name.required": "The name must not be empty."
    }
```
