const achievement = {
    name: 'achievements',
    title: 'Achievements',
    type: 'document',
    fields: [
        {
            name: 'metric',
            title: 'Metric',
            description: 'Ex: Projects, Awards, Years of Experience, etc.',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'value',
            title: 'Value',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'prefix',
            title: 'Prefix',
            description: 'Ex: ~, <, >, etc.',
            type: 'string'
        },
        {
            name: 'postfix',
            title: 'Postfix',
            description: 'Ex: +, years, Hundred, Thousand, Million, etc.',
            type: 'string'
        }
    ]
}

export default achievement