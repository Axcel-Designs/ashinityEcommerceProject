import { useEffect, useState } from "react"
import Input from "../components/ui/Input"
import type NavProps from "../types/headertype"
import Loading from "./Loading";
import { NavLink } from "react-router-dom";
import type { Product } from "../types/products";
import Button from "../components/ui/Button";

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
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
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
          change={(e) => setSearch(e.target.value)}
          />
      </div>
      <div className="flex flex-wrap justify-around my-4">
        <div className=" max-sm:w-full flex flex-col justify-between">
          <div>
            <h1>NEW COLLECTION</h1>
            <h3 className="text-gray-400">Summer {new Date().getFullYear()}</h3>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="grow">
              <Button label='SHOP NOW' />
            </ div>
            <div className="flex gap-4 ">
              <div className=" flex justify-around items-center ring-2 p-2 text-gray-300">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className=" flex justify-around items-center ring-2 p-2 ring-gray-600">
                <i className="fa-solid fa-angle-right"></i>
              </ div>
            </ div>
          </div>
        </div>
        <div className="grow flex flex-wrap justify-around my-4 gap-2">
          {posts.map((post) =>
            <NavLink to={`/productDetails/${post.id}`}>
              <dd key={post.id} className="w-52">
                <img src={post.images[0]} className="ring ring-gray-600" />
                {post.title}
                <div className="flex justify-between">
                  <h4>{post.title}</h4>
                  <h4>{post.price}</h4>
                </div>
              </dd>
            </NavLink>
          ).sort(() => Math.random() - 0.5).slice(0, 2)}</div>
      </div>
      <div className="my-4">
        <h1>NEW THIS WEEK</h1>
        <div className="flex flex-wrap justify-around my-4 gap-2">
          {posts.map((post) =>
            <NavLink to={`/productDetails/${post.id}`}>
              <dd key={post.id} className="w-52">
                <img src={post.images[0]} className="ring ring-gray-600" />
                {post.title}
                <div className="flex justify-between">
                  <h4>{post.title}</h4>
                  <h4>{post.price}</h4>
                </div>
              </dd>
            </NavLink>
          ).sort(() => Math.random() - 0.5).slice(0, 4)}
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-4 ">
            <div className=" flex justify-around items-center ring-2 p-2 text-gray-300">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className=" flex justify-around items-center ring-2 p-2 ring-gray-600">
              <i className="fa-solid fa-angle-right"></i>
            </ div>
          </ div>
        </div>
      </div>
      <div className="my-4">
        <h1>XIV COLLECTION {new Date().getFullYear()}</h1>
        <div className="flex flex-wrap justify-around my-4 gap-2">
          {posts.map((post) =>
            <NavLink to={`/productDetails/${post.id}`}>
              <dd key={post.id} className="w-52">
                <img src={post.images[0]} className="ring ring-gray-600" />
                {post.title}
                <div className="flex justify-between">
                  <h4>{post.title}</h4>
                  <h4>{post.price}</h4>
                </div>
              </dd>
            </NavLink>
          ).sort(() => Math.random() - 0.5).slice(0, 4)}</div>
      </div>
      <div className="text-center my-4">
        <h2 className="beatrice">Our Approach to fashion design</h2>
        <p>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
      </div>
      <div className="flex flex-wrap justify-around my-4 gap-2">
        {posts.map((post) =>
          <NavLink to={`/productDetails/${post.id}`}>
            <dd key={post.id} className="w-52 ">
              <img src={post.images[0]} className="ring ring-gray-600" />
              {post.title}
              <div className="flex justify-between">
                <h4>{post.title}</h4>
                <h4>{post.price}</h4>
              </div>
            </dd>
          </NavLink>
        ).sort(() => Math.random() - 0.5).slice(0, 4)}
      </div>
    </section>
  )
}
