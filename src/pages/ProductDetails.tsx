import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import type { Product, ProductDetails } from "../types/products";

const size: Partial<ProductDetails>[] = [
  { sz: "XS" },
  { sz: "S" },
  { sz: "M" },
  { sz: "L" },
  { sz: "XL" },
  { sz: "2X" },
];

const colors: Partial<ProductDetails>[] = [
  { color: 'bg-gray-400' },
  { color: 'bg-red-400' },
  { color: 'bg-black' },
  { color: 'bg-yellow-400' },
  { color: 'bg-white' },
  { color: 'bg-blue-400' },
]

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        setData(data);
      } catch (error) {
        setErr(error instanceof Error ? error.message : String(error));
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);


  if (loading) return (<Loading />);
  if (err) return <>{err}</>;

  return (
    <>
      <section className="my-4 p-4 flex flex-col ">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2>Post</h2>
          </div>
          <NavLink to={"/"}>
            <button className="border-2 py-1 px-4 hover:bg-gray-300">
              Go Back
            </button>
          </NavLink>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-5 gap-3 items-center w-fit place-self-center my-8 p-8">
          {data && (
            <>
              <div
                key={data.id}
                className="col-span-2 flex flex-col justify-around items-center ring ring-gray-400 mx-auto"
              >
                <div className="bg-gray-200 w-full">
                  <img src={data.images[0]} className=" m-auto" />
                </div>
              </div>

              <div className="flex md:flex-col gap-4 ring-gray-400">
                {data.images.map((image, index) => (
                  <img key={index} src={image} className="w-30 h-30 mx-auto" />
                ))}
              </div>
              <div className="col-span-2 ring ring-gray-400 p-8 mx-auto">
                <div className="beatrice mb-4">
                  <p>{data.title}</p>
                  <p>{data.price}</p>
                </div>
                <p className="mb-4 text-gray-600">MRP. incl. of all taxes</p>
                <p className="beatrice">{data.description}</p>
                <div className="my-4">
                  <p>COLORS</p>
                  <ul className="flex items-center gap-2 mb-4">
                    {colors.map((item) => (
                      <li
                        key={item.color}
                        className={`w-8 h-8 cursor-pointer ${item.color}`}>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="my-4">
                  <p>SIZE</p>
                  <ul className="flex items-center gap-2 mb-4">
                    {size.map((item) => (
                      <li
                        key={item.sz}
                        className='w-8 h-8 border flex justify-center items-center rounded cursor-pointer bg-white text-black'>
                        {item.sz}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>FIND YOUR SIZE | MEASUREMENT GUIDE</p>
              </div>

            </>
          )}
        </div>
      </section >
    </>
  );
}
