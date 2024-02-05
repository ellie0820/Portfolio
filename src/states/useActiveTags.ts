import { atom, useAtom } from 'jotai'

const activeTagsAtom = atom<string[]>([])

const useActiveTags = () => {
  const [activeTags, setActiveTags] = useAtom(activeTagsAtom)
  const updateActiveTags = (id: string) => {
    if (id === 'reset') {
      setActiveTags([])
    } else {
      const newTags = activeTags.includes(id)
        ? activeTags.filter((tagId) => tagId !== id)
        : [...activeTags, id]
      setActiveTags(newTags)
    }
  }
  return { activeTags, updateActiveTags }
}
export { useActiveTags }
