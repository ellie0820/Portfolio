import data from 'src/config/data'
import styles from 'src/components/Portfolio/index.module.css'
import { Button } from 'src/components/Button'
import { Heading } from 'src/components/Heading'
import { Tiles } from 'src/components/Portfolio/Tiles'
import { TagWithTextGroup } from 'src/components/TagWithTextGroup'
import { useMemo, useState } from 'react'
import { useActiveTags } from 'src/states/useActiveTags'

export function Portfolio() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { activeTags, updateActiveTags } = useActiveTags()
  const handleFilterItems = (tags: string[]) => {
    if (tags?.length === 0) {
      return data.portfolio.items
    }
    return data.portfolio.items.filter((item) => {
      const itemTags = item.contents
        .filter((content) => content.id === 'tags')
        .map((content) => content.tags)[0]
      return activeTags?.every((activeTag) => itemTags?.includes(activeTag))
    })
  }
  const filteredItems = useMemo(() => handleFilterItems(activeTags), [activeTags])

  const handleShow = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const handleTagClick = (clickedId: string) => {
    updateActiveTags(clickedId)
  }

  return (
    <section className={['u-mobile-mb-l', 'u-desktop-mb-l'].join(' ')}>
      <Heading heading={data.portfolio.heading} classNames={['u-mobile-mb-s u-desktop-mb-m']} />
      <p className={['u-align-center u-mobile-mb-m u-desktop-mb-s'].join(' ')}>
        {data.portfolio.description}
      </p>
      <div className={[styles.Filter].join(' ')}>
        <div className={[styles.Filter_Button].join(' ')}>
          <Button
            className='Filter'
            ariaLabel='Filter'
            isActive={isFilterOpen}
            onClick={handleShow}
          />
        </div>
        <div className={[styles.Filter_Container, isFilterOpen && styles.isOpen].join(' ')}>
          <TagWithTextGroup tags={data.filter} type='Button' onFilterButtonClick={handleTagClick} />
        </div>
      </div>
      <div className={[styles.TilesWrapper].join(' ')}>
        {filteredItems.length === 0 ? (
          <div className={[styles.No_Data].join(' ')}>NO DATA (; _ ;)</div>
        ) : (
          <Tiles items={filteredItems} />
        )}
      </div>
    </section>
  )
}
