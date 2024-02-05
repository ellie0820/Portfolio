import { Fragment } from 'react'

export const convertNewlineToBr = (text: string) => {
  return text
    .replace(/¥n/g, '\n')
    .split('\n')
    .map((t, i) => (
      <Fragment key={t + i}>
        {i !== 0 && <br />}
        {t}
      </Fragment>
    ))
}
