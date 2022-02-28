import { useState } from "react";
import { useUpdateAtom } from "jotai/utils";
import { movieParamsAtom } from "../Movie.store";

export function SearchInput() {
  const [searchWord, setSearchWord] = useState('');
  const setMovieParams = useUpdateAtom(movieParamsAtom);

  const onChangeSerachWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value as string);
  }
  
  const onSearch = () => {
    setMovieParams((prev) => ({
      ...prev,
      query: searchWord,
    }))
  }

  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    if(e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div>
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