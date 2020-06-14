import * as RNLocalize from "react-native-localize"
import i18n from "i18n-js"
const { LANG } = require("../config/flavor")

const ua = require("./ua")
const ru = require("./ru")

i18n.fallbacks = true
i18n.translations = { ua, ru }

const fallback = { languageTag: LANG, isRTL: false }

const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback
i18n.locale = languageTag
