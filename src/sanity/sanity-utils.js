import { createClient, groq } from "next-sanity"

export async function getProjects() {
    const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'projects']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            githuburl,
            content,
            tags
        }`
    )
}

export async function getAchievements() {
    const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'achievements']{
            _id,
            _createdAt,
            metric,
            value,
            prefix,
            postfix
        }`
    )
}

export async function getAwards() {
    const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'awards']{
            _id,
            _createdAt,
            name,
            description,
            organization,
            'orgImage': orgimage.asset->url
        }`
    )
}

export async function getTestimonials() {
    const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'testimonials']{
            _id,
            _createdAt,
            name,
            company,
            'imageURL': imageurl.asset->url,
            feedback
        }`
    )
}

export async function getEducations() {
    const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'educations']{
            _id,
            _createdAt,
            degree,
            field,
            institution,
            'logo': logo.asset->url
        }`
    )
}

export async function getSkills() {
const client = createClient({
        projectId: 'g2mmzipj',
        dataset: 'production',
        apiVersion: '2023-12-25'
    })

    return client.fetch(
        groq`*[_type == 'skills']{
            _id,
            _createdAt,
            name,
            'logo': logo.asset->url,
            tag
        }`
    )
}