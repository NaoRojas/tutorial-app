import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'

export const loader: LoaderFunction = ({ params }: LoaderFunctionArgs) => {
  const { postId } = params
  console.log(postId)
  return { postId }
}

export default function Post() {
  const { postId } = useLoaderData()
  return (
    <div>
      <h1>Post</h1>
      {/* <p>Post ID: {postId}</p> */}
    </div>
  )
}
