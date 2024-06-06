import { getNewsTopHeadLines } from '@/api'
import { removeDuplicateData } from '@/utils'
import React from 'react'
import Article from './Article'

const TopHeadLines = async () => {
    const newsTop = await getNewsTopHeadLines()
    const filterArticle = removeDuplicateData(newsTop)
  return (
    <div className ="w-[700px]">
        {filterArticle.map((article,idx) => (
            <div key={`${article.title}-${idx}`}>
                <Article data={article}/>
            </div>
        ))}
    </div>
  )
}

export default TopHeadLines
