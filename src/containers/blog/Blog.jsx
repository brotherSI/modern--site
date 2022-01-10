import React from 'react';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">Whats happening int the world of sports .</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog1} date="06 Jan, 2022" title=" UFC 263: The MiddleWeight Title is up for grabs this weekend" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog2} date="12 Feb, 2022" title="Lewis Hamilton's former title rival Nico Rosberg on Max Verstappen's aggressive driving style" />
                    <Article imgUrl={blog3} date="Jan 29, 2022" title="Arsenal news and fixtures LIVE: Arteta speaks out on Leno error in Rapid Vienna win." />
                    <Article imgUrl={blog4} date="22 April , 2022" title="The Lakers are going to need to continue playing the way that they have been ever since Johnson joined the team." />
                    <Article imgUrl={blog5} date="17 July, 2022" title="The return fixture at Camp Nou will come in week 36 of the league, just three games from the end of the season." />
                </div>
            </div>
        </div>
    )
}

export default Blog
