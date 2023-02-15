export default function List(props) {
const users = props.users.map(x => <p>{x.userName} {x.age}</p>)
  return (
    <div>
      {users}
    </div>
  )
}