export default function List(props) {
const users = props.users.map(x => <p key={x.id}>{x.userName} {x.age}</p>)
  return (
    <div>
      {users}
    </div>
  )
}