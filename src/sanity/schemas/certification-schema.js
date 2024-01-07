const certification = {
    name: 'certifications',
    title: 'Certifications',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Certification Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'organization',
            title: 'Organization',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'orgLogo',
            title: 'Organization Logo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'date',
            title: 'Issued Date',
            type: 'date',
            validation: Rule => Rule.required()
        }
    ]
}

export default certification