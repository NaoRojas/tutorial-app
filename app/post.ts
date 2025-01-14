export type Post = {
  id: string
  title: string
}

export const getPosts = () => {
  const posts: Post[] = [
    { id: '1', title: 'First Post' },
    { id: '2', title: 'Second Post' },
    { id: '3', title: 'Third Post' },
  ]
  return posts
}