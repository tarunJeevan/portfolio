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
            name: 'tag',
            title: 'Tag',
            description: 'Ex: Frontend, Backend, Language, Game Dev, Cybersecurity, etc.',
            type: 'string',
        }
    ]
}

export default skill