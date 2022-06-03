import { Fragment, useEffect, useRef, useState } from 'react'

import {
  Button,
  Center,
  Container,
  Loader,
  Modal,
  NumberInput,
  Table,
  TextInput,
  Title,
  UnstyledButton,
} from '@mantine/core'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

import { useStyles } from 'styles/pages/admin'

const Admin = () => {
  const [loading, setLoading] = useState(true)
  const [isGuestOpen, setGuestOpen] = useState(false)
  const [isAddGuestOpen, setAddGuestOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [guests, setGuests] = useState<Guest[]>([])
  const [totalGuests, setTotalGuests] = useState(0)
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)

  const nameRef = useRef<any>(null)
  const invitadosRef = useRef<any>(null)

  const [updateName, setUpdateName] = useState('')
  const [updateInvitados, setUpdateInvitados] = useState(0)

  const { classes } = useStyles()

  useEffect(() => {
    async function getGuests() {
      const { data } = await axios.get<Guest[]>('/api/guests')

      const confirmados = data.reduce(
        (sum, guest) => (sum += Number(guest.confirmados)),
        0
      )

      setGuests(data)
      setTotalGuests(confirmados)
      setLoading(false)
    }

    getGuests()
  }, [])

  const rows = guests?.map((guest) => (
    <tr key={guest.id} onClick={() => handleGuestModal(guest)}>
      <td>{guest.name}</td>
      <td className="text-center">{guest.confirmacion ? 'Sí' : 'No'}</td>
      <td className="text-center">{guest.confirmados}</td>
    </tr>
  ))

  const handleGuestModal = (guest: Guest) => {
    setSelectedGuest(guest)
    setUpdateName(guest.name)
    setUpdateInvitados(guest.invitados)
    setGuestOpen(true)
  }

  const handleAddGuest = async () => {
    setIsLoading(true)

    const name = nameRef.current.value
    const invitados = Number(invitadosRef.current.value)

    const dbResponse = await axios.post('/api/guests', {
      name,
      invitados,
    })

    const newGuest = {
      id: dbResponse.data.id,
      name,
      slug: slugify(name).toLowerCase(),
      invitados,
      confirmacion: false,
      confirmados: 0,
    }

    setGuests([...guests, newGuest])

    setAddGuestOpen(false)
    setIsLoading(false)
  }

  const handleNameChange = (e: any) => {
    setUpdateName(e.target.value)
  }

  const handleInvitadosChange = (e: any) => {
    setUpdateInvitados(e)
  }

  const handleUpdateGuest = async () => {
    setIsLoading(true)

    const updatedGuestList = guests.filter(
      (guest) => guest.id !== selectedGuest?.id
    )

    await axios.patch(`/api/guests/${selectedGuest?.slug}`, {
      name: updateName,
      invitados: updateInvitados,
    })

    setGuests(updatedGuestList)
    setAddGuestOpen(false)
    setIsLoading(false)
  }

  const handleDeleteGuest = async () => {
    setIsLoading(true)

    const updatedGuestList = guests.filter(
      (guest) => guest.id !== selectedGuest?.id
    )

    axios.delete(`/api/guests/${selectedGuest?.slug}`)

    setGuests(updatedGuestList)
    setAddGuestOpen(false)
    setIsLoading(false)
  }

  return (
    <Fragment>
      <Modal
        opened={isAddGuestOpen}
        title={<Title order={3}>Agregar Invitado</Title>}
        centered
        onClose={() => setAddGuestOpen(false)}
      >
        <div className="mb-2">
          <TextInput ref={nameRef} type="text" label="Nombre" />
        </div>
        <div className="mb-8">
          <NumberInput ref={invitadosRef} min={0} step={1} label="Invitados" />
        </div>
        <Center>
          <Button loading={isLoading} onClick={handleAddGuest}>
            Agregar
          </Button>
        </Center>
      </Modal>

      <Modal
        opened={isGuestOpen}
        title={<Title order={3}>Invitado</Title>}
        centered
        onClose={() => setGuestOpen(false)}
      >
        <div className="mb-2">
          <TextInput
            type="text"
            label="Nombre"
            value={updateName}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-8">
          <NumberInput
            step={1}
            label="Invitados"
            value={updateInvitados}
            onChange={handleInvitadosChange}
          />
        </div>

        <Link href={`/invitacion/${selectedGuest?.slug}`}>
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
      </Modal>

      <div className={classes.topImage}>
        <Image
          src="/img/leaves.svg"
          width={300}
          height={300}
          alt="Background decor"
        />
      </div>

      <div className={classes.bottomImg}>
        <Image
          src="/img/leaves.svg"
          width={400}
          height={400}
          alt="Background decor"
        />
      </div>

      <Container fluid className={`${classes.wrapper} p-40 md:p-20`}>
        <Center className="flex flex-col lg:flex-row mb-10">
          <Title
            style={{ fontFamily: 'Quicheflare' }}
            className="uppercase text-2xl md:text-4xl"
          >
            Victor
          </Title>
          <span className={`text-xl md:text-2xl font-bold ${classes.plus}`}>
            +
          </span>
          <Title
            style={{ fontFamily: 'Quicheflare' }}
            className="uppercase text-2xl md:text-4xl"
          >
            Stefanie
          </Title>
        </Center>

        <Container size="md">
          {!loading && guests.length ? (
            <Table highlightOnHover className="mb-6 cursor-pointer">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Confirmación</th>
                  <th>Confirmados</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
              <tfoot className="font-bold border-t-4 border-gray-300">
                <tr>
                  <td className="pl-2">Total</td>
                  <td></td>
                  <td className="text-center">{totalGuests}</td>
                </tr>
              </tfoot>
            </Table>
          ) : (
            <Center className={classes.loader}>
              {!loading && guests.length === 0 ? (
                <Title order={4}>No hay invitados</Title>
              ) : (
                <Loader size="lg" />
              )}
            </Center>
          )}
          <Button
            className={classes.addGuest}
            type="button"
            variant="filled"
            size="lg"
            onClick={() => setAddGuestOpen(true)}
          >
            Agregar invitado
          </Button>
        </Container>
      </Container>
    </Fragment>
  )
}

export default Admin
