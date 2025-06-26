import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'
import { getAlpha2Code } from 'i18n-iso-countries'

countries.registerLocale(enLocale)

export function getFlagUrl(countryName: string): string | undefined {
    const code = getAlpha2Code(countryName, 'en')
    if (!code) console.warn('Missing ISO code for country:', countryName)
    return code ? `https://flagcdn.com/w40/${code.toLowerCase()}.png` : undefined
}

const placeholder = 'https://flagcdn.com/w40/un.png'

const fallbackMap: Record<string, string> = {
    'American': 'US',
    'British': 'GB',
    'Unknown': '',
    'Middle Eastern': 'AE',
    'European': 'EU',
    'Portuguese': 'PT',
    'Turkish': 'TR',
    'Vietnamese': 'VN',
    'Jamaican': 'JM',
    'Dutch': 'NL',
    'Egyptian': 'EG',
    'Chinese': 'CN',
    'Croatian': 'HR',
    'Canadian': 'CA',
    'Indian': 'IN',
    'Irish': 'IE',
    'Japanese': 'JP',
    'Mexican': 'MX',
    'Thai': 'TH',
    'Moroccan': 'MA',
    'Polish': 'PL',
    'Russian': 'RU',
    'Spanish': 'ES',
    'Italian': 'IT',
    'French': 'FR',
    'Greek': 'GR',
    'Korean': 'KR',
    'Malaysian': 'MY',
    'Tunisian': 'TN',
    'Argentinian': 'AR',
    'Filipino': 'PH',
}

export function getFlagUrlOrPlaceholder(countryName: string): string {
    const fallbackCode = fallbackMap[countryName]
    const code = getAlpha2Code(countryName, 'en') || fallbackCode
    return code ? `https://flagcdn.com/w40/${code.toLowerCase()}.png` : placeholder
}

