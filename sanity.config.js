import schemas from '@/sanity/schemas'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

const config = defineConfig({
    projectId: 'g2mmzipj',
    dataset: 'production',
    title: 'Portfolio Website',
    apiVersion: '2023-12-25',
    basePath: '/studio',
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})

export default config