import { Form, TextField, Submit } from '@redwoodjs/forms'

// const apikey = process.env.REDWOOD_ENV_OPEN_WEATHER_API_KEY
const HomePage = () => {
const onSubmit = (data) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=66952,us&appid=b76dcd7e89746c4fd4baa3c11b0b0553`
  )
    .then((response) => response.json())
    .then((json) => console.info(json))
}

  return (
    <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
      <TextField
        name="zip"
        placeholder="Zip code"
        maxLength="5"
        validation={{ required: true, pattern: /^\d{5}$/ }}
      />
      <Submit>Go</Submit>
    </Form>
  )
}

export default HomePage
