export default defineNuxtPlugin(() => {
  function localized(data, locale) {
    if (!data) {
        return null;
    }
    // use current locale
    if (data.hasOwnProperty(locale)) {
      return data[locale];
    }
    // otherwise empty string
    return "";
  }

  return {
    provide: { localized },
  };
});
