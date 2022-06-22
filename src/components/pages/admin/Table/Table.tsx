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
      <div className="flex justify-between items-center px-8 py-4 font-bold text-md mb-8 mr-8 border border-2 border-slate-300 rounded">
        <span>Confirmados:</span>{' '}
        <span className="text-lg">
          {confirmados} / {invitados}
        </span>
      </div>
      <Table highlightOnHover className="mb-6 cursor-pointer">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Confirmación</th>
            <th>Confirmados</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  )
}

export { GuestsTable }
