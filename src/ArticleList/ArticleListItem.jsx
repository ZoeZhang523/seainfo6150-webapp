import React from "react";
import SlugButton from "./SlugButton";
import './ArticleListItem.module.css'
import ArticleImage from './ArticleImage';
import style from "./ArticleListItem.module.css";

const ArticleListItem = props => {
    return (         
        <div>
            <head>
                <title>Articles</title>
            </head>
            <body>
                <section className = {style.container}>
                    <div>
                        <ArticleImage url = {props.article.image._url} title={props.article.image.title}></ArticleImage>
                        <h1>{props.article.title}</h1>
                        <p>{props.article.shortText}</p>
                        <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>                            
                    </div>
                    <div className={style.button}>
                        {<SlugButton article = {props.article}/>}
                    </div>
                </section>
            </body>

        </div>       
    )
}
export default ArticleListItem;