import { Fragment, useRef, useState } from 'react'

import { TextInput, NumberInput, Center, Button } from '@mantine/core'
import axios from 'axios'
import slugify from 'slugify'

type Props = {
  // eslint-disable-next-line no-unused-vars
  addGuest: (guest: Guest) => void
}

const AddGuest = ({ addGuest }: Props) => {
  const [isSaving, setIsSaving] = useState(false)

  const nameRef = useRef<any>(null)
  const invitadosRef = useRef<any>(null)

  const handleAddGuest = async () => {
    setIsSaving(true)

    const { value: name } = nameRef.current
    const { value: invitados } = invitadosRef.current

    const dbResponse = await axios.post('/api/guests', {
      name,
      invitados,
    })

    setIsSaving(false)

    addGuest({
      id: dbResponse.data.id,
      name,
      slug: slugify(name).toLowerCase(),
      invitados,
      confirmacion: false,
      confirmados: 0,
    })
  }

  return (
    <Fragment>
      <div className="mb-2">
        <TextInput ref={nameRef} type="text" label="Nombre" />
      </div>
      <div className="mb-8">
        <NumberInput ref={invitadosRef} min={0} step={1} label="Invitados" />
      </div>
      <Center>
        <Button loading={isSaving} onClick={handleAddGuest}>
          Agregar
        </Button>
      </Center>
    </Fragment>
  )
}

export { AddGuest }
