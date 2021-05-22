import Default from './default'

export default function Similar({problem,idx,moveSimilar,changeSelect}) {
  const addSimilar = ()=>{
    moveSimilar(problem)
  }
  const changeSimilar = () => {
    changeSelect(problem,idx)
  }
  const Buttons = (
    <>
      <button onClick={addSimilar}>추가</button>
      <button onClick={changeSimilar}>교체</button>
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
