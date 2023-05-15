import { FC, ReactElement } from 'react'

interface IProps {
  clearState: () => void
}

const Header: FC<IProps> = (): ReactElement => (
  <>
    <div>Header</div>
  </>
)

export { Header }
