import React from 'react';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';
import './blog.css';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog1} date="Sep 29, 2021" title=" UFC 263: The MiddleWeight Title is up for grabs this weekend" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog2} date="Sep 29, 2021" title="Lewis Hamilton's former title rival Nico Rosberg on Max Verstappen's aggressive driving style" />
                    <Article imgUrl={blog3} date="Sep 29, 2021" title="" />
                    <Article imgUrl={blog4} date="Sep 29, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog5} date="Sep 29, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog
