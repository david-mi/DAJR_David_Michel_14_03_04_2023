import type { SelectData } from "../../pages/Home/data/types"

interface Props {
  id: string,
  name: string
  data: SelectData
}

const SelectMenu = ({ name, id, data }: Props) => {
  return (
    <select name={name} id={id}>
      {data.map(({ name, value }) => {
        return <option key={name} value={value || name}>{name}</option>
      })}
    </select>
  )
}

export default SelectMenu