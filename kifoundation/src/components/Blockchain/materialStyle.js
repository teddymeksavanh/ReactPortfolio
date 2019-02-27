const styles = theme => ({
    octagon: {
        objectFit: 'cover',
        padding: '50px',
        height: '90%',
        maxHeight: '550px'
    },
    link: {
        marginRight: '1rem',
        color: '#292929',
        cursor: 'pointer',
        fontSize: '11px',
        opacity: 0.7,
        textTransform: 'uppercase',
        borderRight: '1px solid grey',
        paddingRight: '1rem',
        '&:hover': {
            color: '#0021f5 !important',
            textDecoration: 'none'
        },
        '&:last-child': {
            border: 'none'
        }
    },
    title: {
        color: '#3b426c',
        marginBottom: '0.6rem',
        position: 'relative',
        fontWeight: 800
        // '&::before': {
        //     content: `'_'`,
        //     position: 'absolute',
        //     left: "-40px",
        //     top: "-7px",
        //     color: "#0021f5"
        // }
    },
    titleColored: {
      color: '#0021f5',
      marginBottom: '0.6rem',
      position: 'relative',
      fontWeight: 800
      // '&::before': {
      //     content: `'_'`,
      //     position: 'absolute',
      //     left: "-40px",
      //     top: "-7px",
      //     color: "#0021f5"
      // }
  },
    subtitle: {
        color: '#3b426c',
        marginBottom: '2rem'
    },
    card: {
        width: 'fit-content',
        textAlign: 'center',
        minWidth: '150px',
        margin: '20px 0'
    },
    cardIcon: {
        marginBottom: '15px'
    },
    imageButton: {
        display: 'block',
        background: 'none',
        border: 'none',
        margin: '0 auto'
    },
    capabilitiesText: {
        fontSize: '11px',
        opacity: 0.8,
        letterSpacing: '2px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        // height: '100vh'
      },
      tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
      },
      tabsIndicator: {
        backgroundColor: '#0021f5',
      },
      tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          color: '#0021f5',
          opacity: 1,
        },
        '&$tabSelected': {
          color: '#0021f5',
          fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
          color: '#0021f5',
        },
      },
      tabSelected: {},
      typography: {
        padding: theme.spacing.unit * 3,
      },
});
  
export default styles;