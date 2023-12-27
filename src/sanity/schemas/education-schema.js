const education = {
    name: 'educations',
    title: 'Educations',
    type: 'document',
    fields: [
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'field',
            title: 'Field of Study',
            type: 'string'
        },
        {
            name: 'institution',
            title: 'Educational Institution',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            title: 'Institutional Logo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                    validation: Rule => Rule.required()
                }
            ],
            validation: Rule => Rule.required()
        }
    ]
}

export default education