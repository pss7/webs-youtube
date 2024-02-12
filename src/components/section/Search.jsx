import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' 
                    name='searchInput' 
                    id='searchInput' 
                    autoComplete='off'
                    className='search__input'
                    placeholder='검색어를 입력해주세요!'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search


/*

 1.
     onChange={e => setSearchKeyword(e.target.value)} 
     >쓴 값을 e라는 이벤트 값에서 인식할 수 있게 처리
      setSearchKeyword 에 e.target.value값에 넣어준다.

 2.
     const [searchKeyword, setSearchKeyword] = useState('');
     >input에 값이 바뀌면 이벤트 값을 통해 값을 가지고 오면 키워드를 setSearchKeyword에 넣어준다.

 3.
    onKeyDown={e => {
     if (e.key === 'Enter') {
         handleSearch();
        }
    }}     
    >이벤트 값을 가지고 온다음에 
    만약에 키 값이 엔터이면  handleSearch() 함수 실행

 4.
    searchKeyword 통해 가지고 온 searchKeyword 값을
    get 방식처럼 주소에 넘겨줄거다. 왜냐하면
    App.js
   <Route path='/search/:searchId' element={<Search />} />
    /search/:searchId 
    search 다음에 키워드를 넣어주기 때문이다.
 
   const navigate = useNavigate();

   const handleSearch = () => {
      console.log(searchKeyword)
      if (searchKeyword) {
         navigate(`/search/${searchKeyword}`);
           setSearchKeyword('');
         }
     };

 >const navigate = useNavigate();
 useNavigate() 주소값을 가지고 온다.
 키워드가 들어 왔을 때 주소에다가 키워드를 넣어준다.
 주소에 전달되면 다시 빈문자열로 초기화 시켜준다.
 
 */