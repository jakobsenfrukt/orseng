import { localizedObjectOptions } from '../languages'

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  ...localizedObjectOptions({ baseType: 'string' }),
}

export default localeString
