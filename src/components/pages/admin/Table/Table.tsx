import { useEffect, useState } from 'react'

import { Table } from '@mantine/core'

type Props = {
  guests: Guest[]
  // eslint-disable-next-line no-unused-vars
  handleGuest: (guest: Guest) => void
}

const GuestsTable = ({ guests, handleGuest }: Props) => {
  const [confirmados, setConfirmados] = useState(0)
  const [invitados, setInvitados] = useState(0)

  useEffect(() => {
    setConfirmados(() =>
      guests.reduce((total, guest) => (total += +guest.confirmados), 0)
    )

    setInvitados(() =>
      guests.reduce((total, guest) => (total += +guest.invitados), 0)
    )
  }, [guests])

  const rows = guests.map((guest) => {
    return (
      <tr key={guest.id} onClick={() => handleGuest(guest)}>
        <td>{guest.name}</td>
        <td className="text-center">{guest.confirmacion ? 'Sí' : 'No'}</td>
        <td className="text-center">
          {guest.confirmados} / {guest.invitados}
        </td>
      </tr>
    )
  })

  return (
    <div className="lg:w-1/2 xl:w-1/2 z-[50]">
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
            <td className="text-center">
              {confirmados} / {invitados}
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export { GuestsTable }
