import { useEffect, useState } from "react"
import Input from "../components/ui/Input"
import type NavProps from "../types/headertype"
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import type { Product } from "../types/products";

const categories: Partial<NavProps>[] = [
  { label: 'MEN', },
  { label: 'WOMEN', },
  { label: 'KIDS', },
]

export default function Home() {
  const [posts, setPosts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        // const response = await fetch('https://dummyjson.com/products');
        const response = await fetch("https://api.escuelajs.co/api/v1/products/");
        const data: Product[] = await response.json();
        setPosts(data);
      } catch (error) {
        setErr('Failed to fetch products' + error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <Loading />
  if (err) return <div>{err}</div>


  return (
    <section className="container mx-auto py-4">
      <dl>
        {categories.map((category) =>
          <dt>
            {category.label}
          </dt>
        )}
      </dl>
      <div className="w-2/6 max-sm:w-full my-4">
        <Input
          label="Search"
          name="search"
          holder='search for products'
          type="text"
          value={search}
          change={(e) => setSearch(e.target.value)} />
      </div>
      <div className="w-2/6 max-sm:w-full">
        <h1>NEW COLLECTION</h1>
        <p>Summer {new Date().getFullYear()}</p>
      </div>
      <div> </div>
      <div className="text-center my-4">
        <h2 className="beatrice">Our Approach to fashion design</h2>
        <p>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
      </div>
      <div className="flex flex-wrap justify-center my-4 gap-2">
        {posts.map((post) =>
          <NavLink to={`/productDetails/${post.id}`}>
          <dd key={post.id} className="w-52 bg-white">
            <img src={post.images[0]} />
            {post.title}
            <div className="flex justify-between">
              <h6>{post.title}</h6>
              <h6>{post.price}</h6>
            </div>
          </dd>
        </NavLink>
        )}
      </div>
    </section>
  )
}
