const skill = {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            title: 'Skill Logo',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        },
        {
            name: 'tag',
            title: 'Tag',
            description: 'Ex: Frontend, Backend, Language, Game Dev, Cybersecurity, etc.',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}

export default skill