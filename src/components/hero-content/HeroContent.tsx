import { FC, ReactElement } from 'react'

interface IProps {
  clearState: () => void
}

const HeroContent: FC<IProps> = (): ReactElement => (
  <>
    <div>Hero content</div>
  </>
)

export { HeroContent }
