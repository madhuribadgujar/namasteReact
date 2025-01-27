const User = props => {
  return (
    <div className="user-cart m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Name: {props.name}</h1>
      <h2>Location: Mumbai</h2>
      <h3>Contact: @madhubadgujar</h3>
    </div>
  )
}
export default User
