export const styles = {
  Button: (theme) => ({
    root: {
      borderColor: theme.colors.blue,
      borderRadius: theme.radius.xl,
      borderStyle: 'solid',
      borderWidth: '2px',
      fontSize: '0.9rem',
      minWidth: '12rem',
      textTransform: 'uppercase',
    },

    filled: {
      background: `${theme.colors.blue[6]} !important`,
      color: theme.white,

      '&:hover': {
        backgroundColor: `${theme.colors.blue[7]} !important`,
        borderColor: theme.colors.blue[7],
      },
    },
  }),
}
