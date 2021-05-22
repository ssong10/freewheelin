import './App.css';
import Problem from './component/problem'
import Similar from './component/similar'
import Noselect from './component/noselect'

import { fetchProblems, fetchSimilars } from './utils/index'
import React, {useState , useEffect } from 'react'

export default function App() {
  const [problems, setProblems] = useState([])
  const [similars , setSimilars] = useState([])
  const [selected, setSelected] = useState(false)
  const getProblems = async () => {
    const {data} = await fetchProblems()
    setProblems(data.data)
  }
  const getSimilars = async () => {
    const {data} = await fetchSimilars()
    setSimilars(data.data)
  }
  useEffect(() => {
    getProblems()
    getSimilars()
  },[])
  const filterProblem = (id)=>{
    setProblems(problems.filter(problem=>problem.id !== id))
  }
  const change = (arr,i,element) => {
    return arr.map((p,idx) => {
      if (idx === i) {
        return element
      }
      return p
    })
  }
  const moveSimilar = (select_similar) => {
    const left = problems.slice(0,selected+1)
    const right = problems.slice(selected+1)
    setProblems(left.concat(select_similar,right))
    setSimilars(similars.filter(similar => similar !== select_similar))
  }
  const changeSelect = (select_similar,idx) => {
    const tmp = problems[selected]
    setSimilars(change(similars,idx,tmp))
    setProblems(change(problems,selected,select_similar))
  }
  return (
    <div className="App">
      <div className="container">
        <div className="problems-wrap">
          <h3 className="header">학습지 상세 편집</h3>
          {problems.map((problem,idx) => (
            <Problem
              key={idx}
              problem={problem}
              idx={idx}
              isActive={selected===idx}
              setSelected={setSelected}
              filterProblem={filterProblem}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <div className='similars-wrap'>
          <h3 className="header text-center">문항 교체 / 추가</h3>
          { selected === false
          ? 
            <Noselect />
          : 
            (
              <>
                <div className="selected-unitName">{problems[selected].unitName}</div>
                  {similars.map((similar,idx) => (
                    <Similar
                      key={idx}
                      problem={similar}
                      idx={idx}
                      moveSimilar={moveSimilar}
                      changeSelect={changeSelect}
                    />))
                  }
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}