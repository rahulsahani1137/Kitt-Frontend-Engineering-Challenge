import SearchResult from '@/components/SearchResult'
import { Suspense } from 'react'
import Loading from '../loading'

const page = () => {
  return (
    <div className='px-20 md:px-60 grid grid-rows-1'>
      <Suspense fallback={<Loading />}>
        <SearchResult />
      </Suspense>
    </div>
  )
}

export default page