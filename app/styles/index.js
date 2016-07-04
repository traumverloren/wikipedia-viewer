const styles = {
  background: {
    height: '100%',
    width: '100%',
    backgroundImage: 'url("../app/images/doge.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    paddingTop: '10px',
    fontFamily: 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif'
  },

  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },

  resultsFlexContainer: {
    display: 'flex',
    maxHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  jumbotron: {
    background: '#FFECB3',
    paddingBottom: '25px'
  },

  resultsWrapper: {
    backgroundColor: '#FFECB3',
    borderRadius: '15px',
    padding: '0 10px 10px 10px',
    marginBottom: '10px',
    overflow: 'auto'
  },

  resultsHeader: {
    color: '#8e44ad'
  },

  resultsTitle: {
    color: '#e67e22'
  },

  result: {
    background: '#FFECB3',
  }
}

export default styles
