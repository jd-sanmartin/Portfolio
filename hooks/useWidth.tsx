import {
  Breakpoint,
  Theme,
  useMediaQuery,
  useTheme
} from '@mui/material'

/**
 * taken from https://material-ui.com/components/use-media-query/#migrating-from-withwidth
 *
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 * 
 * Fixed version to code by user Apoplectic in Stack Overflow
 */
type BreakpointOrNull = Breakpoint | null;

export const useWidth = (): Breakpoint => {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();

  let output: BreakpointOrNull = null;

  for (const key of keys) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useMediaQuery(theme.breakpoints.up(key))

    if (matches) {
      output = output || key;
    }
  }

  return output as Breakpoint;
}
