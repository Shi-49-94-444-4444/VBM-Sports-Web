export interface Blog {
    id: number;
    src: string;
    date: string;
    title: string;
}

export interface ListBlog {
    listItem: PostNewItem[]
}