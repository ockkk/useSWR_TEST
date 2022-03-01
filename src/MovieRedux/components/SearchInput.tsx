import { useState } from "react";
import { useUpdateAtom } from "jotai/utils";
import { useSWRConfig } from 'swr';
import { useDispatch } from 'react-redux';
import { 
  changeQuery,
  changeDisplayCount,
  changeYearFrom,
  changeYearTo,
} from '../Movie.store';
import '../Movie.css';

export function SearchInput() {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();
  const { cache } = useSWRConfig()

  const onChangeSerachWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value as string);
  }

  const onChangeStartYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeYearFrom(Number(e.target.value)));
  }

  const onChangeLastYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeYearTo(Number(e.target.value)));
  }
  
  const onChangeDisplayCount = (e :React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeDisplayCount(Number(e.target.value)));
  }

  const onSearch = () => {
    dispatch(changeQuery(searchWord));
    console.log(cache);
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