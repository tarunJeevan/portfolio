const testimonial = {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'Image URL',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            options: [{ hotspot: true }]
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}

export default testimonial