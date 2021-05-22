export default function Default({problem,idx,buttons}){
  const {problemType,problemURL,unitName} = problem
  return (
    <div className="problem-wrap">
      <div className="problem-concept">
        <div className="problemType">{problemType}</div>
        <p className="unitName">{unitName}</p>
        {buttons}
      </div>
      <div className="problem-description">
        <div className="problem-id">{idx+1}</div>
        <img className="problem" src={problemURL} alt={unitName}></img>
      </div>
    </div>
  )
}