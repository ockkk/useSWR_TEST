import { useState } from "react";
import { useUpdateAtom } from "jotai/utils";
import { movieParamsAtom } from "../Movie.store";
import { useSWRConfig } from 'swr';
import '../Movie.css'

export function SearchInput() {
  const [searchWord, setSearchWord] = useState('');
  const setMovieParams = useUpdateAtom(movieParamsAtom);
  const { cache } = useSWRConfig()
  const onChangeSerachWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value as string);
  }

  const onChangeStartYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieParams((prev) => ({
      ...prev,
      yearfrom: Number(e.target.value),
    }))
  }

  const onChangeLastYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieParams((prev) => ({
      ...prev,
      yearto: Number(e.target.value),
    }))
  }
  
  const onChangeDisplayCount = (e :React.ChangeEvent<HTMLSelectElement>) => {
    setMovieParams((prev) => ({
      ...prev,
      display: Number(e.target.value),
    }))
  }

  const onSearch = () => {
    setMovieParams((prev) => ({
      ...prev,
      query: searchWord,
    }))
    console.log(cache)
  }

  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    if(e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div>
      <div className="date-box">
        <select onChange={onChangeStartYear}>
          {
            yearOptions().map(year => (
              <option key={year}>{year}</option>
            ))
          }
        </select>
        <select onChange={onChangeLastYear}>
          {
            yearOptions().reverse().map(year => (
              <option key={year}>{year}</option>
            ))
          }
        </select>
      </div>
      <div>
        <select onChange={onChangeDisplayCount}>
          <option key={10}>10</option>
          <option key={20}>20</option>
          <option key={30}>30</option>
          <option key={40}>40</option>
        </select>
      </div>
      <input
        placeholder="영화 제목을 입력해 주세요."
        value={searchWord}
        onChange={onChangeSerachWord}
        onKeyPress={onKeyPressEnter}
      />
      <button onClick={onSearch}>
        검색
      </button>
    </div>
  )
}

const yearOptions = () => {
  const yearList = [];
  let startYear = 1920;
  while(startYear <= 2022) {
    yearList.push(startYear)
    startYear++
  }

  return yearList;
}