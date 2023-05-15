import path from 'path'

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development'

const IS_SWC: boolean = true
const IS_LAZY_COMPILATION = false
const DEV_SERVER_PORT: number = 8080

const SRC_DIR: string = path.join(__dirname, '../src')
const DIST_DIR: string = path.join(__dirname, '../dist')
const SERVER_SRC_DIR: string = path.join(__dirname, '../src/server')

const SERVER_BUNDLE_NAME: string = 'server'

const ALIAS: Record<string, string> = {
  api: `${SRC_DIR}/api`,
  assets: `${SRC_DIR}/assets`,
  components: `${SRC_DIR}/components`,
  constants: `${SRC_DIR}/constants`,
  hocs: `${SRC_DIR}/hocs`,
  hooks: `${SRC_DIR}/hooks`,
  i18n: `${SRC_DIR}/i18n`,
  images: `${SRC_DIR}/assets/images`,
  pages: `${SRC_DIR}/pages`,
  router: `${SRC_DIR}/router`,
  server: `${SRC_DIR}/server`,
  services: `${SRC_DIR}/services`,
  src: `${SRC_DIR}`,
  style: `${SRC_DIR}/style`,
  store: `${SRC_DIR}/store`,
  types: `${SRC_DIR}/types`,
  utils: `${SRC_DIR}/utils`,
  _webpack: path.join(__dirname, '../webpack')
}

export {
  ALIAS,
  DEV_SERVER_PORT,
  DIST_DIR,
  IS_DEV,
  IS_SWC,
  IS_LAZY_COMPILATION,
  SERVER_BUNDLE_NAME,
  SERVER_SRC_DIR,
  SRC_DIR
}
