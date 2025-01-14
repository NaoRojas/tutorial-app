import path from 'path'
import fs from 'fs/promises'
import fm from 'front-matter'

export type Post = {
  postId: string
  title: string
}

const postsPath = path.resolve('posts')

export const getPosts = async () => {
  const files = await fs.readdir(postsPath)
  return Promise.all(files.map(async filename => {
    const file = await fs.readFile(path.join(postsPath, filename), 'utf-8')
    const { attributes } = fm(file.toString())
    return {
      postId: filename.replace(/\.md$/, ''),
      title: attributes.title
    }
  }))
}