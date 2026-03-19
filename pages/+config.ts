import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

export default {
  title: 'Profile',
  description: 'Profile pages rendered with Vike + React',
  prerender: true,
  extends: [vikeReact],
} satisfies Config
