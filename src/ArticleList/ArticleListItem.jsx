import React from "react";
import SlugButton from "./SlugButton";
import './ArticleListItem.module.css'
import ArticleImage from './ArticleImage';

const ArticleListItem = props => {
    return (         
        <div>
            <head>
                <title>Articles</title>
            </head>
            <body>
                <section>
                    <div>
                        <ArticleImage url = {props.article.image._url} title={props.article.image.title}></ArticleImage>
                    </div>
                    <div>
                        <h1>{props.article.title}</h1>
                        <p>{props.article.shortText}</p>
                        <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>             
                        {<SlugButton article = {props.article}/>}
                    </div>
                </section>
            </body>

        </div>       
    )
}
export default ArticleListItem;