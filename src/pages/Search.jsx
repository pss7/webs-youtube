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
