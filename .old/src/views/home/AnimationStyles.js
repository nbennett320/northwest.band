export default {
  cloud: {
    music: {
      width: '500px',
      height: '364px',
      animation: 'clouds1 0.8s steps(3) infinite',
    },

    merch: {
      width: '500px',
      height: '364px',
      animation: 'clouds2 0.8s steps(3) infinite'
    },

    goodies: {
      width: '500px',
      height: '462px',
      animation: 'clouds3 0.8s steps(4) infinite'
    }
  },

  text: {
    music: {
      main: {
        width: '495px',
        height: '273px',
        top: '20px',
        transform: 'scale(0.5)',
        animation: 'musicText 1.2s steps(11) infinite',
      },

      hover: {
        width: '500px',
        height: '164px',
        top: '80px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'musicTextHover 0.6s steps(3) infinite',
      }
    },

    merch: {
      main: {
        width: '500px',
        height: '198px',
        top: '70px',
        transform: 'scale(0.5)',
        animation: 'merchText 0.8s steps(4) infinite',
      },

      hover: {
        width: '500px',
        height: '145px',
        top: '90px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'merchTextHover 0.5s steps(2) infinite',
      }
    },

    goodies: {
      main: {
        width: '500px',
        height: '292px',
        top: '100px',
        transform: 'scale(0.6)',
        animation: 'goodiesText 1.5s steps(13) infinite',
      },

      hover: {
        width: '500px',
        height: '308px',
        top: '90px',
        left: '15px',
        transform: 'scale(0.6)',
        cursor: 'pointer',
        animation: 'goodiesTextHover 0.6s steps(3) infinite',
      }
    },
  }
}