"use client"

import {Input} from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { createTopic } from "@/app/actions"


const TopicCreator = () => {
  const [input, setInput] = useState<string>("")

const { mutate, error, isPending} = useMutation({
    mutationFn:  createTopic,

  })

return (
<div className="mt-12 flex flex-col gap-2">
  <div className="flex gap-2">
    <Input value={input}
     onChange={(e) => setInput(e.target.value)}
     className="bg-white min-w-64" 
     placeholder="Enter Topic here"/>
    <Button disabled={isPending}
     onClick={() => mutate({ topicName: input})}
     >Create
     </Button>
  </div>
  {error ? <div className="text-red-500">{error.message}</div> : null}
</div>
 )
}

export default TopicCreator