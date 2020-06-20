export default {
  image: {
    demos: {
      width: '300px',
      height: '295px',
      animation: 'demos 0.8s steps(3) infinite',
    },

    vault: {
      width: '500px',
      height: '295px',
      animation: 'vault 0.8s steps(3) infinite'
    }
  },

  container: {
    marginTop: '20px'
  },

  text: {
    demos: {
      main: {
        width: '500px',
        height: '118px',
        top: '20px',
        transform: 'scale(0.5)',
        animation: 'demosText 1.2s steps(3) infinite',
      },
    },

    vault: {
      main: {
        width: '500px',
        height: '115px',
        top: '70px',
        transform: 'scale(0.5)',
        animation: 'vaultText 0.8s steps(3) infinite',
      },
    }
  }
}