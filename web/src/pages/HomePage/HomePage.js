import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
// const apikey = process.env.REDWOOD_ENV_OPEN_WEATHER_API_KEY
const HomePage = () => {
  const [weather, setWeather] = useState()
const onSubmit = (data) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${data.zip},us&appid=b76dcd7e89746c4fd4baa3c11b0b0553`
  )
    .then((response) => response.json())
    .then((json) => setWeather(json))
}

  return (
    <>
    <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
      <TextField
        name="zip"
        placeholder="Zip code"
        maxLength="5"
        validation={{ required: true, pattern: /^\d{5}$/ }}
      />
      <Submit>Go</Submit>
    </Form>
      {weather && JSON.stringify(weather)}
      </>
  )
}

export default HomePage
