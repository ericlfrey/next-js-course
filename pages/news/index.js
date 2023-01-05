import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The NewsPage</h1><ul>
        <li>
          <Link href='/news/nextjs-great'>NextJS is great</Link>
        </li>
        <li>
          <Link href='/news/something-else'>Something Else</Link>
        </li>
      </ul>
    </>
  )
}

export default NewsPage;
