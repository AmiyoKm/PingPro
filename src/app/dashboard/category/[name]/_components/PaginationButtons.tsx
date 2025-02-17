import React from "react"
import { Button } from "@/components/ui/button"
import { Table } from "@tanstack/react-table"
import { Event } from "@prisma/client"

const PaginationButtons = ({
  table,
  isFetching,
}: {
  table: Table<Event>
  isFetching: boolean
}) => (
  <div className="flex items-center justify-end space-x-2 py-4">
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage() || isFetching}
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage() || isFetching}
    >
      Next
    </Button>
  </div>
)

export default PaginationButtons
