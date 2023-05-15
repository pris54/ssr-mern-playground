import { FC, ReactElement } from 'react'

interface IProps {
  clearState: () => void
}

const GenericContent: FC<IProps> = (): ReactElement => (
  <>
    <div>Generic content</div>
  </>
)

export { GenericContent }
