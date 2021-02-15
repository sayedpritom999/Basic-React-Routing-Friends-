import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-13&sortBy=publishedAt&apiKey=bcadf45c8d4d42bf889cd4dcba4278a9"
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    })
    return (
        <div>
            <h1>Top headline articles number: {articles.length}</h1>
            {
                articles.map(article => <News article = {article}></News>)
            }
        </div>
    );
};

export default TopHeadline;