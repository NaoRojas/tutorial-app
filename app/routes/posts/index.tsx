import { useLoaderData } from '@remix-run/react'
import { getPosts, Post } from '~/post'

export function loader() {
  return getPosts()
}

export default function Posts() {
  const posts: Post[] = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
