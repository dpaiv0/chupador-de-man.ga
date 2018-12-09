const fetchLocale = (locale) => {
  locale = locale || localStorage.locale || 'en'
  localStorage.setItem('locale', locale)
  applyLocaleChanges(locale)
}

const applyLocaleChanges = (locale) => {
  const localeStrings = strings[locale]
  const objects = Object.keys(localeStrings)
  for (var i in objects) {
    document.getElementById(objects[i]).textContent = localeStrings[objects[i]]
  }
}

const strings = {
  "en": {
    "page-title": "yo what the fuck",
    "og-title": "yo what the fuck",
    "title": "shit website for a shit person",
    "subtitle": "contact me on discord for more stuff about me: Huffler#3288",
    "switchblade": "shit discord bot i maintain",
    "twitter": "random shit i say"
  },
  "pt": {
    "page-title": "porra mas q merda",
    "og-title": "porra mas q merda",
    "title": "website de merda para uma pessoa de merda",
    "subtitle": "contacta me no discord para mais coisas sobre mim: Huffler#3288",
    "switchblade": "bot de merda pro discord que eu mantenho",
    "twitter": "merdas aleatorias que eu digo"
  },
  "pt-az": {
    "page-title": "prr mas q mrd",
    "og-title": "prr mas q mrd",
    "title": "site d mrd p uma pessoa d mrd",
    "subtitle": "manda msg no dc p sbrs mais sbr mim: Huffler#3288",
    "switchblade": "bot d mrd q fiz",
    "twitter": "mrds atoa q digo"
  }
}
