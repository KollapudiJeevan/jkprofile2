import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import { NavBar } from "../components/NavBar";
export const Blogs = ({blogs}) => {
    const client = createClient({
        projectId:"l0t8phd3",
        dataset:"production",
        useCdn:false
      });
      const builder = imageUrlBuilder(client)
     
  return <div>
    <div><NavBar/></div>
    
       <div className="bg-grey-50" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          
          <h4 className="pt-16 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((item) => {

              return  <Link key={item.slug.current} href={"/blog/"+item.slug.current} className="shadow">
              <div><div style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() ||'/assets/img/post-01.png'})` }}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                   className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-[#5540ae] px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                <span className="block font-body text-lg font-semibold text-black">{item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
          </div>
        </div>
      </div>


  </div>;
};
export default Blogs

export async function getServerSideProps() {
    const client = createClient({
      projectId:"l0t8phd3",
      dataset:"production",
      useCdn:false
    });
  const query = '*[_type=="Blog"]';
  const blogs = await client.fetch(query);
  return{
    props: {
      blogs
    }
  }
  }