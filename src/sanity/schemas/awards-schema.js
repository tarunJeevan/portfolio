const award = {
    name: 'awards',
    title: 'Awards',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Award Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Award Description',
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
            name: 'orgimage',
            title: 'Organization Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }
    ]
}

export default award