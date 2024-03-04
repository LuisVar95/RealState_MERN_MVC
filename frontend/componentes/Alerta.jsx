const Alerta = ({alerta}) => {
    return (
      <div className= {alerta.error ? 'alerta__roja' : 'alerta__verde'}>
          {alerta.msg}
      </div>
    )
  }
  
  export default Alerta