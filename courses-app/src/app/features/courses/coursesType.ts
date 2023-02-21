export interface Course {
    id: string
    title: string
    description: string
    creationDate: string //String for now due to mocked data will change to Date
    duration: number
    authors: string[]
}