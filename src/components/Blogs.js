import React, { Component } from 'react';
import Axios from 'axios';

export class Blogs extends Component
{
    state={newsData:[]}
    componentDidMount()
    {
        const URL="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d84765ac787f4ee39288cf39e5491091";
      Axios.get(URL)
      .then(res=>
        {
       this.setState({newsData:res.data.articles});
       console.log(res.data.articles);     

        })
    }
    render()
    {
        return(
            <div className='dd'>

         <center><h1><u>Trending News</u></h1></center>
            {this.state.newsData.map(news=>
                <div>
                    <h2>{news.title}</h2>
                    <br />
                    <h1>{news.author}</h1>
                    <br />
                    <h1>{news.description}</h1>
                    <br />
                    <article>
                        <img src={news.urlToImage} width={400} height={150}></img>
                    </article>
                    <h1>{news.url}</h1>
                    <br />
            

                    <h1>{news.publishedAt}</h1>
                    <br />
                    
                    </div>
                    )}

            </div>
        )
    }
}
export default Blogs;