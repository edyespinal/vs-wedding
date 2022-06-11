/* eslint-disable no-console */
import { Fragment, useState } from 'react'

import { Button, Group, Text } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { AdminLayout } from 'components/pages/admin/Layout/Layout'
import { AdminTitle } from 'components/pages/admin/Title/Title'
import { storage } from 'storage'

const SubirFotos = () => {
  const [droppedFiles, setDroppedFiles] = useState({
    qty: 0,
    dropped: false,
  })
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDropped = (files: any) => {
    setDroppedFiles({
      qty: files.length,
      dropped: true,
    })
  }

  const handleUpload = (e: any) => {
    e.preventDefault()

    const { files } = e.target[0]
    uploadFile(files)
  }

  const uploadFile = (filesList: any) => {
    if (!filesList) {
      return
    }

    const files: File[] = Array.from(filesList)

    for (const file of files) {
      const storageRef = ref(storage, `/fotos/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )

          setProgress(uploadProgress)
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((res) =>
            console.log(res)
          )

          setDone(true)
        }
      )
    }
  }

  const dropzoneChildren = () => (
    <Group
      position="center"
      spacing="xl"
      style={{ minHeight: 220, pointerEvents: 'none' }}
    >
      <div className="text-center">
        {!droppedFiles.dropped ? (
          <Fragment>
            <Text size="xl" inline>
              Selecciona las fotos que quieres compartir
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Sube cuantas quieras...
            </Text>
          </Fragment>
        ) : (
          <Fragment>
            <Text size="xl" inline>
              ¡{droppedFiles.qty} fotos!
              <p className="text-3xl">🥳</p>
            </Text>
            {done && (
              <Fragment>
                <Text size="xl">¡Gracias!</Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  ¡Ya queremos verlas!
                </Text>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </Group>
  )

  return (
    <AdminLayout>
      <AdminTitle />
      <Text align="center">
        Comparte con nosotros los momentos que has capturado
      </Text>
      <form onSubmit={handleUpload} className="z-[100]">
        <Dropzone
          onDrop={(files) => handleDropped(files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={10 * 1024 ** 2}
        >
          {() => dropzoneChildren()}
        </Dropzone>
        <div className="text-center">
          <Button type="submit" className="mt-8">
            Enviar
          </Button>
        </div>
      </form>
      <Text className="mt-8">{progress} %</Text>
    </AdminLayout>
  )
}

export default SubirFotos
