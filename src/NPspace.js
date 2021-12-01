function NPspace(props) {
    const { name, image, description, id } = props
    const url = image
    
    function openDetail() {
      window.location.href = '/detail/' + id
    }

    return (
      <div onClick={openDetail}>
        <img
          src={url}
          width="300"
          height="300"
          alt="Hello"
        />
        <h1>{name}</h1>
      </div>
    )
  }

  export default NPspace