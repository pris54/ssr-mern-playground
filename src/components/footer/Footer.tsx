import { FC, ReactElement } from 'react'

interface IProps {
  clearState: () => void
}

const Footer: FC<IProps> = (): ReactElement => (
  <>
    <div>Footer</div>
  </>
)

export { Footer }
