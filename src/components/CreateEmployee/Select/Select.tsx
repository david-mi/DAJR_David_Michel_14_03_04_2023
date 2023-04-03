import type { SelectData } from "../../../pages/Home/data/types"

interface Props {
  id: string,
  name: string
  data: SelectData
}

const Select = ({ name, id, data }: Props) => {
  return (
    <select name={name} id={id} required>
      {data.map(({ name, value }) => {
        return <option key={name} value={value || name}>{name}</option>
      })}
    </select>
  )
}

export default Select