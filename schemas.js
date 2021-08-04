const BaseJoi = require('joi')
const sanitizeHtml = require('sanitize-html')

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
})

const Joi = BaseJoi.extend(extension)

module.exports.toDoSchema = Joi.object({
    priority: Joi.number(),
    task: Joi.string().escapeHTML(),
    complete: Joi.boolean(),
    author: Joi.number(),
})

module.exports.userSchema = Joi.object({
    username: Joi.string().min(3).max(30).escapeHTML().required(),
    password: Joi.string().min(5).max(30).escapeHTML().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).escapeHTML().required(),
}).required()
