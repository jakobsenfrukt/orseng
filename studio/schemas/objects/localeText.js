import {
  baseLanguage,
  localizedObjectOptions,
} from '../languages'

const localeText = {
  title: 'Tekst med oversettelser',
  name: 'localeText',
  ...localizedObjectOptions({ baseType: 'text' }),
}

export default localeText
