import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopicCreator from "@/components/TopicCreator";
import { Star } from "lucide-react";
import { redis } from "@/lib/redis";

export default async function Home() {
  
  const servedRequest = await redis.get("served-requests");

  return (
    <section className="min-h-screen bg-grid-zinc-50">
    <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
 
     <div className="hidden lg:block absolute inset-0 top-8">
        {/* circle */}
     </div>
     <div className="px-6 lg:px-0 lg:pt-4">
       <div className="relative mx-auto text center flex flex-col items-center">
        <h1 className="relative leading-snug w-fit tracking-tight text-blance mt-16
        font-bold text-grey-900 text-5xl md:text-6xl">
          What do you <span className="whitespace-nowarp">th 
          <span className="relative">
            i{" "}
            <span className="absolute inset-x-0 -top-2">
              <Icons.brain className="h-8 w-8 md:h-8 md:w-8" />
            </span>
            </span>
            nk
          </span> about...
        </h1>
       </div>  
     </div>
     <TopicCreator />
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
        <div className="flex flex-col gap-1 justify-between
        items-center sm:items-start">
          <div className="flex gap-0.5">
            <Star  className="h-4 w-4 text-green-500 fill-green-500"/>
            <Star  className="h-4 w-4 text-green-500 fill-green-500"/>
            <Star  className="h-4 w-4 text-green-500 fill-green-500"/>
            <Star  className="h-4 w-4 text-green-500 fill-green-500"/>
            <Star  className="h-4 w-4 text-green-500 fill-green-500"/>
          </div>
          <p>
            <span className="font-semibold">
              {Math.ceil(Number(servedRequest) / 10) * 10}
            </span>{" "}
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
   </section>
  )
}
