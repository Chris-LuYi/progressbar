const style = (theme) => {
  const { palette: { primary: { main }, error: { main: errorMain } } } = theme
  return {
    root: {
      position: 'relative',
      margin: theme.spacing(),
      border: '1px solid rgba(0, 0, 0, 0.5)',
      height: 50,
    },
    value: {
      fontSize: '1.5rem',
      lineHeight: '50px',
      zIndex: 1,
      position: 'relative',
    },
    bar: {
      backgroundColor: main,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'width 0.5s',
      maxWidth: '100%',
    },
    barExceed: {
      backgroundColor: errorMain,
    },
    current: {
      borderWidth: 2,
      boxShadow:
        '0px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.2);',
    },
  }
}

export default style
