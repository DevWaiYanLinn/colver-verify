
var Clover = {
    rule: {
        required: function (field, val) {
            return val ? false : 'The ' + field + ' is required'
        },
        mail: function (field, val) {
            var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return val.match(regex) ? false : 'The ' + field + ' does not match with mail format'
        },
        password: function (field, val) {
            var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return val.match(regex) ? false : 'The ' + field + ' must be minimun eight characters at least one number and one number'
        },
        min: function (minLength) {
            return function (field, val) {
                return val.length >= minLength ? false : 'The ' + field + ' must be minimun ' + minLength + ' characters'
            }
        },
        max: function (maxLength) {
            return function (field, val) {
                return val.length <= maxLength ? false : 'The ' + field + ' must be maximum ' + maxLength + ' characters'
            }
        },
        enum: function (list) {
            return function (field, val) {
                return list.includes(val) ? false : 'The ' + field + ' must be include in ' + list.join('')
            }
        },
    },
    validate: function (data, fields) {
        var errors = {}
        for (var k in data) {
            for (var r of data[k]) {
                error = r(k, fields[k])
                if (error) {
                    errors[k] = error
                    break
                }
            }
        }
        return errors
    }
}

window.Clover = Clover
