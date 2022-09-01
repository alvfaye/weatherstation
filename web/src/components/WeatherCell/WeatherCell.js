export const QUERY = gql`
  query FindWeatherQuery($id: Int!) {
    weather: weather(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ weather }) => {
  return <div>{JSON.stringify(weather)}</div>
}
