import { useEffect, useState } from 'react'

import { Button, Center, Loader, Modal, Title } from '@mantine/core'
import axios from 'axios'

import { AddGuest } from 'components/pages/admin/AddGuest/AddGuest'
import { AdminLayout } from 'components/pages/admin/Layout/Layout'
import { GuestsTable } from 'components/pages/admin/Table/Table'
import { AdminTitle } from 'components/pages/admin/Title/Title'
import { UpdateGuest } from 'components/pages/admin/UpdateGuest/UpdateGuest'
import { useStyles } from 'styles/pages/admin'

const Admin = () => {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedGuest, setSelectedGuest] = useState({} as Guest)
  const [modal, setModal] = useState({
    open: false,
    newGuest: true,
  })

  const { classes } = useStyles()

  useEffect(() => {
    async function getGuests() {
      const { data } = await axios.get<Guest[]>('/api/guests')

      setGuests(data)
      setLoading(false)
    }

    getGuests()
  }, [])

  const handleGuestModal = (guest: Guest) => {
    setSelectedGuest(guest)
    setModal({ open: true, newGuest: false })
  }

  const handleAddGuest = async (newGuest: Guest) => {
    setGuests([...guests, newGuest])
    setModal({ ...modal, open: false })
  }

  const handleUpdateGuest = async (updatedGuest: Guest) => {
    const updatedGuestList = guests.map((guest) => {
      if (guest.id !== updatedGuest.id) {
        return guest
      }

      return updatedGuest
    })

    setGuests(updatedGuestList)
    setModal({ ...modal, open: false })
  }

  const handleDeleteGuest = async (deletedGuest: Guest) => {
    const updatedGuestList = guests.filter(
      (guest) => guest.id !== deletedGuest.id
    )

    setGuests(updatedGuestList)
    setModal({ ...modal, open: false })
  }

  return (
    <AdminLayout>
      <Modal
        opened={modal.open}
        title={<Title order={3}>Invitado</Title>}
        centered
        onClose={() => setModal({ ...modal, open: false })}
      >
        {modal.newGuest && selectedGuest ? (
          <AddGuest addGuest={handleAddGuest} />
        ) : (
          <UpdateGuest
            guest={selectedGuest}
            updateGuest={handleUpdateGuest}
            deleteGuest={handleDeleteGuest}
          />
        )}
      </Modal>

      <AdminTitle />

      {!loading && guests.length ? (
        <GuestsTable guests={guests} handleGuest={handleGuestModal} />
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
        onClick={() => setModal({ open: true, newGuest: true })}
      >
        Agregar invitado
      </Button>
    </AdminLayout>
  )
}

export default Admin
