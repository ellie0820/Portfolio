import styles from 'src/components/Heading/index.module.css'

interface Props {
  heading: string
  classNames?: string[]
}

export function Heading({ heading, classNames }: Props) {
  const classNameProps = [styles.Heading, ...(classNames || [])].join(' ')
  return <h2 className={classNameProps}>{heading}</h2>
}
