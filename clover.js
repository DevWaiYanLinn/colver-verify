
var Clover = {
    rule: {
        required: function (field, val) {
            return { rule: "required", value: val ? false : `'The ${field} is required` }
        },
        mail: function (field, val) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return { rule: "mail", value: val.match(regex) ? false : `The  ${field}  does not match with mail format` }
        },
        password: function (field, val) {
            var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return { rule: "password", value: val.match(regex) ? false : `The ${field} must be minimun eight characters at least one number and one number` }
        },
        min: function (minLength) {
            return function (field, val) {
                return { rule: "min", value: val.length >= minLength ? false : `The ${field} must be minimun minLength characters` }
            }
        },
        max: function (maxLength) {
            return function (field, val) {
                return { rule: "max", value: val.length <= maxLength ? false : `The ${field} must be maximum   maxLength  characters` }
            }
        },
        enum: function (list) {
            return function (field, val) {
                return { rule: "enum", value: list.includes(val) ? false : `The ${field} must be include in ${list.join(',')}` }
            }
        },
        number: function ({ min, max } = {}) {
            return function (field, val) {
                if (!val instanceof Number) {
                    return { rule: "number", value: val ? false : `'The ${field} must be number` }
                }

                if (min) {
                    return { rule: "min", value: val >= min ? false : `The ${field} must be greater than or equal ${min}` }
                }

                if (max) {
                    return { rule: "max", value: val <= min ? false : `The ${field} must be less than or equal ${max}` }
                }
            }
        },
        custom: function (cb) {
            return function (field, val) {
                return { rule: "custom", value: cb(field, val) }
            }
        }
    },
    validate: function (data, fields, messages = {}) {
        var errors = {}
        for (var k in data) {
            for (var r of data[k]) {
                error = r(k, fields[k])
                if (error.value) {
                    errors[k] = `${k}.${error.rule}` in messages ? messages[`${k}.${error.rule}`] : error.value
                    break
                }
            }
        }
        return errors
    }
}

window.Clover = Clover
