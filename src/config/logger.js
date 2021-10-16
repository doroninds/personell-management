const LoggerColors = {
  RED: '\u001b[1;31m',
  YELLOW: '\u001b[1;33m',
  GREEN: '\u001b[1;32m',
  RESET: '\x1b[0m',
}

const logger = {
  table: (rows, props) => console.table(rows, props),
  info: (...args) => console.info(`info: ${LoggerColors.GREEN}`, ...args, `${LoggerColors.RESET}`),
  warn: (...args) => console.warn(`warn: ${LoggerColors.YELLOW}`, ...args, `${LoggerColors.RESET}`),
  error: (...args) => console.error(`error: ${LoggerColors.RED}`, ...args, `${LoggerColors.RESET}`),
}


export default logger