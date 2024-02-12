import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/video/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchVidoes(searchId);
        setLoading(false);
    }, [searchId]);

    const fetchVidoes = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${searchId}&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((preVideos) => [...preVideos, ...data.items]);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
                setLoading(false);
            })
    }

    const handelLoadMore = () => {
        if (nextPageToken) {
            fetchVidoes(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="유튜브 검색"
            description="유튜브 검색 결과 페이지입니다.">

            <section id='searchPage' className={searchPageClass}>
                <h2>🤠<em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className='video__more'>
                    {nextPageToken && (
                        <button onClick={handelLoadMore}>더보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search

/*

1.const { searchId } = useParams();
>searchId를 useParams()함수를 사용해서 가지고 온다.

2.const [videos, setVideos] = useState([]);
>가지고 온 video를 저장해 줄 곳이 필요하기 때문에 useState

3.
    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setVideos(result.items)
            })
            .catch(error => console.log(error));
    }, [searchId]);

3_1.
useEffect(() => {     
    }, [searchId]);
[searchId] 값이 바뀌면 자동으로 인지해준다.

3_2.fetch() 를 사용해서 데이터를 가지고 온다.

3_3.then(response => response.json()) json 파일로 바꿔준다.

3_3.
.then(result => {
  setVideos(result.items)
})
then을 사용해서 값을 result 라고 처리한다.

3_4.catch(error => console.log(error));
에러가 있으면 에러를 캐치해서 에러를 표시해준다.

3_5.
fetch(
 `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
)
${process.env.REACT_APP_YOUTUBE_API_KEY}
api를 따로 만들었기때문에 REACT_APP_YOUTUBE_API_KEY 값을 넣어준다.
주소로 받아온 값을 전달 하기 위해 ${searchId}로 변경

 3_6.setVideos(result.items)
searchId, keyword 들어간 다음에
setVideos에 items값을 넣어줘야 한다.
items값이 배열이다.

4.<VideoSearch videos={videos} />
>setVideos 로 들어온 값이 setVideos여기에 저장이 되고
videos에 저장이 된다. 그걸 <VideoSearch videos={videos} /> 
속성으로 넘겨준다.

*/



