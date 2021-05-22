// const wrap = styled.div`
//   display:flex-box
// `
import Default from './default'
export default function Problem({problem,idx,isActive,setSelected,filterProblem}) {
  const changeSelect = () =>{
    if (isActive) {
      setSelected(false)
    } else {
      setSelected(idx)
    }
  }
  const deleteProblem = () => {
    if (isActive){
      setSelected(false)
    }
    filterProblem(problem.id)
  }
  const Buttons = (
    <>
      <button onClick={changeSelect} className={isActive ? 'actived' : ''}>유사문항</button>
      <button onClick={deleteProblem}>삭제</button>
    </>
  )
  return (
    <Default
      problem={problem}
      buttons={Buttons}
      idx={idx}
    />
  )
}
