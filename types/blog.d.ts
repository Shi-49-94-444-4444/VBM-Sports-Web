export interface Blog {
    id: string;
    src: string;
    title: string;
    date?: string;
    description?: string;
    poster?: string;
}

export interface ListBlog {
    listItem: PostNewItem[]
}

export interface CreateBlogForm {
    title: string
}