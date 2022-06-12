import { useEffect, useState } from 'react'

import { Center, Container, Image, Loader } from '@mantine/core'
import { getDownloadURL, getStorage, list, ref } from 'firebase/storage'
import { GetServerSidePropsContext } from 'next'

import { AdminLayout } from 'components/pages/admin/Layout/Layout'
import { AdminTitle } from 'components/pages/admin/Title/Title'
import { useInfiniteScroll } from 'hooks/useInfiniteScroll'
import { app } from 'storage'

interface Props {
  urls: string[]
  nextPageToken?: string
}

const SubirFotos = ({
  urls: propsUrls,
  nextPageToken: firstBatchToken,
}: Props) => {
  const [urls, setUrls] = useState(propsUrls)
  const [nextBatchToken, setNextBatchToken] = useState(firstBatchToken)
  const [isEndOfPage, setIsEndOfPage] = useInfiniteScroll()

  const storage = getStorage(app)
  const listRef = ref(storage, 'fotos')

  const fetchMoreUrls = async (nextPageToken: string | undefined) => {
    if (nextPageToken) {
      const nextBatch = await list(listRef, {
        maxResults: 10,
        pageToken: nextPageToken,
      })

      const promises = nextBatch.items.map((imageRef) =>
        getDownloadURL(imageRef)
      )
      const batchUrls = await Promise.all(promises)

      setUrls([...urls, ...batchUrls])
      setNextBatchToken(nextBatch.nextPageToken)
      setIsEndOfPage(false)
    }
  }

  useEffect(() => {
    if (isEndOfPage && nextBatchToken) {
      fetchMoreUrls(nextBatchToken)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEndOfPage])

  return (
    <AdminLayout>
      <AdminTitle />
      <Container
        size="xl"
        className="mb-32 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
      >
        {urls.length &&
          urls.map((url) => (
            <Image key={url} src={url} alt="Foto" className="mb-2" />
          ))}
      </Container>
      <Center>{isEndOfPage && nextBatchToken && <Loader size="xl" />}</Center>
    </AdminLayout>
  )
}

export default SubirFotos

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const storage = getStorage(app)
  const listRef = ref(storage, 'fotos')
  const firstBatch = await list(listRef, { maxResults: 10 })

  const promises = firstBatch.items.map((imageRef) => getDownloadURL(imageRef))
  const urls = await Promise.all(promises)

  return {
    props: { urls, nextPageToken: firstBatch.nextPageToken },
  }
}
