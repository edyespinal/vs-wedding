/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react'

import { TextInput, NumberInput, Button, UnstyledButton } from '@mantine/core'
import axios from 'axios'
import Link from 'next/link'
import slugify from 'slugify'

import { useStyles } from './styles'

type Props = {
  guest: Guest
  updateGuest: (guest: Guest) => void
  deleteGuest: (guest: Guest) => void
}

const UpdateGuest = ({ guest, updateGuest, deleteGuest }: Props) => {
  const [values, setValues] = useState({
    name: guest.name,
    invitados: guest.invitados,
  })

  const { classes } = useStyles()

  const handleNameChange = (e: any) => {
    setValues({ ...values, name: e.target.value })
  }

  const handleInvitadosChange = (e: any) => {
    setValues({ ...values, invitados: e })
  }

  const handleUpdateGuest = async () => {
    const slug = slugify(values.name).toLowerCase()

    await axios.patch(`/api/guests/${guest.slug}`, {
      name: values.name,
      invitados: values.invitados,
      slug,
    })

    updateGuest({
      ...guest,
      name: values.name,
      invitados: values.invitados,
      slug,
    })
  }
  const handleDeleteGuest = async () => {
    await axios.delete(`/api/guests/${guest.slug}`)

    deleteGuest(guest)
  }

  return (
    <Fragment>
      <div className="mb-2">
        <TextInput
          id="name"
          type="text"
          label="Nombre"
          value={values.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-8">
        <NumberInput
          id="invitados"
          step={1}
          label="Invitados"
          value={values.invitados}
          onChange={handleInvitadosChange}
        />
      </div>

      <Link href={`/invitacion/${guest.slug}`}>
        <a target="_blank">
          <Button fullWidth>Ver invitación</Button>
        </a>
      </Link>
      <div className="flex justify-around mt-8">
        <UnstyledButton
          className={classes.updateGuestButton}
          onClick={handleUpdateGuest}
        >
          Actualizar
        </UnstyledButton>
        <UnstyledButton
          className={classes.deleteGuestButton}
          onClick={handleDeleteGuest}
        >
          Borrar
        </UnstyledButton>
      </div>
    </Fragment>
  )
}

export { UpdateGuest }
