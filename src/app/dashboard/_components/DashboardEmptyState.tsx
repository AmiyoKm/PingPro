import { client } from '@/app/lib/client'
import { Card } from '@/components/Card'
import CreateEventCategoryModel from '@/components/CreateEventCategoryModel'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

const DashboardEmptyState = () => {
    const queryClient = useQueryClient()
    const {mutate : insertQuickstartCategories , isPending} = useMutation({
        mutationFn : async()=> {
            return (await client.category.insertQuickstartCategories.$post()).json()
        },
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey : ["user-event-categories"]})
        }
    })
  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
    <div className="flex justify-center w-full">
      <Image
        src="/brand-asset-wave.png"
        alt="No categories"
        className=" -mt-24"
        width={300}
        height={300}
      />
    </div>

    <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
      No Event Categories Yet
    </h1>

    <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
      Start tracking events by creating your first category.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button
        variant="outline"
        className="flex items-center space-x-2 w-full sm:w-auto"
        onClick={() => insertQuickstartCategories()}
        disabled={isPending}
      >
        <span className="size-5">🚀</span>
        <span>{isPending ? "Creating..." : "Quickstart"}</span>
      </Button>

      <CreateEventCategoryModel containerClassName="w-full sm:w-auto">
        <Button className="flex items-center space-x-2 w-full sm:w-auto">
          <span>Add Category</span>
        </Button>
      </CreateEventCategoryModel>
    </div>
  </Card>
  )
}

export default DashboardEmptyState