import { Fragment, useEffect, useState } from 'react'

import { Button, List, Loader, Text, TextInput, Title } from '@mantine/core'
import axios from 'axios'

import { AdminLayout } from 'components/pages/admin/Layout/Layout'
import { AdminTitle } from 'components/pages/admin/Title/Title'

const Songs = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [adding, setAdding] = useState(false)
  const [loading, setLoading] = useState(true)

  const [song, setSong] = useState({
    artist: '',
    title: '',
  })

  useEffect(() => {
    async function getGuests() {
      const { data } = await axios.get<Song[]>('/api/songs')

      setSongs(data)
      setLoading(false)
    }

    getGuests()
  }, [])

  const listItems = songs.map((currentSong) => {
    return (
      <List.Item key={currentSong.id}>
        {currentSong.artist} - {currentSong.title}
      </List.Item>
    )
  })

  const handleChange = (e: any) => {
    setSong({
      ...song,
      [e.target.id]: e.target.value,
    })
  }

  const handleAddSong = async () => {
    setAdding(true)

    const dbResponse = await axios.post('/api/songs', {
      artist: song.artist,
      title: song.title,
    })

    setSongs([
      ...songs,
      {
        id: dbResponse.data.id,
        artist: song.artist,
        title: song.title,
      },
    ])

    setAdding(false)
    setSong({
      artist: '',
      title: '',
    })
  }

  return (
    <AdminLayout>
      <AdminTitle />
      <Text>¿Qué no puede faltar?</Text>
      <TextInput
        value={song.artist}
        id="artist"
        type="text"
        label="Artista"
        className="mt-4"
        onChange={handleChange}
      />
      <TextInput
        value={song.title}
        id="title"
        type="text"
        label="Canción"
        className="mt-2"
        onChange={handleChange}
      />
      <Button
        type="button"
        className="mt-4 mb-12"
        loading={adding}
        onClick={handleAddSong}
      >
        Agregar al dembow
      </Button>
      {!loading && songs.length ? (
        <Fragment>
          <Title order={2}>Playlist</Title>
          <List spacing="xs" size="lg" listStyleType="initial">
            {listItems}
          </List>
        </Fragment>
      ) : !loading && songs.length === 0 ? (
        <Fragment>
          <p>No hay canciones todavía...</p>
          <p className="text-2xl">😢</p>
        </Fragment>
      ) : (
        <Loader />
      )}
    </AdminLayout>
  )
}

export default Songs
