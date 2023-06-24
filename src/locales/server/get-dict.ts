import { dictionaries } from './dict'

export const getDict = async (locale: string) => dictionaries[locale as keyof typeof dictionaries]()
