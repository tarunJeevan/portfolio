const experience = {
    name: 'experiences',
    title: 'Work Experiences',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Position',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'employer',
            title: 'Employer',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'duration',
            title: 'Employment Duration',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'feedback',
            title: 'Testimonials',
            type: 'array',
            of: [{ type: 'testimonials' }]
        }
    ]
}

export default experience